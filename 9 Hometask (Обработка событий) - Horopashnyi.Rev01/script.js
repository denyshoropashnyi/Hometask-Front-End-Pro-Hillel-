'use strict';

const formatButton = document.querySelector('button');

const list = document.querySelector('ol');


formatButton.addEventListener('click', addNewLi);

list.addEventListener('click', toggleBackgroundColor);

list.addEventListener('click', removeLi);


function addNewLi() {
    let newLi = document.createElement('li');
    newLi.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    newLi.style.border = '1px dotted gray';

    list.appendChild(newLi);
};

function toggleBackgroundColor(element) {
    if (element.target.tagName === 'LI')
        element.target.style.background =
            element.target.style.background === 'red' ? 'yellow' : 'red';
};

function removeLi(element) {
    if (element.target.tagName === 'LI')
        if (element.altKey) element.target.remove();
};