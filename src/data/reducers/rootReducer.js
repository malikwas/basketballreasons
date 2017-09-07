import {combineReducers} from 'redux';
import date from '../../scenes/App/data/reducers/date';
import scoreboard from '../../scenes/App/data/reducers/scoreboard';
import layout from './layout';

// The abstraction between appReducer and rootReducer is created to allow the entire Redux
// state to change when desired. For example, USER_SIGNED_OUT here resets the entire Redux state
// to the initial state.
// The code for this has been commented out as it is not needed for this particular app.
// It's a good thing to have for managing state when there is an account system in place.

// const USER_SIGNED_OUT = 'USER_SIGNED_OUT';

const appReducer = combineReducers({
  date,
  scoreboard,
  layout
});

const rootReducer = (state, action) => {
  // if (action.type === USER_SIGNED_OUT) {
  //   state = undefined;
  // }

  return appReducer(state, action);
};

export default rootReducer;
