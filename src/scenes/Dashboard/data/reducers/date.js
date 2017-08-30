/* eslint-disable */
import moment from 'moment-timezone';

const SELECTED_VALID_CALENDAR_DATE = 'SELECTED_VALID_CALENDAR_DATE';
const SELECTED_INVALID_CALENDAR_DATE = 'SELECTED_INVALID_CALENDAR_DATE';


// The date will change at 10 AM Eastern time, so fans can recap action until 10 AM the next day.
const initialState = {
  currentDate: moment().tz('America/New_York').subtract(10, 'hour').format('YYYYMMDD'),
  currentDateFormatted: moment().tz('America/New_York').subtract(10, 'hour').format('dddd, MMMM d, YYYY'),
  selectedDate: moment().tz('America/New_York').subtract(10, 'hour').format('YYYYMMDD'),
  selectedDateFormatted: moment().tz('America/New_York').subtract(10, 'hour').format('dddd, MMMM d, YYYY'),
  isSelectedDateValid: true
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECTED_VALID_CALENDAR_DATE:
      return Object.assign({}, state, {
        selectedDate: action.selectedDate,
        selectedDateFormatted: moment(action.selectedDate).format('dddd, MMMM d, YYYY'),
        isSelectedDateValid: true
      });

    case SELECTED_INVALID_CALENDAR_DATE:
      return Object.assign({}, state, {
        selectedDate: initialState.currentDate,
        selectedDateFormatted: initialState.currentDateFormatted,
        isSelectedDateValid: false
      });

    default:
      return state;
  }
};
