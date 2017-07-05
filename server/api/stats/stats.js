const express = require('express');
const stats = require('nba.js').stats;

const statsRouter = express.Router();

// NBA SCHEDULE
statsRouter.get('/schedule', (req, res) => {
  stats.schedule({
    data: req.data
  })
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// NBA CALENDAR
statsRouter.get('/calendar', (req, res) => {
  stats.calendar()
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

module.exports = statsRouter;