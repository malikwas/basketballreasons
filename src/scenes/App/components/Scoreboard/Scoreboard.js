import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {isNull} from 'lodash';
import {Dimmer, Loader, Grid} from 'semantic-ui-react';
import {BoxscorePreviewMobile, BoxscorePreviewDesktop} from './components/BoxscorePreview/BoxscorePreview';

class Scoreboard extends Component {
  render() {
    return (
      <div>
        {this.props.isFetching && isNull(this.props.numGames) &&
          <Dimmer active inverted>
            <Loader content="Loading scoreboard"/>
          </Dimmer>
        }
        {this.props.numGames === 0 &&
          <p>There are no games scheduled on this date.</p>
        }
        <Grid columns={2} doubling stackable>
          {!this.props.isMobile && this.props.games.map((game, index) =>
            <BoxscorePreviewDesktop
              key={index}
              game={game}
              date={this.props.date}
            />
          )}
          {this.props.isMobile && this.props.games.map((game, index) =>
            <BoxscorePreviewMobile
              key={index}
              game={game}
              date={this.props.date}
            />
          )}
        </Grid>
      </div>
    );
  }
}

Scoreboard.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
  isSmallMonitor: PropTypes.bool.isRequired,
  isLargeMonitor: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  numGames: PropTypes.oneOfType([PropTypes.number, null]).isRequired,
  games: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default Scoreboard;