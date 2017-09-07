import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Segment} from 'semantic-ui-react';
import Link from '../../../../../../components/Link/Link';

class BoxscorePreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {game, date} = this.props;

    return (
      <Grid.Column mobile={16} tablet={8} computer={8} widescreen={4}>
        <Link to={`/boxscore/${date}/${game.hTeam.triCode}${game.vTeam.triCode}`}>
          <Segment>
            {game.hTeam.triCode} {game.vTeam.triCode}
          </Segment>
        </Link>
      </Grid.Column>
    );
  }
}

BoxscorePreview.propTypes = {
  game: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired
};

export default BoxscorePreview;

// ESPN Boxscore Preview
// <table>
//   <thead>
//     <tr class="sb-linescore">
//       <th class="date-time">Final</th>
//       <th class="score ">1</th>
//       <th class="score ">2</th>
//       <th class="score ">3</th>
//       <th class="score ">4</th>
//       <th class="total">T</th>
//     </tr>
//   </thead>
//   <tbody id="teams">
//     <tr class="away">
//       <td class="away">
//         <div class="img-container">
//           <a name="&amp;lpos=nba:scoreboard:team" href="/nba/team/_/name/cle/cleveland-cavaliers">
//           <img class="focus-image imageLoaded" onerror="this.src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';this.width=1;" src="http://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/cle.png&amp;h=70&amp;w=70">
//           </a>
//         </div>
//         <div class="sb-meta">
//           <h2 class="">
//             <a name="&amp;lpos=nba:scoreboard:team" href="/nba/team/_/name/cle/cleveland-cavaliers"> 
//             <span class="sb-team-short">Cavaliers</span>
//             <span class="sb-team-abbrev">CLE</span>
//             </a>
//           </h2>
//           <div class="record-container">
//             <p class="record">
//               (51-31,<span class="away-record"> 20-21 away</span>)
//             </p>
//             <p class="record overall">51-31</p>
//           </div>
//         </div>
//       </td>
//       <td class="score">37</td>
//       <td class="score">23</td>
//       <td class="score">33</td>
//       <td class="score">27</td>
//       <td class="total"><span>120</span></td>
//     </tr>
//     <tr class="home">
//       <td class="home">
//         <div class="img-container">
//           <a name="&amp;lpos=nba:scoreboard:team" href="/nba/team/_/name/gs/golden-state-warriors">
//           <img class="focus-image imageLoaded" onerror="this.src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';this.width=1;" src="http://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/gs.png&amp;h=70&amp;w=70">
//           </a>
//         </div>
//         <div class="sb-meta">
//           <h2 class="">
//             <a name="&amp;lpos=nba:scoreboard:team" href="/nba/team/_/name/gs/golden-state-warriors"> 
//             <span class="sb-team-short">Warriors</span>
//             <span class="sb-team-abbrev">GS</span>
//             </a>
//           </h2>
//           <div class="record-container">
//             <p class="record">
//               (67-15,<span class="home-record"> 36-5 Home</span>)
//             </p>
//             <p class="record overall">67-15</p>
//           </div>
//         </div>
//       </td>
//       <td class="score">33</td>
//       <td class="score">38</td>
//       <td class="score">27</td>
//       <td class="score">31</td>
//       <td class="total"><span>129</span></td>
//     </tr>
//   </tbody>
// </table>