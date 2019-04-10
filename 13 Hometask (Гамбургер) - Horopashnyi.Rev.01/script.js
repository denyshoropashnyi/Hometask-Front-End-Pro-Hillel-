
//@ts-check

'use strict';

function Hamburger(size, stuffing, topping) {
    this.size = size;
    this.stuffing = stuffing;
    this.topping = [];

    switch (size) {
        case 'small':
            this.SIZE_SMALL = {
                price: 50,
                calories: 20
            }
            break;

        case 'medium':
            this.SIZE_MEDIUM = {
                price: 75,
                calories: 30
            };
            break;

        case 'big':
            this.SIZE_BIG = {
                price: 100,
                calories: 40
            };
            break;

        default:
            alert('We do not have this size.');

            this.price = size.price + stuffing.price;
            this.calories = size.calories + stuffing.calories;
    };

    switch (stuffing) {
        case 'cheese':
            this.STUFFING_CHEESE = {
                price: 10,
                calories: 20
            };
            break;

        case 'salad':
            this.STUFFING_SALAD = {
                price: 20,
                calories: 5
            };
            break;

        case 'potatoes':
            this.STUFFING_POTATOES = {
                price: 15,
                calories: 10
            };
            break;

        default:
            alert('We do not have this stuffings.')
    };
};

const TOPPING_SPICE = { name: 'spice', cost: 15, calories: 0 };

const TOPPING_MAYONNAISE = { name: 'mayonaise', cost: 20, calories: 5 };

Hamburger.prototype.addTopping = function (topping) {
    this.topping.push(topping);
};

Hamburger.prototype.calculatePrice = function () {
    return this.size.price + this.stuffing.price + this.topping.reduce((acc, el) => acc + el.price, 0);
};

Hamburger.prototype.calculateCalories = function () {
    return this.size.calories + this.stuffing.calories + this.topping.reduce((acc, el) => acc + el.calories, 0);
};


const myHam = new Hamburger('big', 'cheese');
console.log(myHam);
myHam.addTopping(TOPPING_MAYONNAISE);
console.log(myHam);