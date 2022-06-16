const pool = require('../utils/pool');

class Alien {
  id;
  type;
  description;

  constructor(row) {
    this.id = row.id;
    this.type = row.type;
    this.description = row.description;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from aliens');
    return rows.map((row) => new Alien(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from aliens WHERE id=$1', [id]);
    return new Alien(rows[0]);
  }

  static async insert({ type, description }) {
    const { rows } = await pool.query(
      'INSERT INTO aliens (type, description) VALUES ($1,$2) RETURNING * ',
      [type, description]
    );
    return new Alien(rows[0]);
  }
}

module.exports = Alien;
