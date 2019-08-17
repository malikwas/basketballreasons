/* eslint-disable */
import axios from 'axios';
import moment from 'moment-timezone';

const BUILD_PRESEASON_2017_18_CALENDAR = 'BUILD_PRESEASON_2017_18_CALENDAR';
const BUILD_REGULAR_SEASON_2017_18_CALENDAR = 'BUILD_REGULAR_SEASON_2017_18_CALENDAR';
const BUILD_PLAYOFFS_2018_CALENDAR = 'BUILD_PLAYOFFS_2018_CALENDAR';
const BUILD_PRESEASON_2018_19_CALENDAR = 'BUILD_PRESEASON_2018_19_CALENDAR';
const BUILD_REGULAR_SEASON_2018_19_CALENDAR = 'BUILD_REGULAR_SEASON_2018_19_CALENDAR';
const BUILD_PLAYOFFS_2019_CALENDAR = 'BUILD_PLAYOFFS_2019_CALENDAR';
const BUILD_PRESEASON_2019_20_CALENDAR = 'BUILD_PRESEASON_2019_20_CALENDAR';
const BUILD_REGULAR_SEASON_2019_20_CALENDAR = 'BUILD_REGULAR_SEASON_2019_20_CALENDAR';

function buildPreseason201718CalendarAction(preseason_2017_18) {
  return {
    type: BUILD_PRESEASON_2017_18_CALENDAR,
    preseason_2017_18
  };
}

function buildRegularSeason201718CalendarAction(regular_season_2017_18) {
  return {
    type: BUILD_REGULAR_SEASON_2017_18_CALENDAR,
    regular_season_2017_18
  };
}

function buildPlayoffs2018CalendarAction(playoffs_2018) {
  return {
    type: BUILD_PLAYOFFS_2018_CALENDAR,
    playoffs_2018
  };
}

function buildPreseason201819CalendarAction(preseason_2018_19) {
  return {
    type: BUILD_PRESEASON_2018_19_CALENDAR,
    preseason_2018_19
  };
}

function buildRegularSeason201819CalendarAction(regular_season_2018_19) {
  return {
    type: BUILD_REGULAR_SEASON_2018_19_CALENDAR,
    regular_season_2018_19
  };
}

function buildPlayoffs2019CalendarAction(playoffs_2019) {
  return {
    type: BUILD_PLAYOFFS_2019_CALENDAR,
    playoffs_2019
  };
}

function buildPreseason201920CalendarAction(preseason_2019_20) {
  return {
    type: BUILD_PRESEASON_2019_20_CALENDAR,
    preseason_2019_20
  };
}

function buildRegularSeason201920CalendarAction(regular_season_2019_20) {
  return {
    type: BUILD_REGULAR_SEASON_2019_20_CALENDAR,
    regular_season_2019_20
  };
}

export function buildPreseason201718Calendar() {
  return dispatch => {
    const season = {};
    season.name = '2017-18 Preseason';
    season.startDate = '20170930';
    season.endDate = '20171013';
    season.calendar = [];
    return axios.get('/api/data/calendar').then(response => {
      const nbaResponseCalendar = response.data;
      buildCalendar(season, nbaResponseCalendar);
      dispatch(buildPreseason201718CalendarAction(season));
    });
  };
}

export function buildRegularSeason201718Calendar() {
  return dispatch => {
    const season = {};
    season.name = '2017-18 Regular Season';
    season.startDate = '20171017';
    season.endDate = '20180411';
    season.calendar = [];
    return axios.get('/api/data/calendar').then(response => {
      const nbaResponseCalendar = response.data;
      buildCalendar(season, nbaResponseCalendar);
      dispatch(buildRegularSeason201718CalendarAction(season));
    });
  };
}

export function buildPlayoffs2018Calendar() {
  return dispatch => {
    const season = {};
    season.name = '2018 Playoffs';
    season.startDate = '20180414';
    season.endDate = '20180608';
    season.calendar = [];
    return axios.get('/api/data/calendar').then(response => {
      const nbaResponseCalendar = response.data;
      buildCalendar(season, nbaResponseCalendar);
      dispatch(buildPlayoffs2018CalendarAction(season));
    });
  };
}

export function buildPreseason201819Calendar() {
  return dispatch => {
    const season = {};
    season.name = '2018-19 Preseason';
    season.startDate = '20180928';
    season.endDate = '20181012';
    season.calendar = [];
    return axios.get('/api/data/calendar').then(response => {
      const nbaResponseCalendar = response.data;
      buildCalendar(season, nbaResponseCalendar);
      dispatch(buildPreseason201819CalendarAction(season));
    });
  };
}

export function buildRegularSeason201819Calendar() {
  return dispatch => {
    const season = {};
    season.name = '2018-19 Regular Season';
    season.startDate = '20181016';
    season.endDate = '20190410';
    season.calendar = [];
    return axios.get('/api/data/calendar').then(response => {
      const nbaResponseCalendar = response.data;
      buildCalendar(season, nbaResponseCalendar);
      dispatch(buildRegularSeason201819CalendarAction(season));
    });
  };
}

export function buildPlayoffs2019Calendar() {
  return dispatch => {
    const season = {};
    season.name = '2019 Playoffs';
    season.startDate = '20190413';
    season.endDate = '20190613';
    season.calendar = [];
    return axios.get('/api/data/calendar').then(response => {
      const nbaResponseCalendar = response.data;
      buildCalendar(season, nbaResponseCalendar);
      dispatch(buildPlayoffs2019CalendarAction(season));
    });
  };
}

export function buildPreseason201920Calendar() {
  return dispatch => {
    const season = {};
    season.name = '2019-20 Preseason';
    season.startDate = '20190930';
    season.endDate = '20191018';
    season.calendar = [];
    return axios.get('/api/data/calendar').then(response => {
      const nbaResponseCalendar = response.data;
      buildCalendar(season, nbaResponseCalendar);
      dispatch(buildPreseason201920CalendarAction(season));
    });
  };
}

export function buildRegularSeason201920Calendar() {
  return dispatch => {
    const season = {};
    season.name = '2019-20 Regular Season';
    season.startDate = '20191022';
    season.endDate = '20200415';
    season.calendar = [];
    return axios.get('/api/data/calendar').then(response => {
      const nbaResponseCalendar = response.data;
      buildCalendar(season, nbaResponseCalendar);
      dispatch(buildRegularSeason201920CalendarAction(season));
    });
  };
}

const buildCalendar = (season, calendar) => {
  for (let date in calendar) {
    let momentDate = moment(date);

    if (momentDate.isSameOrAfter(season.startDate) && momentDate.isSameOrBefore(season.endDate)) {
      season.calendar.push({
        date,
        numGames: calendar[date]
      });
    }
  }
}
