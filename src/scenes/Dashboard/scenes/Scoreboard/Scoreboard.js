import React, {Component} from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Grid, Segment} from 'semantic-ui-react'

class Scoreboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Segment>
            Application Content Application Content
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Segment>
            Application Content Application Content
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Segment>
            Application Content Application Content
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Segment>
            Application Content Application Content
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Segment>
            Application Content Application Content
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }

  componentDidMount() {
    this.props.getScoreboard();
  }
}

Scoreboard.propTypes = {
  getScoreboard: PropTypes.func.isRequired
};

export default Scoreboard;
 