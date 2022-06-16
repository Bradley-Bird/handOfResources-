const { Router } = require('express');
const Alien = require('../models/Aliens');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const alienId = await Alien.getById(req.params.id);
    res.json(alienId);
  })
  .get('/', async (req, res) => {
    const alienData = await Alien.getAll();
    res.json(alienData);
  });
