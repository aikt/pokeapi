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
  const { name } = req.params;
  const letters = /^[A-Za-z]+$/;
  if (name.length > 0) {
    if (name.match(letters)) {
      const listPokemons = await getListPokemons();
      if (listPokemons) {
        const resultMatch = [];
        listPokemons.results.forEach((value) => {
          const re = new RegExp(name, 'g');
          const match = value.name.match(re);
          if (match) {
            resultMatch.push(value);
          }
        });
        res.status(200).json({
          code: 200,
          data: resultMatch,
        });
      } else {
        res
          .status(404)
          .json({ code: 404, data: 'Problem connections with PokeAPI' });
      }
    } else {
      res
        .status(404)
        .json({ code: 404, data: 'Bad Search: Only letters in the search' });
    }
  } else {
    res.status(404).json({ code: 404, data: 'Bad search: Empty name' });
  }
};
module.exports.notFound = async (res) => {
  res.status(404).json({ data: 'Not route found in pokemons/' });
};
