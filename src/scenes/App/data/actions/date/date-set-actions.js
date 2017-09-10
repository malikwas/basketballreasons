/* eslint-disable */
import moment from 'moment-timezone';
import {orderBy} from 'lodash';

const SET_DEFAULT_DATE = 'SET_DEFAULT_DATE';
const SET_SELECTED_DATE = 'SET_SELECTED_DATE';

function setDefaultDateAction(defaultSeason, defaultDate) {
  return {
    type: SET_DEFAULT_DATE,
    defaultSeason,
    defaultDate
  };
}

function setSelectedDateAction(selectedSeason, selectedDate) {
  return {
    type: SET_SELECTED_DATE,
    selectedSeason,
    selectedDate
  };
}

// Return the same date and the season if the date exists in a season,
// else return the closest date and season to the passed in date
function getDateMatchingCalendar(calendar, date) {
  const dateMoment = moment(date);

  for (let season in calendar) {
    let currentSeason = calendar[season];

    if (moment(date).isSameOrAfter(currentSeason.startDate) && moment(date).isSameOrBefore(currentSeason.endDate)) {
      return {
        season: currentSeason.name,
        date: date 
      };
    }
  }

  let calendarWithTimeDifference = [];

  for (let season in calendar) {
    let currentSeason = calendar[season];
    calendarWithTimeDifference.push({
      date: currentSeason.startDate,
      differenceInDays: Math.abs(dateMoment.diff(currentSeason.startDate, 'days')),
      name: currentSeason.name
    });

    calendarWithTimeDifference.push({
      date: currentSeason.endDate,
      differenceInDays: Math.abs(dateMoment.diff(currentSeason.endDate, 'days')),
      name: currentSeason.name
    });
  }

  calendarWithTimeDifference = orderBy(calendarWithTimeDifference, ['differenceInDays']);

  return {
    season: calendarWithTimeDifference[0].name,
    date: calendarWithTimeDifference[0].date
  };
}

const isUrlDateValid = urlDate => {
  if (parseInt(urlDate).toString().length === 8) {
    if (moment(urlDate).isValid()) {
      return true;
    }
  }

  return false;
}

export function setDefaultDate() {
  return (dispatch, getState) => {
    const currentDate = getState().date.currentDate;
    const calendar = getState().calendar;
    const {season, date} = getDateMatchingCalendar(calendar, currentDate)
    dispatch(setDefaultDateAction(season, date));
  };
}

export function setSelectedDate(urlDate) {
  return (dispatch, getState) => {
    const calendar = getState().calendar;
    if (isUrlDateValid(urlDate)) {
      const {season, date} = getDateMatchingCalendar(calendar, urlDate);
      dispatch(setSelectedDateAction(season, date));
    } else {
      const defaultSeason = getState().date.defaultSeason;
      const defaultDate = getState().date.defaultDate;
      dispatch(setSelectedDateAction(defaultSeason, defaultDate));
    }
  };
}
