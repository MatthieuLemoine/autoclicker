const robot  = require('robotjs');
const ioHook = require('iohook');

module.exports = function setup({ keys : { START, RESTART, PAUSE, STOP } }) {
  let interval;
  ioHook.on('keyup', event => {
    switch (event.keycode) {
      case RESTART:
      case START: {
        if (!interval) {
          interval = setInterval(() => robot.mouseClick(), 1);
        }
        break;
      }
      case PAUSE: {
        if (interval) {
          clearInterval(interval);
          interval = null;
        }
        break;
      }
      case STOP: {
        if (interval) {
          clearInterval(interval);
          interval = null;
        }
        ioHook.unload();
        process.exit();
        break;
      }
      default:
        break;
    }
  });
  ioHook.start();
};
