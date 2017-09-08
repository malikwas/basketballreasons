const fs = require('fs');
const axios = require('axios');
const moment = require('moment-timezone');
const orderBy = require('lodash/orderBy');

const season = {};
season.name = "2017 Playoffs";
season.startDate = "20170415";
season.endDate = "20170612";
season.calendar = [];

const dates = [];
let currentDate = moment(season.startDate);
let endDate = moment(season.endDate);

while (currentDate.isSameOrBefore(endDate)) {
  dates.push(currentDate.format('YYYYMMDD'));
  currentDate.add(1, 'day');
}

for (var i = 0; i < dates.length; i++) {
  let date = moment(dates[i]).format("YYYYMMDD");
  axios.get(`http://data.nba.net/data/10s/prod/v1/${dates[i]}/scoreboard.json`).then(response => {
    season.calendar.push({
      date,
      numGames: response.data.numGames
    });
  });
}

setTimeout(() => {
  season.calendar = orderBy(season.calendar, date => date.date)
  fs.writeFile(`${__dirname}/output/playoffs_2017.json`, JSON.stringify(season, null, 2));
}, 10000);
