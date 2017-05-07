#!/usr/bin/env node
const chalk            = require('chalk');
const setTerminalTitle = require('set-terminal-title');
const autoCliker       = require('../lib');

// Terminal tab title
const TITLE   = 'Auto Cliker';
process.title = TITLE;
setTerminalTitle(TITLE);

// Instructions
process.stdout.write(chalk.green('Press `S` to start\n'));
process.stdout.write(chalk.yellow('Press `P` to pause\n'));
process.stdout.write(chalk.blue('Press `R` to restart\n'));
process.stdout.write(chalk.red('Press `Q` to quit\n'));

// Hide keys typed
process.stdin.setRawMode(true);

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
