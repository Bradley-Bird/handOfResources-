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
}
module.exports = Food;
