import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';
import styled from 'styled-components';
import {Grid, Image} from 'semantic-ui-react';

const quarterNumHash = {
  '1': '1st',
  '2': '2nd',
  '3': '3rd',
  '4': '4th'
};

function overtimeTotal(linescore) {
  const overtime = linescore.slice(4);
  let total = 0;
  for (let i = 0; i < overtime.length; i++) {
    total += parseInt(overtime[i].score);
  }

  return total;
}

function totalScore(linescore) {
  let total = 0;
  for (let i = 0; i < linescore.length; i++) {
    total += parseInt(linescore[i].score);
  }

  return total;
}

let imgBaseUrl;
if (process.env.NODE_ENV === 'production') {
  imgBaseUrl = 'http://api.basketballreasons.io/static/images/teams';
} else {
  imgBaseUrl = 'http://localhost:4321/static/images/teams';
}

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

const TotalScore = styled.td`
  font-size: 1.6rem;
  font-weight: bold;
  text-align: right !important;
`;

const TeamImageContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding-right: 0.5em;
`;

const TeamInformationContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const TeamName = styled.h4`
  margin: 0;
`;

const TeamRecord = styled.p`
  font-size: 0.75rem;
  margin: 0;
`;

const BoxscorePreviewDesktop = ({game, date}) => (
  <Grid.Column>
    {/*<Link to={`/boxscore/${date}/${game.hTeam.triCode}${game.vTeam.triCode}`}>*/}
      <table className="ui unstackable basic compact table">
        <tbody>
          {!isEmpty(game.hTeam.linescore) &&
            <tr>
              {game.statusNum === 1 &&
                <GameStatus>{game.startTimeEastern}</GameStatus>
              }
              {game.statusNum === 2 &&
                <GameStatus>{game.clock} - {quarterNumHash[game.period.current]}</GameStatus>
              }
              {game.statusNum === 3 &&
                <GameStatus>Final</GameStatus>
              }
              <LineScore>1</LineScore>
              <LineScore>2</LineScore>
              <LineScore>3</LineScore>
              <LineScore>4</LineScore>
              {game.hTeam.linescore.length > 4 &&
                <LineScore>OT</LineScore>
              }
              <TotalScoreHeader>T</TotalScoreHeader>
            </tr>
          }
          {isEmpty(game.hTeam.linescore) &&
            <tr>
              <GameStatus>{game.startTimeEastern}</GameStatus>
            </tr>
          }
          <TeamRowDesktop {...game.vTeam}/>
          <TeamRowDesktop {...game.hTeam}/>
        </tbody>
      </table>
    {/*</Link>*/}
  </Grid.Column>
);

const TeamRowDesktop = ({teamId, triCode, win, loss, seriesWin, seriesLoss, score, linescore}) => {
  if (!isEmpty(linescore)) {
    return (
      <tr>
        <GameStatus>
          <TeamImageContainer>
            <Image src={`${imgBaseUrl}/${triCode}.svg`} width="50"/>
          </TeamImageContainer>
          <TeamInformationContainer>
            <TeamName>{triCode}</TeamName>
            <TeamRecord>({win}-{loss})</TeamRecord>
          </TeamInformationContainer>
        </GameStatus>
        <LineScore>{!isEmpty(linescore[0]) ? linescore[0].score : ''}</LineScore>
        <LineScore>{!isEmpty(linescore[1]) ? linescore[1].score : ''}</LineScore>
        <LineScore>{!isEmpty(linescore[2]) ? linescore[2].score : ''}</LineScore>
        <LineScore>{!isEmpty(linescore[3]) ? linescore[3].score : ''}</LineScore>
        {linescore.length > 4 &&
          <LineScore>{overtimeTotal(linescore)}</LineScore>
        }
        <TotalScore>
          {totalScore(linescore)}
        </TotalScore>
      </tr>
    );
  } else {
    return (
      <tr>
        <GameStatus>
          <TeamImageContainer>
            <Image src={`${imgBaseUrl}/${triCode}.svg`} width="50"/>
          </TeamImageContainer>
          <TeamInformationContainer>
            <TeamName>{triCode}</TeamName>
            <TeamRecord>({win}-{loss})</TeamRecord>
          </TeamInformationContainer>
        </GameStatus>
      </tr>
    );
  }
}

const BoxscorePreviewMobile = ({game, date}) => (
  <Grid.Column>
    {/*<Link to={`/boxscore/${date}/${game.hTeam.triCode}${game.vTeam.triCode}`}>*/}
      <table className="ui unstackable basic compact table">
        <tbody>
          <tr>
            {game.statusNum === 1 &&
              <GameStatus>{game.startTimeEastern}</GameStatus>
            }
            {game.statusNum === 2 &&
              <GameStatus>{game.clock} - {quarterNumHash[game.period.current]}</GameStatus>
            }
            {game.statusNum === 3 &&
              <GameStatus>Final</GameStatus>
            }
            {!isEmpty(game.hTeam.linescore) &&
              <TotalScoreHeader>T</TotalScoreHeader>
            }
          </tr>
          <TeamRowMobile {...game.vTeam}/>
          <TeamRowMobile {...game.hTeam}/>
        </tbody>
      </table>
    {/*</Link>*/}
  </Grid.Column>
);

const TeamRowMobile = ({teamId, triCode, win, loss, seriesWin, seriesLoss, score, linescore}) => (
  <tr>
    <GameStatus>
      <TeamImageContainer>
        <Image src={`${imgBaseUrl}/${triCode}.svg`} width="50"/>
      </TeamImageContainer>
      <TeamInformationContainer>
        <TeamName>{triCode}</TeamName>
        <TeamRecord>({win}-{loss})</TeamRecord>
      </TeamInformationContainer>
    </GameStatus>
    {!isEmpty(linescore) &&
      <TotalScoreHeader>
        {score}
      </TotalScoreHeader>
    }
  </tr>
);

BoxscorePreviewDesktop.propTypes = {
  game: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired
};

TeamRowDesktop.propTypes = {
  teamId: PropTypes.string.isRequired,
  triCode: PropTypes.string.isRequired,
  win: PropTypes.string.isRequired,
  seriesWin: PropTypes.string.isRequired,
  seriesLoss: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  linescore: PropTypes.array.isRequired
};

BoxscorePreviewMobile.propTypes = {
  game: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired
};

TeamRowMobile.propTypes = {
  teamId: PropTypes.string.isRequired,
  triCode: PropTypes.string.isRequired,
  win: PropTypes.string.isRequired,
  seriesWin: PropTypes.string.isRequired,
  seriesLoss: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  linescore: PropTypes.array.isRequired
};

export {BoxscorePreviewDesktop, BoxscorePreviewMobile};
