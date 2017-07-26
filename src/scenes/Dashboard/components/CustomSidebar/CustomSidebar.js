import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Menu, Icon, Sidebar} from 'semantic-ui-react'

class CustomSidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {isMobile, isDesktop, isMobileSidebarOpen} = this.props;
    const isSidebarOpen = isDesktop || (isMobile && isMobileSidebarOpen);

    return (
      <Sidebar as={Menu} animation='push' width='thin' visible={isSidebarOpen} icon='labeled' vertical inverted>
        <Menu.Item name='home' active>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item name='gamepad'>
          <Icon name='gamepad' />
          Games
        </Menu.Item>
        <Menu.Item name='camera'>
          <Icon name='camera' />
          Channels
        </Menu.Item>
      </Sidebar>
    );
  }
}

CustomSidebar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
  isMobileSidebarOpen: PropTypes.bool.isRequired
}

export default CustomSidebar;
