'use strict';

let userFinalResult = null;

let userRightAnswerMark = 10;


let userFirstAnswer = prompt('What is the answer to this equation?\n 2 + 2 = ', '');

if (userFirstAnswer == null) {
    alert('It seems you missed the question.');
} else if ((userFirstAnswer == '')) {
    alert('You did not input the answer.\nPlease reload page and try again.');
} else if (isNaN(userFirstAnswer)) {
    alert('Invalid value. Here you must input only a numbers.\nPlease reload page and try again.');
} else if (userFirstAnswer == 4) {
    userFinalResult += userRightAnswerMark;
};


let userSecondAnswer = confirm('The sun is rising in the East, is not it?');

if (userSecondAnswer) {
    userFinalResult += userRightAnswerMark;
};


let userThirdAnswer = prompt('What is the answer to this equation?\n 5 << 2 =', '');

if (userThirdAnswer == null) {
    alert('It seems you missed the question.');
} else if ((userThirdAnswer == '')) {
    alert('You did not input the answer.\nPlease reload page and try again.');
} else if (isNaN(userThirdAnswer)) {
    alert('Invalid value. Here you must input only a numbers.\nPlease reload page and try again.');
} else if (userThirdAnswer == 20) {
    userFinalResult += userRightAnswerMark;
};

alert('You have completed the test.\nYour result is ' + userFinalResult + ' points.');
alert('You answered correctly ' + Math.round((userFinalResult / 30 * 100 * 100) / 100) + '% of the questions.');