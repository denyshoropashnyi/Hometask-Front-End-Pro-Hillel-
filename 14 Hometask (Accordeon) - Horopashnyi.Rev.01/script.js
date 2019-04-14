//@ts-check

'use strict';

let accElement = document.getElementsByClassName('accordeon-element');
let accHeading = document.getElementsByClassName('accordeon-heading');
let i;

for (i = 0; i < accHeading.length; i++) {
    accHeading[i].addEventListener('click', toggleItem)
};

function toggleItem() {
    let elementClass = this.parentNode.className;
    for (i = 0; i < accElement.length; i++) {
        this.nextElementSibling.className = 'accordeon-show'
    }
    if (this.elementClass == 'accordeon-body.active') {
        this.nextElementSibling.className = 'accordeon-show'
    }
};





// // function Accordeon(el, config) {
// // }

// // const accordeon = new Accordeon(
// //     document.getElementById('container'),
// //     { collapseOther: true }
// // );

// // accordeon.open(0);
// // accordeon.close(0);
// // accordeon.toggle(1);