const axios = require('axios').default;
const config = require('../../config');

module.exports.getListPokemons = async () => {
  try {
    const response = await axios.get(`${config.api}pokemon/?limit=-1`);
    return response.data;
  } catch (error) {
    return false;
  }
};
