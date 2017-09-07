/* eslint-disable */
import moment from 'moment-timezone';

const SELECTED_VALID_CALENDAR_DATE = 'SELECTED_VALID_CALENDAR_DATE';
const SELECTED_INVALID_CALENDAR_DATE = 'SELECTED_INVALID_CALENDAR_DATE';

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
