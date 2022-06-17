const { Router } = require('express');
const Ff7 = require('../models/Ff7');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const ff7Id = await Ff7.getById(req.params.id);
      res.json(ff7Id);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const newFf7 = await Ff7.insert(req.body);
      res.json(newFf7);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const ff7 = await Ff7.getAll();
      res.json(ff7);
    } catch (e) {
      next(e);
    }
  });
