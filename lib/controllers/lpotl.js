const { Router } = require('express');
const Lpotl = require('../models/Lpotl');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
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
