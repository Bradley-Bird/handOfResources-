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
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM lpotl_cast WHERE id=$1', [
      id,
    ]);
    return new Lpotl(rows[0]);
  }
  static async insert({ name, about }) {
    const { rows } = await pool.query(
      'INSERT INTO lpotl_cast (name, about) VALUES ($1, $2) RETURNING * ',
      [name, about]
    );
    return new Lpotl(rows[0]);
  }
}
module.exports = Lpotl;
