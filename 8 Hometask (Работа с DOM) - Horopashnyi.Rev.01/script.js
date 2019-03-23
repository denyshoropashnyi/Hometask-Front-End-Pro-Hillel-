'use strict';

function isUserMissedInputName(value) {
    return value === '' || value === null || !isNaN(value);
};

function getUserName() {
    let name = prompt('Please enter your name.', '');

    if (isUserMissedInputName(name)) {
        alert('You did not introduce yourself. Please try again.');
        return getUserName();
    } else return name;
};

const userName = getUserName(isUserMissedInputName());


const welcomeHeader = document.querySelector('h1');
welcomeHeader.classList.add('header-welcome');
welcomeHeader.textContent = 'Hello, ' + userName + '!';


function isUserInputInvalidNumber(value) {
    return value === '' || value === null || isNaN(value) || value <= 0 || value >= 100;
};

function getUserNumber() {
    let number = prompt('Please enter number in the range of 0 till 100.', '');

    if (isUserInputInvalidNumber(number)) {
        alert('You input invalid number. Please try again.');
        return getUserNumber();
    } else return number;
};


const indexNumber = [
    'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth',
    'eleventh', 'twelth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth', 'twentieth',
    'twenty first', 'twenty second', 'twenty third', 'twenty fourth', 'twenty fifth', 'twenty sixth', 'twenty seventh', 'twenty eighth', 'twenty ninth', 'thirtieth',
    'thirty first', 'thirty second', 'thirty third', 'thirty fourth', 'thirty fifth', 'thirty sixth', 'thirty seventh', 'thirty eighth', 'thirty ninth', 'fortieth',
    'forty first', 'forty second', 'forty third', 'forty fourth', 'forty fifth', 'forty sixth', 'forty seventh', 'forty eighth', 'forty ninth', 'fiftieth',
    'fifty first', 'fifty second', 'fifty third', 'fifty fourth', 'fifty fifth', 'fifty sixth', 'fifty seventh', 'fifty eighth', 'fifty ninth', 'sixtieth',
    'sixty first', 'sixty second', 'sixty third', 'sixty fourth', 'sixty fifth', 'sixty sixth', 'sixty seventh', 'sixty eighth', 'sixty ninth', 'seventieth',
    'seventy first', 'seventy second', 'seventy third', 'seventy fourth', 'seventy fifth', 'seventy sixth', 'seventy seventh', 'seventy eighth', 'seventy ninth', 'eightieth',
    'eighty first', 'eighty second', 'eighty third', 'eighty fourth', 'eighty fifth', 'eighty sixth', 'eighty seventh', 'eighty eighth', 'eighty ninth', 'ninetieth',
    'ninety first', 'ninety second', 'ninety third', 'ninety fourth', 'ninety fifth', 'ninety sixth', 'ninety seventh', 'ninety eighth', 'ninety ninth', 'fiftieth',
];

const userNumber = getUserNumber(isUserInputInvalidNumber());

const userUl = document.createElement('ul');

userUl.classList.add('user-list');

document.body.appendChild(userUl);

const userLi = document.createElement('li');

for (let i = 0; i < Math.round(userNumber); i++) {
    const userLi = document.createElement('li');
    userUl.appendChild(userLi);
    userLi.textContent = (indexNumber[i]);
};