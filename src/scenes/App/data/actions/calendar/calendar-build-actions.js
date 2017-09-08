/* eslint-disable */
import axios from 'axios';
import moment from 'moment-timezone';

const BUILD_REGULAR_SEASON_2017_18_CALENDAR = 'BUILD_REGULAR_SEASON_2017_18_CALENDAR';

function buildRegularSeason201718CalendarAction(regular_season_2017_18) {
  return {
    type: BUILD_REGULAR_SEASON_2017_18_CALENDAR,
    regular_season_2017_18
  };
}

export function buildRegularSeason201718Calendar() {
  return dispatch => {
    const season = {};
    season.name = '2017-18 Regular Season';
    season.startDate = '20171017';
    season.endDate = '20180411';
    season.calendar = [];
    return axios.get('/api/data/calendar').then(response => {
      const nbaResponseCalendar = response.data;

      for (let date in nbaResponseCalendar) {
        let momentDate = moment(date);

        if (momentDate.isSameOrAfter(season.startDate) && momentDate.isSameOrBefore(season.endDate)) {
          season.calendar.push({
            date,
            numGames: nbaResponseCalendar[date]
          });
        }
      }

      dispatch(buildRegularSeason201718CalendarAction(season));
    });
  };
}
