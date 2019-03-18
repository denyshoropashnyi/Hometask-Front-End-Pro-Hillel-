'use strict';

function inputOperand() {
    let operand = prompt('Please input operand', 'input your value.');

    if (validateUserNumber(operand)) {
        alert('You input invalid data. Please input number.');
        return inputOperand();
    } else return Number(operand);
};

function inputOperator() {
    let mathOperator = prompt('Please input math operator', 'select one: "+", "-", "*", "/".');

    if (!validateOperator(mathOperator)) {
        alert('You input invalid data. Please select one of this: "+", "-", "*", "/"');
        inputOperator();
    } else {
        return mathOperator;
    };
};

function validateUserNumber(value) {
    return value === null || value === '' || isNaN(value);
};

function validateOperator(value) {
    return value === '+' || value === '-' || value === '/' || value === '*';
};

function calculate(firstNum, operator, secondNum) {
    let result;

    switch (operator) {
        case '+': {
            result = firstNum + secondNum;
            break;
        }
        case '-': {
            result = firstNum - secondNum;
            break;
        }
        case '/': {
            result = firstNum / secondNum;
            break;
        }
        case '*': {
            result = firstNum * secondNum;
            break;
        }
    }

    return result;
};

alert(calculate(inputOperand(), inputOperator(), inputOperand()));