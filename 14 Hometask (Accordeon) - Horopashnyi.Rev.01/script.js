//@ts-check

'use strict';


function Accordeon(el, config) {
}

const accordeon = new Accordeon(
    document.getElementById('container'),
    { collapseOther: true }
);

accordeon.open(0);
accordeon.close(0);
accordeon.toggle(1);