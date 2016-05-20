var moment = require('moment');

var now = moment();

// console.log(now.format());

// console.log(now.format('X'));
// console.log(now.format('x'));

// console.log(now.valueOf());

var timestamp = 1463730940360;

var timestampMoment  = moment.utc(timestamp);

// timestampMoment.local();

console.log(timestampMoment.local().format('h:mm a'));
// var sub = now.subtract(1,'year');

// console.log(now.format());

// console.log(now.format('MMM Do YYYY, h:mma'));