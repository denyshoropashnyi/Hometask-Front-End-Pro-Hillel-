// @ts-check
'use strict';

class Tabset {
    constructor(el) {
        this.el = el;
        this.checkedHeadingClass = 'tabset__element--heading--checked';
        this.showBodyClass = 'tabset__element--body--show';
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
        document.body.insertBefore(this.tabsetWrapper, this.el);
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
        for (let item = 0; item < this.tabsetElementHeading.length; item++) {
            this.tabsetElementHeading[item].addEventListener('click', this.showBody.bind(this));
        }
    }

    showBody(event) {
        this.removeBody();
        event.target.classList.add(this.checkedHeadingClass);

        this.cloneTabsetElementBody = event.target.nextElementSibling.cloneNode(true);
        this.bodyShown.appendChild(this.cloneTabsetElementBody);
        this.cloneTabsetElementBody.classList.add('tabset__element--body--show');
    }

    removeBody() {
        while (this.bodyShown.firstChild) {
            this.bodyShown.firstChild.remove();
        }
        for (let item = 0; item < this.tabsetElementHeading.length; item++) {
            this.tabsetElementHeading[item].classList.remove(this.checkedHeadingClass);
        }
    }

    show(index) {
        this.removeBody();
        this.tabsetElementHeading[(index - 1)].classList.add(this.checkedHeadingClass);
        this.cloneUserElement = this.tabsetElementBody[(index - 1)].cloneNode(true);
        this.bodyShown.appendChild(this.cloneUserElement);
        this.cloneUserElement.classList.add('tabset__element--body--show');
    }

    next() {
        this.removeBody();
        let nextNum = this.openedElement;
        if (nextNum < this.tabsetElementHeading.length) {
            this.tabsetElementHeading[nextNum].classList.add(this.checkedHeadingClass);
            this.cloneUserElement = this.tabsetElementBody[nextNum].cloneNode(true);
            this.bodyShown.appendChild(this.cloneUserElement);
            this.cloneUserElement.classList.add('tabset__element--body--show');
        } else {
            alert('It was last element.')
        }
    }

    prev() {
        this.removeBody();
        let prevNum = this.openedElement - 1;
        if (prevNum < this.tabsetElementHeading.length) {
            this.tabsetElementHeading[prevNum - 1].classList.add(this.checkedHeadingClass);
            this.cloneUserElement = this.tabsetElementBody[prevNum - 1].cloneNode(true);
            this.bodyShown.appendChild(this.cloneUserElement);
            this.cloneUserElement.classList.add('tabset__element--body--show');
        } else {
            alert('It was first element.')
        }
    }
};


const tabs = new Tabset(
    document.getElementById('container')
);


// tabs.show(2);
// tabs.next();
// tabs.prev();