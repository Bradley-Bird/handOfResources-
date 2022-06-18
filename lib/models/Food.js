const pool = require('../utils/pool');

class Food {
  id;
  name;
  region;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.region = row.region;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM food');
    return rows.map((row) => new Food(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM food WHERE id=$1', [id]);
    return rows[0];
  }
  static async insert({ name, region }) {
    const { rows } = await pool.query(
      'INSERT INTO food (name, region) VALUES ($1, $2) RETURNING * ',
      [name, region]
    );
    return new Food(rows[0]);
  }
  static async updateById(id, attrs) {
    const food = await Food.getById(id);
    if (!food) return null;
    const { name, region } = { ...food, ...attrs };
    const { rows } = await pool.query(
      `
     UPDATE food 
     SET name=$2, region=$3
     WHERE id=$1 RETURNING *
        `,
      [id, name, region]
    );
    return new Food(rows[0]);
  }
  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM food WHERE id=$1 RETURNING *',
      [id]
    );
    return new Food(rows[0]);
  }
}
module.exports = Food;
