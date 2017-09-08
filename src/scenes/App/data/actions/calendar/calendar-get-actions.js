/* eslint-disable */
import axios from 'axios';

const GET_REGULAR_SEASON_2016_17_CALENDAR = 'GET_REGULAR_SEASON_2016_17_CALENDAR';
const GET_PLAYOFFS_2017_CALENDAR = 'GET_PLAYOFFS_2017_CALENDAR';

function getRegularSeason201617CalendarAction(regular_season_2016_17) {
  return {
    type: GET_REGULAR_SEASON_2016_17_CALENDAR,
    regular_season_2016_17
  };
}

function getPlayoffs2017CalendarAction(playoffs_2017) {
  return {
    type: GET_PLAYOFFS_2017_CALENDAR,
    playoffs_2017
  };
}

export function getRegularSeason201617Calendar() {
  return dispatch => {
    return axios.get('/static/data/calendar/regular_season_2016_17.json').then(response => {
      dispatch(getRegularSeason201617CalendarAction(response.data));
    });
  }
}

export function getPlayoffs2017Calendar() {
  return dispatch => {
    return axios.get('/static/data/calendar/playoffs_2017.json').then(response => {
      dispatch(getPlayoffs2017CalendarAction(response.data));
    });
  }
}
