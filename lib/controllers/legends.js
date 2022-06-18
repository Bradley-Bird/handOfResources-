const { Router } = require('express');
const Legend = require('../models/Legend');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const legends = await Legend.getAll();
    res.json(legends);
  } catch (e) {
    next(e);
  }
});
