'use strict';

let timeInSec = prompt('Please, enter the time in seconds to convert.', '');

alert('Done.\nAnd now look at your result in the console.');

console.log(timeInSec + ' sec', '=', Math.floor(timeInSec / 86400) + ' days', Math.floor(timeInSec % 86400 / 3600) + ' hrs',
    Math.floor(timeInSec % 86400 % 3600 / 60) + ' mins', Math.floor(timeInSec % 86400 % 3600 % 60) + ' secs');