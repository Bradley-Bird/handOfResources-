const pool = require('../utils/pool');

class Lpotl {
  id;
  name;
  about;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.about = row.about;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM lpotl_cast');
    return rows.map((row) => new Lpotl(row));
  }
}
module.exports = Lpotl;
