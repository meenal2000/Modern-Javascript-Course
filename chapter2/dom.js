// reference types holds up the same memory space in the pointer
// primitive types holds up different memory space at every declaration or assignment
// interacting with the browser
// first we need to select the element that we want to work on
// this reaching in and selecting the elements is called querying the DOM

// const para = document.querySelector('div.error');
// console.log(para);


// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para);
// })

// const errors = document.querySelectorAll('.error');
// console.log(errors);

// errors.forEach(error => {
//     console.log(error);
// });

// // get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// html collection and node-list are two different things
// get elements by class
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// // errors.forEach(error =>{ // does'nt work with html collection
// //     console.log(error);
// // })


// // get elements by tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// const par = document.querySelector('p');
// console.log(par.innerText);
// // par.innerText = 'ninjas are so awesome ';
// par.innerText += ' not so meeee ';
// console.log(par.innerText);

// const paras = document.querySelectorAll('p');
// paras.forEach(para =>{
//     para.innerText += ' new text';
//     console.log(para.innerText); // innerText is a prooperty not a method.
// });

// // changing the HTML of something
// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML += '<h2> this is a new H2 </h2>'; // changes the last html

// const people = ['mario' , 'luigi' , 'yoshi'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });
// console.log(content.innerHTML);

// getting and setting attributes
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','this is not a link but I will still call it new link');
link.innerText = "that's my new link now";

const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));
msg.setAttribute('class','success');

// setting attribute to an html element that does'nt exist
msg.setAttribute('style','color:green;');
