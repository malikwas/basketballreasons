import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Sidebar, Segment} from 'semantic-ui-react'
import CustomSidebar from './components/CustomSidebar/CustomSidebar';
import Scoreboard from './scenes/Scoreboard/Scoreboard'
import {windowResizeHandler} from '../../data/actions/ui-actions';

const DashboardContainer = styled.div`
  height: 100%;
`;

const SidebarAdjustedSegment = styled(Segment)`
  max-width: ${props => props.isDesktop ? 'calc(100% - 150px)' : ''};
`;

class Dashboard extends Component {
  render() {
    const {isMobile, isDesktop, isMobileSidebarOpen} = this.props;

    return (
      <DashboardContainer>
        <Sidebar.Pushable>
          <CustomSidebar isMobile={isMobile} isDesktop={isDesktop} isMobileSidebarOpen={isMobileSidebarOpen}/>
          <Sidebar.Pusher>
            <SidebarAdjustedSegment isDesktop={isDesktop} basic>
              <Route path="/" component={Scoreboard}/>
            </SidebarAdjustedSegment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </DashboardContainer>
    );
  }

  componentWillMount() {
    this.props.windowResizeHandler();
    this.timer = setInterval(this.props.windowResizeHandler, 500);
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

CustomSidebar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
  isMobileSidebarOpen: PropTypes.bool.isRequired,
  windowResizeHandler: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {windowResizeHandler})(Dashboard);
 