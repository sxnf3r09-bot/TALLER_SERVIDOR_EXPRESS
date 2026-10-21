const games = require('../data/games');

const getAllGames = () => {
  return games;
};

const getGameById = (id) => {
  return games.find(game => game.id === parseInt(id));
};

module.exports = {
  getAllGames,
  getGameById
};