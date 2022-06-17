const ff7 = require('../controllers/ff7');
const pool = require('../utils/pool');

class Ff7 {
  id;
  name;
  about;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.about = row.about;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM ff7');
    return rows.map((row) => new Ff7(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM ff7 WHERE id=$1', [id]);
    return rows[0];
  }
  static async insert({ name, about }) {
    const { rows } = await pool.query(
      'INSERT INTO ff7 (name, about) VALUES ($1, $2) RETURNING * ',
      [name, about]
    );
    return new Ff7(rows[0]);
  }
}

module.exports = Ff7;
