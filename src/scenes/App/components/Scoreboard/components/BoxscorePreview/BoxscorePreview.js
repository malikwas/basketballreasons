import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Grid, Segment} from 'semantic-ui-react';

const GameStatus = styled.td`
  font-weight: bold;
`;

const LineScore = styled.td`
  width: 32px !important;
  text-align: center !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
`;

const TotalScoreHeader = styled.td`
  width: 80px !important;
  text-align: right !important;
`;

const BoxscorePreviewDesktop = ({game, date}) => (
  <Grid.Column>
    <Link to={`/boxscore/${date}/${game.hTeam.triCode}${game.vTeam.triCode}`}>
      <table className="ui unstackable basic compact table">
        <tbody>
          <tr>
            <GameStatus>Final / 4OT</GameStatus>
            <LineScore>1</LineScore>
            <LineScore>2</LineScore>
            <LineScore>3</LineScore>
            <LineScore>4</LineScore>
            <LineScore>OT</LineScore>
            <TotalScoreHeader>T</TotalScoreHeader>
          </tr>
          <tr>
            <GameStatus>Los Angeles Lakers</GameStatus>
            <LineScore>12</LineScore>
            <LineScore>33</LineScore>
            <LineScore>32</LineScore>
            <LineScore>44</LineScore>
            <LineScore>20</LineScore>
            <TotalScoreHeader>122</TotalScoreHeader>
          </tr>
        </tbody>
      </table>
    </Link>
  </Grid.Column>
);

const BoxscorePreviewMobile = ({game, date}) => (
  <Grid.Column>
    <Link to={`/boxscore/${date}/${game.hTeam.triCode}${game.vTeam.triCode}`}>
      <table className="ui unstackable basic compact table">
        <tbody>
          <tr>
            <GameStatus>Final / 4OT</GameStatus>
            <TotalScoreHeader>T</TotalScoreHeader>
          </tr>
          <tr>
            <GameStatus>Los Angeles Lakers</GameStatus>
            <TotalScoreHeader>122</TotalScoreHeader>
          </tr>
        </tbody>
      </table>
    </Link>
  </Grid.Column>
);

BoxscorePreviewDesktop.propTypes = {
  game: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired
};

BoxscorePreviewMobile.propTypes = {
  game: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired
};

export {BoxscorePreviewDesktop, BoxscorePreviewMobile};
