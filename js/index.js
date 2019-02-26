//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

let element = document.createElement('div');

element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';

// Append element to body so it appears in the DOM
document.body.appendChild(element);

element.style.textAlign = 'center';

let ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);

ul.style.textAlign = 'left';

// remove second element
ul.removeChild(ul.querySelector('li:nth-child(2)'));
