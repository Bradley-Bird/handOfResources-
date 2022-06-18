const pool = require('../utils/pool');

class Legend {
  id;
  name;
  role;
  about;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.role = row.role;
    this.about = row.about;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM legends');
    return rows.map((row) => new Legend(row));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM legends WHERE id=$1', [
      id,
    ]);
    return rows[0];
  }
  static async insert({ name, role, about }) {
    const { rows } = await pool.query(
      'INSERT INTO legends (name, role, about) VALUES ($1, $2, $3) RETURNING * ',
      [name, role, about]
    );
    return new Legend(rows[0]);
  }
  static async updateById(id, attrs) {
    const legend = await Legend.getById(id);
    if (!legend) return null;
    const { name, role, about } = { ...legend, ...attrs };
    const { rows } = await pool.query(
      `
     UPDATE legends 
     SET name=$2, role=$3, about=$4
     WHERE id=$1 RETURNING *
        `,
      [id, name, role, about]
    );
    return new Legend(rows[0]);
  }
  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM legends WHERE id=$1 RETURNING *',
      [id]
    );
    return new Legend(rows[0]);
  }
}
module.exports = Legend;
