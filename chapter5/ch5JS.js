const items = document.querySelectorAll('li');
// delete an element
const ul = document.querySelector('ul');
// ul.remove();

// add something everytime we hit on click button
// first way to go
// const button = document.querySelector('button');
// button.addEventListener('click', ()=>{
//     ul.innerHTML+= ('<li>something new</li>');
// });

// second way to go
const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    const li = document.createElement('li');
    li.textContent = 'something new';
    //ul.append(li);
    // for beginning insertion 
    ul.prepend(li);
});

// items.forEach(item =>{
//     item.addEventListener('click', e => {
//         // console.log('item clicked');
//         // console.log(e.target);
//         // e.target.style.textDecoration = 'line-through';
//         //e.target.remove();
//         console.log("element in li");
//         // To stop bubbling , we use stop propagation
//         e.stopPropagation();
//     });
// });

ul.addEventListener('click', e => { // evemt delegation , doing directly to the parents
    //console.log("element in ul");
    if(e.target.tagName == 'LI')
    {
        e.target.remove();
    }
});

// event bubbling
// there are many other events too such as mousemove, copy , wheel