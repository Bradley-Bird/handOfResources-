const { Router } = require('express');
const Alien = require('../models/Aliens');

module.exports = Router()
  .put('/:id', async (req, res, next) => {
    try {
      const updatedAlien = await Alien.updateById(req.params.id, req.body);
      res.json(updatedAlien);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const alienId = await Alien.getById(req.params.id);
      res.json(alienId);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const newAlien = await Alien.insert(req.body);
      res.json(newAlien);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const alienData = await Alien.getAll();
      res.json(alienData);
    } catch (e) {
      next(e);
    }
  });
