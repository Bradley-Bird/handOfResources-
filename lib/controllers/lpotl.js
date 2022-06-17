const { Router } = require('express');
const Lpotl = require('../models/Lpotl');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const lpotl = await Lpotl.getAll();
    res.json(lpotl);
  } catch (e) {
    next(e);
  }
});
