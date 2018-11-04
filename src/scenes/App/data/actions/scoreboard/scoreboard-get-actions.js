/* eslint-disable */
import axios from 'axios';
import {chain, find} from 'lodash';

const REQUESTED_SCOREBOARD = 'REQUESTED_SCOREBOARD';
const RECEIVED_SCOREBOARD = 'RECEIVED_SCOREBOARD';

function requestedScoreboardAction(numGames) {
  return {
    type: REQUESTED_SCOREBOARD,
    numGames
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
    debugger;
    const {selectedDate, selectedSeason} = getState().date;
    const calendar = getState().calendar;
    const selectedSeasonCalendar = find(calendar, season => season.name === selectedSeason).calendar;
    const selectedDateNumGames = find(selectedSeasonCalendar, date => date.date === selectedDate).numGames;

    dispatch(requestedScoreboardAction(selectedDateNumGames));

    axios.get('/api/data/scoreboard', {
      params: {
        date: selectedDate
      }
    }).then(response => {
      dispatch(receivedScoreboardAction(response.data.games));
      return response;
    });
  };
}
