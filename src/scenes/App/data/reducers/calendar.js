/* eslint-disable */
const GET_2016_17_REGULAR_SEASON_CALENDAR = 'GET_2016_17_REGULAR_SEASON_CALENDAR';
const GET_2017_PLAYOFFS_CALENDAR = 'GET_2017_PLAYOFFS_CALENDAR';
const GET_2017_18_REGULAR_SEASON_CALENDAR = 'GET_2017_18_REGULAR_SEASON_CALENDAR';

const initialState = {
  regular_season_2016_17: {},
  playoffs_2017: {},
  regular_season_2017_18: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_2016_17_REGULAR_SEASON_CALENDAR:
      return Object.assign({}, state, {
        regular_season_2016_17: action.regular_season_2016_17
      });

    case GET_2017_PLAYOFFS_CALENDAR:
      return Object.assign({}, state, {
        playoffs_2017: action.playoffs_2017
      });

    case GET_2017_18_REGULAR_SEASON_CALENDAR:
      return Object.assign({}, state, {
        regular_season_2017_18: action.regular_season_2017_18
      });

    default:
      return state;
  }
};
