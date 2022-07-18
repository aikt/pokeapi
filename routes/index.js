const pokemons = require('../src/pokemons/routes');

module.exports = (app) => {
  app.use('/pokemons', pokemons);
  app.use('*', (req, res) => {
    res.send('Not found!!!');
  });
};
