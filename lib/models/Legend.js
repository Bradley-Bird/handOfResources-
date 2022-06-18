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
}
module.exports = Legend;
