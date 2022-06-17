const { Router } = require('express');
const Ff7 = require('../models/Ff7');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const ff7 = await Ff7.getAll();
    res.json(ff7);
  } catch (e) {
    next(e);
  }
});
