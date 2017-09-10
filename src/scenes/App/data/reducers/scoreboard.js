/* eslint-disable */
import moment from 'moment-timezone';

const REQUESTED_SCOREBOARD = 'REQUESTED_SCOREBOARD';
const RECEIVED_SCOREBOARD = 'RECEIVED_SCOREBOARD';

const initialState = {
  numGames: null,
  games: [],
  isFetching: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUESTED_SCOREBOARD:
      return Object.assign({}, state, {
        numGames: action.numGames,
        isFetching: true
      });

    case RECEIVED_SCOREBOARD:
      return Object.assign({}, state, {
        games: action.games,
        isFetching: false
      });

    default:
      return state;
  }
};
