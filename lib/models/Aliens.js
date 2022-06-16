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
}

module.exports = Alien;
