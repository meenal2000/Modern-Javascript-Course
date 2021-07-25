const now = new Date();
console.log(now);

// year , months and dates
console.log('year',now.getFullYear());
console.log('month',now.getMonth());
console.log('date',now.getDate());
console.log('day',now.getDay());
console.log('hrs',now.getHours());
console.log('min',now.getMinutes());
console.log('sec',now.getSeconds());
// timestamps
console.log('timestamps',now.getTime()); // gives time in milliseconds
// from jan 1 1970

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

// timestamps to dates conversation
const timestamps = 1625029490888;
console.log(new Date(timestamps));