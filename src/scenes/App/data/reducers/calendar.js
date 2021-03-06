/* eslint-disable */
const GET_REGULAR_SEASON_2016_17_CALENDAR = 'GET_REGULAR_SEASON_2016_17_CALENDAR';
const GET_PLAYOFFS_2017_CALENDAR = 'GET_PLAYOFFS_2017_CALENDAR';
const GET_PRESEASON_2017_18_CALENDAR = 'GET_PRESEASON_2017_18_CALENDAR';
const GET_REGULAR_SEASON_2017_18_CALENDAR = 'GET_REGULAR_SEASON_2017_18_CALENDAR';
const GET_PLAYOFFS_2018_CALENDAR = 'GET_PLAYOFFS_2018_CALENDAR';
const BUILD_PRESEASON_2018_19_CALENDAR = 'BUILD_PRESEASON_2018_19_CALENDAR';
const BUILD_REGULAR_SEASON_2018_19_CALENDAR = 'BUILD_REGULAR_SEASON_2018_19_CALENDAR';
const BUILD_PLAYOFFS_2019_CALENDAR = 'BUILD_PLAYOFFS_2019_CALENDAR';
const BUILD_PRESEASON_2019_20_CALENDAR = 'BUILD_PRESEASON_2019_20_CALENDAR';
const BUILD_REGULAR_SEASON_2019_20_CALENDAR = 'BUILD_REGULAR_SEASON_2019_20_CALENDAR';

const initialState = {
  // regular_season_2016_17: {},
  // playoffs_2017: {},
  // preseason_2017_18: {},
  // regular_season_2017_18: {},
  // playoffs_2018: {},
  preseason_2018_19: {},
  regular_season_2018_19: {},
  playoffs_2019: {},
  // preseason_2019_20: {},
  regular_season_2019_20: {},
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
    
    case GET_PRESEASON_2017_18_CALENDAR:
    return Object.assign({}, state, {
      preseason_2017_18: action.preseason_2017_18
    });
    
    case GET_REGULAR_SEASON_2017_18_CALENDAR:
    return Object.assign({}, state, {
      regular_season_2017_18: action.regular_season_2017_18
    });
    case GET_PLAYOFFS_2018_CALENDAR:
    return Object.assign({}, state, {
      playoffs_2018: action.playoffs_2018
    });
    
    case BUILD_PRESEASON_2018_19_CALENDAR:
    return Object.assign({}, state, {
      preseason_2018_19: action.preseason_2018_19
    });
    
    case BUILD_REGULAR_SEASON_2018_19_CALENDAR:
    return Object.assign({}, state, {
      regular_season_2018_19: action.regular_season_2018_19
    });
    
    case BUILD_PLAYOFFS_2019_CALENDAR:
    return Object.assign({}, state, {
      playoffs_2019: action.playoffs_2019
    });
    
    case BUILD_PRESEASON_2019_20_CALENDAR:
    return Object.assign({}, state, {
      preseason_2019_20: action.preseason_2019_20
    });
    
    case BUILD_REGULAR_SEASON_2019_20_CALENDAR:
    return Object.assign({}, state, {
      regular_season_2019_20: action.regular_season_2019_20
    });
    
    default:
    return state;
  }
};
