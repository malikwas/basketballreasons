/* eslint-disable */
import axios from 'axios';

const GET_REGULAR_SEASON_2016_17_CALENDAR = 'GET_REGULAR_SEASON_2016_17_CALENDAR';
const GET_PLAYOFFS_2017_CALENDAR = 'GET_PLAYOFFS_2017_CALENDAR';
const GET_PRESEASON_2017_18_CALENDAR = 'GET_PRESEASON_2017_18_CALENDAR';
const GET_REGULAR_SEASON_2017_18_CALENDAR = 'GET_REGULAR_SEASON_2017_18_CALENDAR';
const GET_PLAYOFFS_2018_CALENDAR = 'GET_PLAYOFFS_2018_CALENDAR';

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

const getPreaseason201718CalendarAction = preseason_2017_18 => {
  type: GET_PRESEASON_2017_18_CALENDAR,
  preseason_2017_18
};

const getRegularSeason201718CalendarAction = regular_season_2017_18 => {
  type: GET_REGULAR_SEASON_2017_18_CALENDAR,
  regular_season_2017_18
};

function getPlayoffs2018CalendarAction(playoffs_2018) {
  return {
    type: GET_PLAYOFFS_2018_CALENDAR,
    playoffs_2018
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

export const getPreaseason201718Calendar = () => async dispatch => {
  const response = await axios.get('/static/data/calendar/preseason_2017_18.json');
  dispatch(getPreaseason201718CalendarAction(response.data));
}

export const getRegularSeason201718Calendar = () => async dispatch => {
  const response = await axios.get('/static/data/calendar/regular_season_2017_18.json');
  dispatch(getRegularSeason201718CalendarAction(response.data));
}

export const getPlayoffs2018Calendar = () => async dispatch => {
  const response = await axios.get('/static/data/calendar/playoffs_2018.json');
  dispatch(getPlayoffs2018CalendarAction(response.data));
}
