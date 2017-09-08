/* eslint-disable */
import moment from 'moment-timezone';

const SET_DEFAULT_DATE = 'SET_DEFAULT_DATE';
const SET_SELECTED_DATE = 'SET_SELECTED_DATE';

// The date will change at 10 AM Eastern time, so fans can recap action until 10 AM the next day.
const initialState = {
  currentDate: moment().tz('America/New_York').subtract(10, 'hour').format('YYYYMMDD'),
  currentDateFormatted: moment().tz('America/New_York').subtract(10, 'hour').format('MMMM D, YYYY'),
  defaultDate: '',
  defaultDateFormatted: '',
  defaultSeason: '',
  selectedDate: '',
  selectedDateFormatted: '',
  selectedSeason: ''
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DEFAULT_DATE:
      return Object.assign({}, state, {
        defaultDate: action.defaultDate,
        defaultDateFormatted: moment(action.defaultDate).format('MMMM D, YYYY'),
        defaultSeason: action.defaultSeason
      });

    case SET_SELECTED_DATE:
      return Object.assign({}, state, {
        selectedDate: action.selectedDate,
        selectedDateFormatted: moment(action.selectedDate).format('MMMM D, YYYY'),
        selectedSeason: action.selectedSeason
      });

    default:
      return state;
  }
};
