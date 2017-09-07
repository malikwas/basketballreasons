/* eslint-disable */
import moment from 'moment-timezone';

const REQUESTED_SCOREBOARD = 'REQUESTED_SCOREBOARD';
const RECEIVED_SCOREBOARD = 'RECEIVED_SCOREBOARD';

const initialState = {
  isFetching: false,
  games: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUESTED_SCOREBOARD:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVED_SCOREBOARD:
      return Object.assign({}, state, {
        isFetching: false,
        games: action.games
      });

    default:
      return state;
  }
};
