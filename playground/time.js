var moment = require('moment');

var createdAt = 1234;

var time = moment(createdAt);
console.log(time.format('h:mm a'));

// var date = moment();
// date.add(1000, 'year').subtract(9,'months');
// console.log(date.format('MMM Do YYYY'));

// var date = new Date();
// console.log(date.getMonth());

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
