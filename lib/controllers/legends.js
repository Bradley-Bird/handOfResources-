const { Router } = require('express');
const Legend = require('../models/Legend');

module.exports = Router()
  .delete('/:id', async (req, res, next) => {
    try {
      const deleteId = await Legend.delete(req.params.id);
      res.json(deleteId);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updateId = await Legend.updateById(req.params.id, req.body);
      res.json(updateId);
    } catch (e) {
      next(e);
    }
  })
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
