'use strict';

function Accordeon(el, config) {
    this.container = el;
    this.config = config;

    this.init();
}

Accordeon.prototype.init = function () {
    this.bindEventListener();
}

Accordeon.prototype.bindEventListener = function () {
    this.container.addEventListener('click', (e) => this.onContainerClick(e));
}

Accordeon.prototype.onContainerClick = function (e) {
    if (e.target.classList.contains('accordeon-heading')) {
        this.toggleElement(e.target.parentNode);
    }
}

Accordeon.prototype.toggleElement = function (el) {
    if (el.classList.contains('open')) {
        this.closeElement(el);
    } else {
        this.openElement(el);
    }
}

Accordeon.prototype.closeElement = function (el) {
    el.classList.remove('open');
}

Accordeon.prototype.closeAllElements = function () {
    Array.prototype.forEach.call(this.container.children, this.closeElement);
}

Accordeon.prototype.openElement = function (el) {
    if (this.config.collapseOther) {
        this.closeAllElements();
    }

    el.classList.add('open');
}

Accordeon.prototype.open = function (index) {
    this.openElement(this.container.children[index]);
}

Accordeon.prototype.close = function (index) {
    this.closeElement(this.container.children[index]);
}

Accordeon.prototype.toggle = function (index) {
    this.toggleElement(this.container.children[index]);
}

const acc = new Accordeon(
    document.getElementById('container'),
    { collapseOther: true }
);

acc.open(0);
setTimeout(() => acc.toggle(1), 3000);
// acc.close(0);
// acc.toggle(1);