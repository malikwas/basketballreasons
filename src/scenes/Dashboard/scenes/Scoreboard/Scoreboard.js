import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import styled from 'styled-components';

class Scoreboard extends Component {
  render() {
    return (
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            Application Content Application Content Application Content Application Content Application Content Application Content Application Content Application Content Application Content Application Content
          </Grid.Column>
          <Grid.Column>
            Application Content Application Content Application Content Application Content Application Content Application Content Application Content Application Content Application Content Application Content
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            Application Content Application Content Application Content Application Content Application Content Application Content Application Content Application Content Application Content Application Content
          </Grid.Column>
          <Grid.Column>
            Application Content Application Content Application Content Application Content Application Content Application Content Application Content Application Content Application Content Application Content
          </Grid.Column>
          <Grid.Column>
            Application Content Application Content Application Content Application Content Application Content Application Content Application Content Application Content Application Content Application Content
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Scoreboard;
 