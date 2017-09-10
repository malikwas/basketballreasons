/* eslint-disable */
const VIEWPORT_WIDTH_MOBILE = 'VIEWPORT_WIDTH_MOBILE';
const VIEWPORT_WIDTH_TABLET = 'VIEWPORT_WIDTH_TABLET';
const VIEWPORT_WIDTH_SMALL_MONITOR = 'VIEWPORT_WIDTH_SMALL_MONITOR';
const VIEWPORT_WIDTH_LARGE_MONITOR = 'VIEWPORT_WIDTH_LARGE_MONITOR';

function viewportWidthMobile() {
  return {
    type: VIEWPORT_WIDTH_MOBILE
  };
}

function viewportWidthTablet() {
  return {
    type: VIEWPORT_WIDTH_TABLET
  };
}

function viewportWidthSmallMonitor() {
  return {
    type: VIEWPORT_WIDTH_SMALL_MONITOR
  };
}

function viewportWidthLargeMonitor() {
  return {
    type: VIEWPORT_WIDTH_LARGE_MONITOR
  };
}

export function windowResizeHandler() {
  return (dispatch, getState) => {
    const {innerWidth} = window;
    const isMobile = innerWidth < 768;
    const isTablet = innerWidth >= 768 && innerWidth <= 991;
    const isSmallMonitor = innerWidth >= 992 && innerWidth <= 1200;
    const isLargeMonitor = innerWidth > 1200;

    if (isMobile && !getState().layout.isMobile)
        dispatch(viewportWidthMobile());
    else if (isTablet && !getState().layout.isTablet)
        dispatch(viewportWidthTablet());
    else if (isSmallMonitor && !getState().layout.isSmallMonitor)
        dispatch(viewportWidthSmallMonitor());
    else if (isLargeMonitor && !getState().layout.isLargeMonitor)
        dispatch(viewportWidthLargeMonitor());
  };
}
