//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

let element = document.createElement('div');

element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';

// Append element to body so it appears in the DOM
document.body.appendChild(element);

element.style.textAlign = 'center';
