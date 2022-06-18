const { Router } = require('express');
const Food = require('../models/Food');

module.exports = Router()
  .delete('/:id', async (req, res, next) => {
    try {
      const deleteId = await Food.delete(req.params.id);
      res.json(deleteId);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updateId = await Food.updateById(req.params.id, req.body);
      res.json(updateId);
    } catch (e) {
      next(e);
    }
  })
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
