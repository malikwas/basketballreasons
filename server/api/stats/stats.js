// FOR DOCUMENTATION ON EACH METHOD, REFER TO
// https://github.com/kshvmdn/nba.js/blob/master/docs/api/STATS.md

const express = require('express');
const stats = require('nba.js').stats;

const statsRouter = express.Router();

// ALL PLAYERS LIST
statsRouter.get('/allPlayers', (req, res) => {
  stats.allPlayers(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

module.exports = statsRouter;