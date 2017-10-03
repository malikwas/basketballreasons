/* eslint-disable */
const GET_REGULAR_SEASON_2016_17_CALENDAR = 'GET_REGULAR_SEASON_2016_17_CALENDAR';
const GET_PLAYOFFS_2017_CALENDAR = 'GET_PLAYOFFS_2017_CALENDAR';
const BUILD_PRESEASON_2017_18_CALENDAR = 'BUILD_PRESEASON_2017_18_CALENDAR';
const BUILD_REGULAR_SEASON_2017_18_CALENDAR = 'BUILD_REGULAR_SEASON_2017_18_CALENDAR';

const initialState = {
  regular_season_2016_17: {},
  playoffs_2017: {},
  preseason_2017_18: {},
  regular_season_2017_18: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_REGULAR_SEASON_2016_17_CALENDAR:
      return Object.assign({}, state, {
        regular_season_2016_17: action.regular_season_2016_17
      });

    case GET_PLAYOFFS_2017_CALENDAR:
      return Object.assign({}, state, {
        playoffs_2017: action.playoffs_2017
      });

    case BUILD_PRESEASON_2017_18_CALENDAR:
      return Object.assign({}, state, {
        preseason_2017_18: action.preseason_2017_18
      });

    case BUILD_REGULAR_SEASON_2017_18_CALENDAR:
      return Object.assign({}, state, {
        regular_season_2017_18: action.regular_season_2017_18
      });

    default:
      return state;
  }
};
