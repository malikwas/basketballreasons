import express from 'express';
import {data} from 'nba.js';

const dataRouter = express.Router();

// NBA SCHEDULE
dataRouter.get('/schedule', (req, res) => {
  data.schedule({
    data: req.data
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

export default dataRouter;
