// @ts-check
'use strict';

class Tabset {
    static SHOW_BODY_CLASS = 'tabset__element--body--show';
    static CHECKED_HEADING_CLASS = 'tabset__element--heading--clicked';

    constructor(el) {
        this.el = el;
        this.openedElement = 1;

        this.init();
    }

    init() {
        this.createElements();
        this.applyClassNames();
        this.appendElements();
        this.addListeners();
        this.show(this.openedElement);
    }

    createElements() {
        this.tabsetWrapper = document.createElement('div');
        this.bodyShown = document.createElement('div');
    }

    applyClassNames() {
        this.tabsetWrapper.classList.add('tabset__wrapper');
        this.el.classList.add('tabset__container');
        this.bodyShown.classList.add('tabset__element--body--shown');
    }

    appendElements() {
        this.el.parentNode.insertBefore(this.tabsetWrapper, this.el);
        this.tabsetWrapper.appendChild(this.el);
        this.tabsetWrapper.appendChild(this.bodyShown);

        this.tabsetElement = this.el.children;
        for (let i = 0; i < this.tabsetElement.length; i++) {
            this.tabsetElement[i].classList.add('tabset__element');
        }

        this.tabsetElementHeading = this.el.getElementsByClassName('tabset-heading');
        for (let i = 0; i < this.tabsetElementHeading.length; i++) {
            this.tabsetElementHeading[i].classList.add('tabset__element--heading');
        }

        this.tabsetElementBody = this.el.getElementsByClassName('tabset-body');
        for (let i = 0; i < this.tabsetElementBody.length; i++) {
            this.tabsetElementBody[i].classList.add('tabset__element--body');
        }
    }

    addListeners() {
        this.el.addEventListener('click', this.showBody.bind(this));
    }

    showBody(event) {
        if (event.target.classList.contains('tabset__element--heading')) {
            this.removeBody();
            event.target.classList.add(Tabset.CHECKED_HEADING_CLASS);

            this.cloneTabsetElementBody = event.target.nextElementSibling.cloneNode(true);
            this.bodyShown.appendChild(this.cloneTabsetElementBody);
            this.cloneTabsetElementBody.classList.add('tabset__element--body--show');
        }
    }

    removeBody() {
        while (this.bodyShown.firstChild) {
            this.bodyShown.firstChild.remove();
        }
        for (let item = 0; item < this.tabsetElementHeading.length; item++) {
            this.tabsetElementHeading[item].classList.remove(Tabset.CHECKED_HEADING_CLASS);
        }
    }

    show(index) {
        if (index > 0 && index <= this.tabsetElementHeading.length) {
            this.removeBody();
            this.tabsetElementHeading[(index - 1)].classList.add(Tabset.CHECKED_HEADING_CLASS);
            this.cloneUserElement = this.tabsetElementBody[(index - 1)].cloneNode(true);
            this.bodyShown.appendChild(this.cloneUserElement);
            this.cloneUserElement.classList.add('tabset__element--body--show');
        } else {
            alert('Invalid number.')
        }
    }

    next() {
        this.openedElement++;
        if (this.openedElement <= this.tabsetElementHeading.length) {
            this.show(this.openedElement)
        } else {
            alert('It was last element.')
        }
    }

    prev() {
        this.openedElement--;
        if (this.openedElement != 0) {
            this.show(this.openedElement)
        } else {
            alert('It was first element.')
        }
    }
};


const tabs = new Tabset(
    document.getElementById('container')
);


// tabs.show();
// tabs.next();
// tabs.prev();
