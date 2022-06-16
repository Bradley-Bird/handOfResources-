const { Router } = require('express');
const Alien = require('../models/Aliens');

module.exports = Router().get('/', async (req, res) => {
  const alienData = await Alien.getAll();
  res.json(alienData);
});
