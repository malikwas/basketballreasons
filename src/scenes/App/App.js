import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {isEmpty, isEqual} from 'lodash';
import styled from 'styled-components';
import {Container, Divider} from 'semantic-ui-react'
import {windowResizeHandler} from '../../data/actions/layout/layout-width-actions';
// import {getRegularSeason201617Calendar, getPlayoffs2017Calendar, getPreseason201718Calendar, getRegularSeason201718Calendar, getPlayoffs2018Calendar} from './data/actions/calendar/calendar-get-actions';
import {buildPreseason201819Calendar, buildRegularSeason201819Calendar, buildPlayoffs2019Calendar, buildPreseason201920Calendar, buildRegularSeason201920Calendar} from './data/actions/calendar/calendar-build-actions';
import {setDefaultDate, setSelectedDate} from './data/actions/date/date-set-actions';
import {getScoreboard} from './data/actions/scoreboard/scoreboard-get-actions';
import DatePicker from './components/DatePicker/DatePicker';
import Scoreboard from './components/Scoreboard/Scoreboard';

const Title = styled.h1`
  color: #FA8320;
  text-align: center;
  font-weight: normal;
`;

const NbaDateHeader = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
`;

const SelectDateText = styled.span`
  display: table;
  margin: 0 auto;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const isCalendarReady = props => (
  !isEmpty(props.preseason_2018_19)
  && !isEmpty(props.regular_season_2018_19)
  && !isEmpty(props.playoffs_2019)
  // && !isEmpty(props.preseason_2019_20)
  && !isEmpty(props.regular_season_2019_20)
);

class App extends Component {
  constructor() {
    super();

    this.state = {
      isDatePickerOpen: false
    };
  }

  handleOnToggleDatePicker = () => {
    this.setState({
      isDatePickerOpen: !this.state.isDatePickerOpen
    });
  }

  getSelectedSeasonCalendar = () => {
    for (let seasonObjectName in this.props.calendar) {
      let seasonObject = this.props.calendar[seasonObjectName];
      if (seasonObject.name === this.props.selectedSeason) {
        return seasonObject;
      }
    }
  }

  getSeasonNames = () => {
    const seasonNames = [];
    for (let seasonObjectName in this.props.calendar) {
      let seasonObject = this.props.calendar[seasonObjectName];
      seasonNames.push(seasonObject['name']);
    }

    return seasonNames;
  }

  handleOnSelectDate = date => {
    this.context.router.history.push(`/${date}`);
  }

  handleOnSelectSeason = e => {
    e.preventDefault();
    const seasonName = e.target.innerHTML;
    let selectedSeason;
    for (let seasonObjectName in this.props.calendar) {
      if (this.props.calendar[seasonObjectName].name === seasonName) {
        selectedSeason = this.props.calendar[seasonObjectName];
      }
    }

    this.handleOnSelectDate(selectedSeason.startDate);
  }

  componentDidMount() {
    this.props.buildPreseason201819Calendar();
    this.props.buildRegularSeason201819Calendar();
    this.props.buildPlayoffs2019Calendar();
    // this.props.buildPreseason201920Calendar();
    this.props.buildRegularSeason201920Calendar();
    
    // isMobile and isDesktop changes based on this function, set to null in componentWillUnmount.
    this.props.windowResizeHandler();
    this.viewportTimer = setInterval(this.props.windowResizeHandler, 200);
  }

  componentWillReceiveProps(nextProps) { 
    // Once calendar has completed, set the defaultDate.
    if (!isCalendarReady(this.props.calendar) && isCalendarReady(nextProps.calendar)) {
      this.props.setDefaultDate();
    }

    // If defaultDate has been set and selectedDate has not been set, set selectedDate from URL
    // This will only be done once, as defaultDate will always be defined afterwards
    if (isEmpty(this.props.defaultDate) && !isEmpty(nextProps.defaultDate) && isEmpty(nextProps.selectedDate)) {
      this.props.setSelectedDate(nextProps.match.params.date);
    }

    // If selectedDate is already set, but the date from URL changes, set the selectedDate from the next URL
    if (!isEmpty(nextProps.selectedDate) && !isEqual(this.props.match.params.date, nextProps.match.params.date)) {
      this.props.setSelectedDate(nextProps.match.params.date);
    }

    // If selectedDate changes, fetch scoreboard.
    if (!isEmpty(nextProps.selectedDate) && !isEqual(this.props.selectedDate, nextProps.selectedDate)) {
      if (this.scoreboardTimer !== null) {
        clearInterval(this.scoreboardTimer);
      }

      this.props.getScoreboard();
      this.scoreboardTimer = setInterval(this.props.getScoreboard, 30000);
    }
  }

  render() {
    return (
      <Container>
        <Title>basketballreasons.io</Title>
        <NbaDateHeader>The NBA on {this.props.selectedDateFormatted}</NbaDateHeader>
        <a>
          {this.state.isDatePickerOpen
            ? <SelectDateText onClick={this.handleOnToggleDatePicker}>&minus; SELECT DATE</SelectDateText>
            : <SelectDateText onClick={this.handleOnToggleDatePicker}>+ SELECT DATE</SelectDateText>
          }
        </a>
        {this.state.isDatePickerOpen &&
          <DatePicker
            selectedSeason={this.props.selectedSeason}
            selectedSeasonCalendar={this.getSelectedSeasonCalendar()}
            selectedDate={this.props.selectedDate}
            seasonNames={this.getSeasonNames()}
            handleOnSelectSeason={this.handleOnSelectSeason}
            handleOnSelectDate={this.handleOnSelectDate}
          />
        }
        <Divider horizontal>SCOREBOARD</Divider>
        <Scoreboard
          {...this.props.scoreboard}
          date={this.props.selectedDate}
          {...this.props.layout}
        />
      </Container>
    );
  }

  componentWillUnmount() {
    clearInterval(this.viewportTimer);
    clearInterval(this.scoreboardTimer);
    this.viewportTimer = null;
    this.scoreboardTimer = null;
  }
}

function mapStateToProps(state) {
  return {
    layout: state.layout,
    calendar: state.calendar,
    selectedSeason: state.date.selectedSeason,
    defaultDate: state.date.defaultDate,
    selectedDate: state.date.selectedDate,
    selectedDateFormatted: state.date.selectedDateFormatted,
    scoreboard: state.scoreboard
  }
}

const mapDispatchToProps = {
  windowResizeHandler,
  buildPreseason201819Calendar,
  buildRegularSeason201819Calendar,
  buildPlayoffs2019Calendar,
  buildPreseason201920Calendar,
  buildRegularSeason201920Calendar,
  setDefaultDate,
  setSelectedDate,
  getScoreboard
};

App.propTypes = {
  layout: PropTypes.object.isRequired,
  windowResizeHandler: PropTypes.func.isRequired,
  calendar: PropTypes.object.isRequired,
  selectedSeason: PropTypes.string.isRequired,
  defaultDate: PropTypes.string.isRequired,
  selectedDate: PropTypes.string.isRequired,
  selectedDateFormatted: PropTypes.string.isRequired,
  buildPreseason201819Calendar: PropTypes.func.isRequired,
  buildRegularSeason201819Calendar: PropTypes.func.isRequired,
  buildPlayoffs2019Calendar: PropTypes.func.isRequired,
  buildPreseason201920Calendar: PropTypes.func.isRequired,
  buildRegularSeason201920Calendar: PropTypes.func.isRequired,
  setDefaultDate: PropTypes.func.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  scoreboard: PropTypes.object.isRequired,
  getScoreboard: PropTypes.func.isRequired
};

App.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
 