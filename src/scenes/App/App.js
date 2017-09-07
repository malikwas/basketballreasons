import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {isEmpty, isEqual} from 'lodash';
import styled from 'styled-components';
import {Container, Segment, Divider} from 'semantic-ui-react'
import {get201617RegularSeasonCalendar, get201617RegularSeasonCalendar} from './data/calendar/actions/get-calendar-actions';
import {build201718RegularSeasonCalendar} from './data/calendar/actions/build-calendar-actions';
import {setDefaultDate, setActiveDate} from './data/calendar/actions/set-date-actions';

const isCalendarReady = props => (
  isEmpty(props.regular_season_2016_17, props.playoffs_2017, props.regular_season_2017_18)
);

class App extends Component {
  componentDidMount() {
    this.props.get201617RegularSeasonCalendar();
    this.props.get2017PlayoffsCalendar();
    this.props.build201718RegularSeasonCalendar();
  }

  componentWillReceiveProps(nextProps) {
    // Once calendar has completed, set the defaultDate.
    if (!isCalendarReady(this.props) && isCalendarReady(nextProps)) {
      this.props.setDefaultDate();
    }

    // If defaultDate has been set and activeDate has not been set, set activeDate from URL
    // This will only be done once, as defaultDate will always be defined afterwards
    if (isEmpty(this.props.defaultDate) && !isEmpty(nextProps.defaultDate) && isEmpty(nextProps.activeDate)) {
      this.props.setActiveDate(nextProps.match.params.date);
    }

    // If activeDate is already set, but the date from URL changes, set the activeDate from the next URL
    if (!isEmpty(nextProps.activeDate) && !isEqual(this.props.match.params.date, nextProps.match.params.date)) {
      this.props.setActiveDate(nextProps.match.params.date);
    }
  }

  render() {
    return (
      <Container>
        <Segment loading={isEmpty(this.props.activeDateFormatted)} basic>
          <h2>{this.props.activeDateFormatted}</h2>
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
    activeDate: state.date.activeDate,
    activeDateFormatted: state.date.activeDateFormatted
  }
}

const mapDispatchToProps = {
  get201617RegularSeasonCalendar,
  get2017PlayoffsCalendar,
  build201718RegularSeasonCalendar,
  setDefaultDate,
  setActiveDate
};

App.propTypes = {
  regular_season_2016_17: PropTypes.object.isRequired,
  playoffs_2017: PropTypes.object.isRequired,
  regular_season_2017_18: PropTypes.object.isRequired,
  defaultDate: PropTypes.string.isRequired,
  activeDate: PropTypes.string.isRequired,
  activeDateFormatted: PropTypes.string.isRequired,
  get201617RegularSeasonCalendar: PropTypes.func.isRequired,
  get2017PlayoffsCalendar: PropTypes.func.isRequired,
  build201718RegularSeasonCalendar: PropTypes.func.isRequired,
  setDefaultDate: PropTypes.func.isRequired,
  setActiveDate: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(App);
 