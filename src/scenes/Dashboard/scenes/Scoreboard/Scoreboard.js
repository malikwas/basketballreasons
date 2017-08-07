import React, {Component} from 'react';
import Link from '../../../../components/Link/Link';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {selectDate} from '../../data/actions/date-actions';
import {getScoreboard} from '../../data/actions/scoreboard-actions';
import {Grid, Segment, Loader} from 'semantic-ui-react';
import BoxscorePreview from './components/BoxscorePreview/BoxscorePreview';

class Scoreboard extends Component {
  componentWillMount() {
    const {match, date, selectDate} = this.props;

    if (match.params.date) {
      if (match.params.date !== date.currentDate) {
        selectDate(match.params.date);
      }
    }
  }

  render() {
    const {scoreboard, date} = this.props;
    if (scoreboard.isFetching) {
      return (
        <Segment basic>
          <Loader active size="massive" inline="centered">Loading scoreboard for {date.selectedDateFormatted}</Loader>
        </Segment>
      );
    } else {
      return (
        <Grid>
          {scoreboard.games.map((game, index) =>
            <BoxscorePreview key={index} game={game} date={date.selectedDate}/>
          )}
        </Grid>
      );
    }
  }

  componentDidMount() {
    this.props.getScoreboard();
  }
}

function mapStateToProps(state) {
  return {
    date: state.date,
    scoreboard: state.scoreboard
  };
}

Scoreboard.propTypes = {
  getScoreboard: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {getScoreboard, selectDate})(Scoreboard);
 