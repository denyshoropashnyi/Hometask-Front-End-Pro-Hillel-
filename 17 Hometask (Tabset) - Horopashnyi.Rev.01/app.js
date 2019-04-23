// // @ts-check
'use strict';

class Tabset {
    constructor(el) {
        this.el = el;
        this.showCls = 'tabset__element--body--show';
        this.openedElem = 0;

        this.init();
    }

    init() {
        this.addClassNames();
        this.addListeners();
    }

    addClassNames() {
        this.el.classList.add('wrapper__tabset');

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
        };
    }

    addListeners() {
        for (let item = 0; item < this.tabsetElementHeading.length; item++) {
            this.tabsetElementHeading[item].addEventListener('click', this.showBody.bind(this) );
        }
    }

    showBody(event) {
        this.removeBody();
        event.target.nextElementSibling.classList.add(this.showCls);
        //this.openedElem = item;

    }

    removeBody() {
        for (let item of this.tabsetElementBody) {
            item.classList.remove(this.showCls);
        }
    }

    show(e) {
        this.tabsetElementBody[e - 1].classList.add(this.showCls);
    }

    next() {

    }
};


const tabs = new Tabset(
    document.getElementById('container')
);


// tabs.show();
// tabs.next();
// tabs.prev();