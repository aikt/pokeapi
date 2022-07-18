const express = require('express');

const controller = require('./controller/index');

const router = express.Router();

router.get('/all', (req, res) => {
  controller.getAllPokemons(res);
});
router.get('/search', (req, res) => {
  controller.searchPokemon(req, res);
});
router.get('*', (req, res) => {
  controller.notFound(res);
});

module.exports = router;
