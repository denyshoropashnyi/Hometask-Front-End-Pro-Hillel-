// // @ts-check
'use strict';

class Tabset {
    constructor(el) {
        this.el = el;

        this.init();
    }

    init() {
        this.addClassName();
    }

    addClassName() {
        this.wrapperTabset = document.getElementById('container');
        this.wrapperTabset.classList.add('wrapper__tabset');

        this.tabsetElement = this.wrapperTabset.children;
        for (let i = 0; i < this.tabsetElement.length; i++) {
            this.tabsetElement[i].classList.add('tabset__element');
        }

        this.tabsetElementHeading = this.wrapperTabset.getElementsByClassName('tabset-heading');
        for (let i = 0; i < this.tabsetElementHeading.length; i++) {
            this.tabsetElementHeading[i].classList.add('tabset__element--heading');
        }

        this.tabsetElementBody = this.wrapperTabset.getElementsByClassName('tabset-body');
        for (let i = 0; i < this.tabsetElementBody.length; i++) {
            this.tabsetElementBody[i].classList.add('tabset__element--body');
        };
    }
    
};







const tabs = new Tabset(
    document.getElementById('container')
);

// tabs.show();
// tabs.next();
// tabs.prev();