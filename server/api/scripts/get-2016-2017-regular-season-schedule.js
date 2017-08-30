const fs = require('fs');
const axios = require('axios');
const moment = require('moment-timezone');
const orderBy = require('lodash/orderBy');

const schedule = {};
schedule.startDate = "20161025";
schedule.endDate = "20170412";
schedule.calendar = [];

const dates = [];
let currentDate = moment(schedule.startDate);
let endDate = moment(schedule.endDate);

while (currentDate.isSameOrBefore(endDate)) {
  dates.push(currentDate.format('YYYYMMDD'));
  currentDate.add(1, 'day');
}

for (var i = 0; i < dates.length; i++) {
  let apiDate = moment(dates[i]).format("YYYYMMDD");
  let formattedDate = moment(dates[i]).format('dddd, MMMM DD, YYYY')
  axios.get(`http://data.nba.net/data/10s/prod/v1/${dates[i]}/scoreboard.json`).then(response => {
    let scoreboard = response.data;
    // apiDate is for what NBA uses in their URLs.
    schedule.calendar.push({
      apiDate, formattedDate,
      numGames: scoreboard.numGames
    });    
  });
}

setTimeout(() => {
  schedule.calendar = orderBy(schedule.calendar, date => date.apiDate)
  fs.writeFile(`${__dirname}/output/2016-2017-regular-season-schedule.json`, JSON.stringify(schedule, null, 2));
}, 10000);
