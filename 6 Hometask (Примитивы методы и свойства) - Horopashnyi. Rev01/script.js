'use strict';

function inputNumber() {
    let userNumber = prompt('Please input number.', 'type your number');

    if (validateUserNumber(userNumber)) {
        alert('You input invalid data. Please input number.');
        inputNumber(userNumber);
    } else {
        return Number(userNumber);
    };
};

function validateUserNumber(value) {
    return value === null || value === '' || isNaN(value);
};

function countEvenNumbers(value) {
    let userData = String(value), count = 0;

    for (let i = 0; i < userData.length; i++) {
        if (userData.charAt(i) % 2 === 0) {
            count++;
        };
    };
    return count;
};

let result = (countEvenNumbers(inputNumber()));

alert(result);


function getRandomNumber() {
    return Math.floor(1000 + Math.random() * 1001);
};

let firstRandomNumber = confirm('Get first random number?');
firstRandomNumber = getRandomNumber();

let secondRandomNumber = confirm('Get second random number?');
secondRandomNumber = getRandomNumber();

let maxRandomNumber = Math.max(firstRandomNumber, secondRandomNumber);

alert('Max integer random number is ' + maxRandomNumber);