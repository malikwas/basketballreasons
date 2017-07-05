const express = require('express');
const data = require('nba.js').data;

const dataRouter = express.Router();

// NBA SCHEDULE
dataRouter.get('/schedule', (req, res) => {
  data.schedule({
    year: req.year
  })
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// NBA CALENDAR
dataRouter.get('/calendar', (req, res) => {
  data.calendar()
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// NBA CONFERENCE STANDINGS
dataRouter.get('/conferenceStandings', (req, res) => {
  data.conferenceStandings({
    date: req.params.date || 'current'
  })
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// NBA TEAMS
dataRouter.get('/teams', (req, res) => {
  data.teams({
    year: req.year
  })
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// NBA TEAM LEADERS
dataRouter.get('/teamLeaders', (req, res) => {
  data.teamLeaders({
    year: req.query.year,
    teamName: req.query.teamName
  })
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// NBA PLAYERS
dataRouter.get('/players', (req, res) => {
  debugger;
  data.players({
    year: req.year
  })
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

module.exports = dataRouter;