const { Router } = require('express');
const Lpotl = require('../models/Lpotl');

module.exports = Router()
  .delete('/:id', async (req, res, next) => {
    try {
      const deleteId = await Lpotl.delete(req.params.id);
      res.json(deleteId);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updateId = await Lpotl.updateById(req.params.id, req.body);
      res.json(updateId);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    console.log('req.params.id', req.params.id);
    try {
      const lpotlId = await Lpotl.getById(req.params.id);
      res.json(lpotlId);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const newLpotl = await Lpotl.insert(req.body);
      res.json(newLpotl);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const lpotl = await Lpotl.getAll();
      res.json(lpotl);
    } catch (e) {
      next(e);
    }
  });
