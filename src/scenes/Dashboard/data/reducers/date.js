/* eslint-disable */
import moment from 'moment-timezone';

const CHANGED_DATE = 'CHANGED_DATE'

const initialState = {
  date: moment().tz("America/Los_Angeles").format("YYYYMMDD")
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGED_DATE:
      return Object.assign({}, state, {
        date: action.date
      });

    default:
      return state;
  }
};
