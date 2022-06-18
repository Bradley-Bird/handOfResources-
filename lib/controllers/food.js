const { Router } = require('express');
const Food = require('../models/Food');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const foodId = await Food.getById(req.params.id);
      res.json(foodId);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const newFood = await Food.insert(req.body);
      res.json(newFood);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const food = await Food.getAll();
      res.json(food);
    } catch (e) {
      next(e);
    }
  });
