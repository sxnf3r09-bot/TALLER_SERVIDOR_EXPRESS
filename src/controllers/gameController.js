const gameService = require('../services/gameService');

const getGames = (req, res) => {
  const games = gameService.getAllGames();
  res.json({ success: true, data: games });
};

const getGame = (req, res) => {
  const { id } = req.params;
  const game = gameService.getGameById(id);
  if (!game) {
    return res.status(404).json({ success: false, message: 'Juego no encontrado' });
  }
  res.json({ success: true, data: game });
};

module.exports = {
  getGames,
  getGame
};