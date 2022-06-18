const { Router } = require('express');
const Legend = require('../models/Legend');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const legendId = await Legend.getById(req.params.id);
      res.json(legendId);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const newLegend = await Legend.insert(req.body);
      res.json(newLegend);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const legends = await Legend.getAll();
      res.json(legends);
    } catch (e) {
      next(e);
    }
  });
