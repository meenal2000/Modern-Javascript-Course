const heading = document.querySelector('h1');
heading.setAttribute('style','margin : 50px');
console.log(heading);
console.log(heading.style);
heading.style.color = 'crimson'; // better way , does'nt overwrite stuff like the 2nd line
heading.style.fontSize = '60px';
heading.style.margin = '';