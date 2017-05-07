# autocliker

:point_up_2: An autoclicker built with Node.js.


## Install

```
npm i -g autoclicker
```

## Usage

```
autoclicker
```

Commands :
- ``S`` or ``R`` : start/restart auto clicks
- ``P`` : stop auto clicks
- ``Q`` : stop auto clicks & quit


## Lib

``autoclicker`` can be used as a module in an existing application

```
npm install --save autoclicker
```

```javascript
const autoClicker = require('autoclicker');
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
