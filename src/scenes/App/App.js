import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {isEmpty, isEqual} from 'lodash';
import styled from 'styled-components';
import {Container, Segment, Divider} from 'semantic-ui-react'
import {getRegularSeason201617Calendar, getPlayoffs2017Calendar} from './data/actions/calendar/calendar-get-actions';
import {buildRegularSeason201718Calendar} from './data/actions/calendar/calendar-build-actions';
import {setDefaultDate, setSelectedDate} from './data/actions/date/date-set-actions';

const isCalendarReady = props => (
  !isEmpty(props.regular_season_2016_17) && !isEmpty(props.playoffs_2017) && !isEmpty(props.regular_season_2017_18)
);

class App extends Component {
  componentDidMount() {
    this.props.getRegularSeason201617Calendar();
    this.props.getPlayoffs2017Calendar();
    this.props.buildRegularSeason201718Calendar();
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
  }

  render() {
    return (
      <Container>
        <Segment loading={isEmpty(this.props.selectedDateFormatted)} basic>
          <h2>{this.props.selectedDateFormatted}</h2>
          <h3>Scoreboard</h3>
          <Divider/>
          <h3>Top Performers</h3>
          <Divider/>
          <h3>Standings</h3>
        </Segment>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    regular_season_2016_17: state.calendar.regular_season_2016_17,
    playoffs_2017: state.calendar.playoffs_2017,
    regular_season_2017_18: state.calendar.regular_season_2017_18,
    defaultDate: state.date.defaultDate,
    selectedDate: state.date.selectedDate,
    selectedDateFormatted: state.date.selectedDateFormatted
  }
}

const mapDispatchToProps = {
  getRegularSeason201617Calendar,
  getPlayoffs2017Calendar,
  buildRegularSeason201718Calendar,
  setDefaultDate,
  setSelectedDate
};

App.propTypes = {
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
  setSelectedDate: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
 