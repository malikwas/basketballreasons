/* eslint-disable */
const VIEWPORT_WIDTH_MOBILE = 'VIEWPORT_WIDTH_MOBILE';
const VIEWPORT_WIDTH_TABLET = 'VIEWPORT_WIDTH_TABLET';
const VIEWPORT_WIDTH_SMALL_MONITOR = 'VIEWPORT_WIDTH_SMALL_MONITOR';
const VIEWPORT_WIDTH_LARGE_MONITOR = 'VIEWPORT_WIDTH_LARGE_MONITOR';

const initialState = {
  isMobile: false,
  isTablet: false,
  isSmallMonitor: true,
  isLargeMonitor: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case VIEWPORT_WIDTH_MOBILE:
      return Object.assign({}, state, {
        isMobile: true,
        isTablet: false,
        isSmallMonitor: false,
        isLargeMonitor: false
      });

    case VIEWPORT_WIDTH_TABLET:
      return Object.assign({}, state, {
        isMobile: false,
        isTablet: true,
        isSmallMonitor: false,
        isLargeMonitor: false
      });

    case VIEWPORT_WIDTH_SMALL_MONITOR:
      return Object.assign({}, state, {
        isMobile: false,
        isTablet: false,
        isSmallMonitor: true,
        isLargeMonitor: false
      });

    case VIEWPORT_WIDTH_LARGE_MONITOR:
      return Object.assign({}, state, {
        isMobile: false,
        isTablet: false,
        isSmallMonitor: false,
        isLargeMonitor: true
      });

    default:
      return state;
  }
};
