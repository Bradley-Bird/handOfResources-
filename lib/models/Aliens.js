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

  static async updateById(id, attrs) {
    const alien = await Alien.getById(id);
    if (!alien) return null;
    const { type, description } = { ...alien, ...attrs };
    const { rows } = await pool.query(
      `
    UPDATE aliens
    SET type=$2, description=$3 
    WHERE id=$1 RETURNING *
    `,
      [id, type, description]
    );
    return new Alien(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM aliens WHERE id=$1 RETURNING *',
      [id]
    );
    return new Alien(rows[0]);
  }
}

module.exports = Alien;
