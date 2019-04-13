//@ts-check

'use strict';

let accElement = document.getElementsByClassName('accordeon-element');
let accHeading = document.getElementsByClassName('accordeon-heading');
let i;

for (i = 0; i < accHeading.length; i++) {
    accHeading[i].addEventListener('click', toggleItem)
}

function toggleItem() {
    let elementClass = this.parentNode.className;
    for (i = 0; i < accElement.length; i++) {
        accElement[i].className = 'accordeon-show';
    }
    if (elementClass == 'accordeon-show') {
        this.nextElementSibling.className = 'accordeon-hide'
    }
};




// let accElement = document.getElementsByClassName('accordeon-heading');

// for (let i = 0; i < accElement.length; i++) {
//     accElement[i].addEventListener('onclick',this.toggle('active'));

// this.classList.toggle('accordeon-body.show');

// }


// let accElement = document.getElementsByClassName('accordeon-element');

// let accHeading = document.getElementsByClassName('accordeon-heading');

// let i;

// for (i = 0; i < accHeading.length; i++) {
//     accHeading[i].addEventListener('click', toggleElement)
// }

// function toggleElement() {
//     let elementClass = this.className;
//     for (i = 0; i < accElement.length; i++) {
//         accElement[i].className = 'accordeon-body-close';
//     }
//     if (elementClass == 'accordeon-body-close') {
//         this.className == 'accordeon-body-show';
//     }
// }




// // function Accordeon(el, config) {
// // }

// // const accordeon = new Accordeon(
// //     document.getElementById('container'),
// //     { collapseOther: true }
// // );

// // accordeon.open(0);
// // accordeon.close(0);
// // accordeon.toggle(1);