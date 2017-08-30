import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Sidebar, Segment} from 'semantic-ui-react'
import CustomSidebar from './components/CustomSidebar/CustomSidebar';
import Scoreboard from './scenes/Scoreboard/Scoreboard'
import {windowResizeHandler} from '../../data/actions/layout/layout-width-actions';

const DashboardContainer = styled.div`
  height: 100%;
`;

const SidebarAdjustedPusher = styled(Sidebar.Pusher)`
  max-width: ${props => props.isDesktop ? 'calc(100% - 150px)' : ''};
  height: 100%;
  overflow-y: scroll !important;
`;

class Dashboard extends Component {
  componentWillMount() {
    this.props.windowResizeHandler();
    this.timer = setInterval(this.props.windowResizeHandler, 200);
    this.props.
  }

  render() {
    const {isMobile, isDesktop, isMobileSidebarOpen} = this.props;

    return (
      <DashboardContainer>
        <Sidebar.Pushable>
          <CustomSidebar isMobile={isMobile} isDesktop={isDesktop} isMobileSidebarOpen={isMobileSidebarOpen}/>
          <SidebarAdjustedPusher isDesktop={isDesktop}>
            <Segment basic>
              <Switch>
                <Route path="/scoreboard/:date" component={Scoreboard}/>
                <Route path="/scoreboard" component={Scoreboard}/>
              </Switch>
            </Segment>
          </SidebarAdjustedPusher>
        </Sidebar.Pushable>
      </DashboardContainer>
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.timer = null;
  }
}

function mapStateToProps(state) {
  return {
    isMobileSidebarOpen: state.layout.isMobileSidebarOpen,
    isMobile: state.layout.isMobile,
    isDesktop: state.layout.isDesktop
  };
}

Dashboard.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
  isMobileSidebarOpen: PropTypes.bool.isRequired,
  windowResizeHandler: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {windowResizeHandler})(Dashboard);
 