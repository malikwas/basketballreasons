const windowSizeDetector = {};

windowSizeDetector.startCheckingWidth = function(windowResizeHandler, options) {
  this.windowResizeHandler = windowResizeHandler;
  const windowResizeCheckInterval = 500 || options.windowSizeDetector;

  this.timer = setInterval(() => {
    const {innerWidth} = window;
    this.windowResizeHandler({
      width: innerWidth
    });
  }, windowResizeCheckInterval);
}

windowSizeDetector.stopCheckingWidth = function() {
  clearTimeout(this.timer);
  this.timer = null;
  this.windowResizeHandler = null;
}

export default windowSizeDetector;
