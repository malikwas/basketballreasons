/* eslint-disable */
import axios from 'axios';

const REQUESTED_REGULAR_SEASON_CALENDAR = 'REQUESTED_REGULAR_SEASON_CALENDAR';
const RECEIVED_REGULAR_SEASON_CALENDAR = 'RECEIVED_REGULAR_SEASON_CALENDAR';

function requestedRegu

function selectedValidCalendarDate(selectedDate) {
  return {
    type: SELECTED_VALID_CALENDAR_DATE,
    selectedDate
  };
}

function selectedInvalidCalendarDate() {
  return {
    type: SELECTED_INVALID_CALENDAR_DATE
  };
}

export function selectDate(date) {
  return dispatch => {
    if (moment(date).isValid()) {
      dispatch(selectedValidCalendarDate(date));
      return date;
    } else {
      dispatch(selectedInvalidCalendarDate());
      return date;
    }
  };
}
