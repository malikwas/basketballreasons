/* eslint-disable */
import axios from 'axios';

const REQUESTED_SCOREBOARD = 'REQUESTED_SCOREBOARD';
const RECEIVED_SCOREBOARD = 'RECEIVED_SCOREBOARD';

function requestedScoreboardAction() {
  return {
    type: REQUESTED_SCOREBOARD
  };
}

function receivedScoreboardAction(games) {
  return {
    type: RECEIVED_SCOREBOARD,
    games
  };
}

export function getScoreboard() {
  return (dispatch, getState) => {
    dispatch(requestedScoreboardAction());
    axios.get('data/scoreboard', {
      params: {
        date: getState().date.selectedDate
      }
    }).then(response => {
      dispatch(receivedScoreboardAction(response.data.games));
      return response;
    });
  };
}
