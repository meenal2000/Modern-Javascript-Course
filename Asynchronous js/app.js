// Asynchronous javascript - Governs how we perform tasks that take time to complete
// U can start it now and then, finish it later
// Like when a request/multiple req. is being made then, it takes time
// and to handle that asynchronous code comes into play

// Javascript is synchronous by nature - executes one line at a time from top->bottom
// It's single threaded - A ordered sequence of statements and only one of them
// run at a time

// eg. of an asynchronous code
// It calls back after executing the next few statements .
// Hence, an asynchronous code.
console.log(1);
console.log(2);

setTimeout( () => {
    console.log('callback function fired !');
},2000);

console.log(3);
console.log(4);


// HTTP requests - Actions which will take time to complete .
// Basically , the asynchronous part


// when we make a http request , we get a json string object back
// JSON.parse() - takes a json string and converts it into javascript object

// Promises are used to just make one request at a time
// and avoid callback hell

