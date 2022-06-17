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
}

module.exports = Ff7;
