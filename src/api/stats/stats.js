import express from 'express';
import {stats} from 'nba.js';

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

export default statsRouter;
