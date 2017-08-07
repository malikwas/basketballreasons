/* eslint-disable */
import moment from 'moment-timezone';

const SELECTED_VALID_CALENDAR_DATE = 'SELECTED_VALID_CALENDAR_DATE';
const SELECTED_INVALID_CALENDAR_DATE = 'SELECTED_INVALID_CALENDAR_DATE';

const initialState = {
  currentDate: moment().tz("America/Los_Angeles").format("YYYYMMDD"),
  currentDateFormatted: moment().tz("America/Los_Angeles").format("YYYY/MM/DD"),
  selectedDate: moment().tz("America/Los_Angeles").format("YYYYMMDD"),
  selectedDateFormatted: moment().tz("America/Los_Angeles").format("YYYY/MM/DD"),
  isSelectedDateValid: true
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECTED_VALID_CALENDAR_DATE:
      return Object.assign({}, state, {
        selectedDate: action.selectedDate,
        selectedDateFormatted: moment(action.selectedDate).format("YYYY/MM/DD"),
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
