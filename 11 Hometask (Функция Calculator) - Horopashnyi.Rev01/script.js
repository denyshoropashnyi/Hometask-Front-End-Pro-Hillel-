'use strict';

function calculator(userNumber) {

    return {
        add: function calculate(value) {
            return userNumber + value
        },

        subtract: function calculate(value) {
            return userNumber - value
        },

        divide: function calculate(value) {
            return userNumber / value
        },

        multiply: function calculate(value) {
            return userNumber * value
        },

        set: function calculate(value) {
            return userNumber = value
        },

        get: function calculate() {
            return userNumber
        }
    }
};


const result = calculator(10);


console.log(result.add(45));
console.log(result.subtract(45));
console.log(result.divide(5));
console.log(result.multiply(5));
console.log(result.set(100));
console.log(result.get());
console.log(result.multiply(5));