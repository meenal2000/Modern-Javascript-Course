alert("hello world");
console.log(1);
console.log(2);

let points = 100;
let name = "meenal";
const booleanVal = 0;
var tmp = "meenal";
console.log(points);
console.log(name);
console.log(booleanVal);
console.log(tmp);

// strings
let name1 = "ruby";
let name2 = "Python";
let finalName = name1+' '+name2; // string concatenation
console.log(finalName);
console.log(finalName[0]);
console.log(finalName[2]);
console.log(finalName.length);
console.log(finalName.toUpperCase());

let email = "meenal2000@gmail.com";
index = email.indexOf('@');
console.log(index);

let ninjas = ['meenal','not-so-sanihc',0,90];
console.log(ninjas);

let num = '100.09';
num = Number(num);
num += 1;
console.log(num);
console.log(typeof num);

// for loop
const array1 = ['nikki','mohit','meenal'];
for(let i=0; i<array1.length; ++i)
{
    let html = `<div>${array1[i]}</div>`;
    console.log(html);
}
if(true)
{
    var x = 78;
    console.log('this is my var',x);
}
var x = 79;
console.log('this is my var outside',x);
console.log('this is my var outside',x+1);
// This gives error . Declarations are hoisted at the top but it isn't the case with
// function expressions
// xxx();
// const xxx = function (season = 'spring',time = 'morning'){
//     console.log(`the season is ${season} and time is ${time}`);
// };

// Return values
const speak = function(){
    return 5;
};
let ans = speak();
console.log(ans);

// object literal
let user ={
    name: "meenal",
    class: "C batch",
    college: "SKIT Jaipur",
    rollNo: "19eskcs137",
    login:function(){
        console.log("the user has logged in");
    },
    logout:function(){
        console.log("the user has logged out");
    }
};
console.log(user);
console.log(user['college']);
user.logout();
user['rollNo'] = 78;
console.log(user.rollNo);
// a function related to an object is a method




