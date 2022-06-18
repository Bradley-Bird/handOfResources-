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
}
module.exports = Legend;
