/* eslint-disable */
const UI_WINDOW_MOBILE = 'UI_WINDOW_MOBILE';
const UI_WINDOW_DESKTOP = 'UI_WINDOW_DESKTOP';
const UI_OPEN_SIDEBAR = 'UI_OPEN_SIDEBAR'
const UI_CLOSE_SIDEBAR = 'UI_CLOSE_SIDEBAR'

function desktopWindowAction() {
  return {
    type: UI_WINDOW_DESKTOP
  };
}

function mobileWindowAction() {
  return {
    type: UI_WINDOW_MOBILE
  };
}

function openMobileSidebarAction() {
  return {
    type: UI_OPEN_SIDEBAR
  };
}

function closeSidebarAction() {
  return {
    type: UI_CLOSE_SIDEBAR
  };
}

export function windowResizeHandler() {
  return (dispatch, getState) => {
    const {innerWidth} = window;
    const isDesktop = innerWidth > 991;
    const isMobile = !isDesktop;

    if (getState().layout.isMobile && isDesktop) {
      dispatch(desktopWindowAction());
    } else if (getState().layout.isDesktop && isMobile) {
      dispatch(mobileWindowAction());
    }
  };
}

export function toggleSidebar() {
  return (dispatch, getState) => {
    if (getState().layout.isMobileSidebarOpen) {
      dispatch(closeSidebarAction());
    } else {
      dispatch(openSidebarAction());
    }
  }
}
