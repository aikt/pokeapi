require('dotenv').config();

const config = {
  port: 5000,
  api: process.env.urlPokeApi,
};

module.exports = config;
