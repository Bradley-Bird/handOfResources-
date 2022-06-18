const { Router } = require('express');
const Food = require('../models/Food');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const food = await Food.getAll();
    res.json(food);
  } catch (e) {
    next(e);
  }
});
