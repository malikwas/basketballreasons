/* eslint-disable */
import moment from 'moment-timezone';
import {getClosestDateAndSeason} from '../../../services/date-services';

const SET_DEFAULT_DATE_STATE = 'SET_DEFAULT_DATE_STATE';

function setDefaultDateStateAction(defaultDate, defaultSeason) {
  type: SET_DEFAULT_DATE_STATE,
  defaultDate,
  defaultSeason
}

// If defaultDate on initialize (current real life date) is in the regular season, set that defaultDate.
// Else, set the date as the closest startDate or endDate.
export function setDefaultDateState() {
  return (dispatch, getState) => {
    const calendars = getState().calendar;
    const {defaultDate} = getState().date;
    const defaultDateMoment = moment(defaultDate);

    for (let calendar in calendars) {
      let cal = calendars.calendar;

      if (defaultDateMoment.isBetween(cal.startDate, cal.endDate)) {
        dispatch(setDefaultDateState(defaultDate, cal.season));
        return undefined;
      }
    }

    const {closestDate, closestSeason} = getClosestDateState(defaultDate, calendars);


    const {defaultDate} = getState().date;

    // If defaultDate on initialize (current real life date) is in the regular season, set that defaultDate.
    // Else, set that as the startDate if before, endDate if after.
    if (moment(defaultDate).isBetween(regularSeason20172018.startDate, regularSeason20172018.endDate)) {
      setDefaultDateStateAction
    } else {
      const {closestDate}
    }
    let defaultDate, defaultSeason;

    case (getState().calendar)
  }
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
