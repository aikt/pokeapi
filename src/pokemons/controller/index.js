const { getListPokemons } = require('../../api_externals/pokeapi');

module.exports.getAllPokemons = async (res) => {
  const listPokemons = await getListPokemons();
  if (listPokemons) {
    res.status(200).json({
      code: 200,
      data: {
        total: listPokemons.count,
        resultados: listPokemons.results,
      },
    });
  } else {
    res
      .status(404)
      .json({ code: 404, data: 'Problem connections with PokeAPI' });
  }
};
module.exports.searchPokemon = async (req, res) => {
  res.status(200).json({ search: 'Hello search' });
};
module.exports.notFound = async (res) => {
  res.status(200).json({ data: 'Not route found in pokemons/' });
};
