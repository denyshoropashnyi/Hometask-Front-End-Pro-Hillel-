'use strict';

const list = document.querySelector('ol');

function formatList() {
    const newLi = document.createElement('li');
    newLi.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    list.appendChild(newLi)
        .style.border = '1px dotted gray';

    newLi.addEventListener('click', onFormatButtonClick);
    newLi.addEventListener('click', function (event) {
        if (event.altKey) {
            this.parentNode.removeChild(newLi);
        }
    })
};

const formatButton = document.querySelector('button')
    .addEventListener('click', formatList);

function toggleBackgroundColor(element) {
    element.style.background =
        element.style.background === 'red' ? 'yellow' : 'red';
};

function onFormatButtonClick(event) {
    toggleBackgroundColor(event.target);
};