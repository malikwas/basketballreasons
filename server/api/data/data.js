// FOR DOCUMENTATION ON EACH METHOD, REFER TO
// https://github.com/kshvmdn/nba.js/blob/master/docs/api/DATA.md

const express = require('express');
const data = require('nba.js').data;

const dataRouter = express.Router();

// CALENDAR
dataRouter.get('/calendar', (req, res) => {
  data.calendar(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// SCOREBOARD
dataRouter.get('/scoreboard', (req, res) => {
  data.scoreboard(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// TEAMS
dataRouter.get('/teams', (req, res) => {
  data.teams(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// PLAYERS
dataRouter.get('/players', (req, res) => {
  data.players(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// COACHES
dataRouter.get('/coaches', (req, res) => {
  data.coaches(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// SCHEDULE
dataRouter.get('/schedule', (req, res) => {
  data.schedule(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// CONFERENCESTANDINGS
dataRouter.get('/conferenceStandings', (req, res) => {
  data.conferenceStandings(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// DIVISIONSTANDINGS
dataRouter.get('/divisionStandings', (req, res) => {
  data.divisionStandings(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// STANDINGS
dataRouter.get('/standings', (req, res) => {
  data.standings(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// MINISTANDINGS
dataRouter.get('/miniStandings', (req, res) => {
  data.miniStandings(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// TEAMSTATSLEADERS
dataRouter.get('/teamStatsLeaders', (req, res) => {
  data.teamStatsLeaders(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// LASTFIVEGAMESTATS
dataRouter.get('/lastFiveGameStats', (req, res) => {
  data.lastFiveGameStats(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// PREVIEWARTICLE
dataRouter.get('/previewArticle', (req, res) => {
  data.previewArticle(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// RECAPARTICLE
dataRouter.get('/recapArticle', (req, res) => {
  data.recapArticle(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// BOXSCORE
dataRouter.get('/boxScore', (req, res) => {
  data.boxScore(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// MINIBOXSCORE
dataRouter.get('/miniBoxscore', (req, res) => {
  data.miniBoxscore(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// PBP
dataRouter.get('/pbp', (req, res) => {
  data.pbp(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// LEADTRACKER
dataRouter.get('/leadTracker', (req, res) => {
  data.leadTracker(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// PLAYERGAMELOG
dataRouter.get('/playerGameLog', (req, res) => {
  data.playerGameLog(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// PLAYERPROFILE
dataRouter.get('/playerProfile', (req, res) => {
  data.playerProfile(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// PLAYERUBERSTATS
dataRouter.get('/playerUberStats', (req, res) => {
  data.playerUberStats(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// TEAMSCHEDULE
dataRouter.get('/teamSchedule', (req, res) => {
  data.teamSchedule(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// TEAMROSTER
dataRouter.get('/teamRoster', (req, res) => {
  data.teamRoster(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// TEAMSCONFIGYEAR
dataRouter.get('/teamsConfigYear', (req, res) => {
  data.teamsConfigYear(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

// TEAMLEADERS
dataRouter.get('/teamLeaders', (req, res) => {
  data.teamLeaders(req.query)
  .then(response => {
    res.json(response);
  })
  .catch(err => console.error(err));
});

module.exports = dataRouter;