/* eslint-disable */
const UI_WINDOW_MOBILE = 'UI_WINDOW_MOBILE';
const UI_WINDOW_DESKTOP = 'UI_WINDOW_DESKTOP';
const UI_OPEN_SIDEBAR = 'UI_OPEN_SIDEBAR'
const UI_CLOSE_SIDEBAR = 'UI_CLOSE_SIDEBAR'

const initialState = {
  isMobile: false,
  isDesktop: true,
  isMobileSidebarOpen: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UI_WINDOW_MOBILE:
      return Object.assign({}, state, {
        isMobile: true,
        isDesktop: false
      });

    case UI_WINDOW_DESKTOP:
      return Object.assign({}, state, {
        isMobile: false,
        isDesktop: true
      });

    case UI_WINDOW_MOBILE:
      return Object.assign({}, state, {
        isMobile: true,
        isDesktop: false
      });

    case UI_OPEN_SIDEBAR:
      return Object.assign({}, state, {
        isMobileSidebarOpen: true
      });

    case UI_CLOSE_SIDEBAR:
      return Object.assign({}, state, {
        isMobileSidebarOpen: false
      });

    default:
      return state;
  }
};
