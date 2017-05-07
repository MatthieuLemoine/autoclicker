# auto-cliker

:point_up_2: An auto clicker built with Node.js.


## Install

```
npm i -g auto-clicker
```

## Usage

```
auto-clicker
```

Commands :
- ``S`` or ``R`` : start/restart auto clicks
- ``P`` : stop auto clicks
- ``Q`` : stop auto clicks & quit


## Lib

``auto-clicker`` can be used as a module in an existing application

```
npm install --save auto-clicker
```

```javascript
const autoClicker = require('auto-clicker');
// S key
const START   = 31;
// R key
const RESTART = 19;
// P key
const PAUSE   = 25;
// Q key
const STOP    = 30;

autoCliker({
  keys : {
    START,
    RESTART,
    PAUSE,
    STOP,
  },
});
```
