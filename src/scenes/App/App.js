import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {isEmpty, isEqual} from 'lodash';
import styled from 'styled-components';
import {Container, Segment, Divider} from 'semantic-ui-react'
import {windowResizeHandler} from '../../data/actions/layout/layout-width-actions';
import {getRegularSeason201617Calendar, getPlayoffs2017Calendar} from './data/actions/calendar/calendar-get-actions';
import {buildRegularSeason201718Calendar} from './data/actions/calendar/calendar-build-actions';
import {setDefaultDate, setSelectedDate} from './data/actions/date/date-set-actions';
import {getScoreboard} from './data/actions/scoreboard/scoreboard-get-actions';
import DatePicker from './components/DatePicker/DatePicker';
import Scoreboard from './components/Scoreboard/Scoreboard';
import TopPerformers from './components/TopPerformers/TopPerformers';
import Standings from './components/Standings/Standings';

const Title = styled.h1`
  color: #FA8320;
  text-align: center;
  font-weight: normal;
`;

const NbaDateHeader = styled.h2`
  font-weight: 500;
  text-align: center;
`;

const isCalendarReady = props => (
  !isEmpty(props.regular_season_2016_17) && !isEmpty(props.playoffs_2017) && !isEmpty(props.regular_season_2017_18)
);

class App extends Component {
  componentDidMount() {
    this.props.getRegularSeason201617Calendar();
    this.props.getPlayoffs2017Calendar();
    this.props.buildRegularSeason201718Calendar();
    
    // isMobile and isDesktop changes based on this function, set to null in componentWillUnmount.
    this.props.windowResizeHandler();
    this.timer = setInterval(this.props.windowResizeHandler, 200);
  }

  componentWillReceiveProps(nextProps) { 
    // Once calendar has completed, set the defaultDate.
    if (!isCalendarReady(this.props) && isCalendarReady(nextProps)) {
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
      this.props.getScoreboard();
    }
  }

  render() {
    return (
      <Container>
        <Segment loading={isEmpty(this.props.selectedDateFormatted)} basic>
          <Title>basketballreasons.io</Title>
          <NbaDateHeader>The NBA on {this.props.selectedDateFormatted}</NbaDateHeader>
          <Divider horizontal>SCOREBOARD</Divider>
          <Scoreboard
            {...this.props.scoreboard}
            date={this.props.selectedDate}
            {...this.props.layout}
          />
          <Divider hidden/>
          <Divider horizontal>TOP PERFORMERS</Divider>
          <TopPerformers/>
          <Divider hidden/>
          <Divider horizontal>STANDINGS</Divider>
          <Standings/>
        </Segment>
      </Container>
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }
}

function mapStateToProps(state) {
  return {
    layout: state.layout,
    regular_season_2016_17: state.calendar.regular_season_2016_17,
    playoffs_2017: state.calendar.playoffs_2017,
    regular_season_2017_18: state.calendar.regular_season_2017_18,
    defaultDate: state.date.defaultDate,
    selectedDate: state.date.selectedDate,
    selectedDateFormatted: state.date.selectedDateFormatted,
    scoreboard: state.scoreboard
  }
}

const mapDispatchToProps = {
  windowResizeHandler,
  getRegularSeason201617Calendar,
  getPlayoffs2017Calendar,
  buildRegularSeason201718Calendar,
  setDefaultDate,
  setSelectedDate,
  getScoreboard
};

App.propTypes = {
  layout: PropTypes.object.isRequired,
  windowResizeHandler: PropTypes.func.isRequired,
  regular_season_2016_17: PropTypes.object.isRequired,
  playoffs_2017: PropTypes.object.isRequired,
  regular_season_2017_18: PropTypes.object.isRequired,
  defaultDate: PropTypes.string.isRequired,
  selectedDate: PropTypes.string.isRequired,
  selectedDateFormatted: PropTypes.string.isRequired,
  getRegularSeason201617Calendar: PropTypes.func.isRequired,
  getPlayoffs2017Calendar: PropTypes.func.isRequired,
  buildRegularSeason201718Calendar: PropTypes.func.isRequired,
  setDefaultDate: PropTypes.func.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  scoreboard: PropTypes.object.isRequired,
  getScoreboard: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
 