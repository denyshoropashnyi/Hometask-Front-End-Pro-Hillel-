//@ts-check

'use strict';


function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;

    this.coins = size.coins + stuffing.coins;
    this.calories = size.calories + stuffing.calories;
};


Hamburger.SIZE_SMALL = { name: 's', coins: 50, calories: 20 };
Hamburger.SIZE_MEDIUM = { name: 'm', coins: 75, calories: 30 };
Hamburger.SIZE_BIG = { name: 'l', coins: 100, calories: 40 };

Hamburger.STUFFING_CHEESE = { name: 'cheese', coins: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { name: 'salad', coins: 20, calories: 5 };
Hamburger.STUFFING_POTATOES = { name: 'potatoes', coins: 15, calories: 10 };

Hamburger.TOPPING_SPICE = { name: 'spice', coins: 15, calories: 0 };
Hamburger.TOPPING_MAYONAISE = { name: 'mayonaise', coins: 20, calories: 5 };


Hamburger.prototype.addTopping = addTopping;
Hamburger.prototype.calculateCalories = calculateCalories;
Hamburger.prototype.calculateCoins = calculateCoins;


function addTopping(topp) {
    this.coins += topp.coins;
    this.calories += topp.calories;
};

function calculateCoins() {
    let price = this.coins;
    return console.log('Your hamburger costs ' + price + ' coins.');
};

function calculateCalories() {
    let summaryCalories = this.calories;
    return console.log('Your hamburger has ' + summaryCalories + ' calories.');
};


const userHamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_POTATOES);
console.log(userHamburger);

userHamburger.addTopping(Hamburger.TOPPING_MAYONAISE)
console.log(userHamburger);

userHamburger.calculateCoins();
userHamburger.calculateCalories();