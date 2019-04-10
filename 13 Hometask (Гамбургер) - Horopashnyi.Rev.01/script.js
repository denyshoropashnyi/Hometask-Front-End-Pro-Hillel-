
//@ts-check

'use strict';

function Hamburger() {
    this.SIZE_SMALL = {
        price: 50,
        calories: 20
    };
    this.SIZE_MEDIUM = {
        price: 75,
        calories: 30
    };
    this.SIZE_BIG = {
        price: 100,
        calories: 40
    };

    this.STUFFING_CHEESE = {
        price: 10,
        calories: 20
    };
    this.STUFFING_SALAD = {
        price: 20,
        calories: 5
    };
    this.STUFFING_POTATOES = {
        price: 15,
        calories: 10
    };

    this.TOPPING_SPICE = {
        price: 15,
        calories: 0
    };
    this.TOPPING_MAYONNAISE = {
        price: 20,
        calories: 5
    }
};





const ham = new Hamburger();

console.log(ham.SIZE_SMALL, ham.STUFFING_POTATOES, ham.TOPPING_MAYONNAISE);