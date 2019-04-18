//@ts-check
'use strict';

class Gallery {
    constructor(el, { delay }) {
        const galleryContainer = document.createElement('div');
        galleryContainer.setAttribute('id', 'gallery-container');

        this.btnPrevImg = document.createElement('button');
        this.btnPrevImg.setAttribute('id', 'btn-prev-img');
        this.btnPrevImg.innerHTML = ('&#8678;');

        this.btnNextImg = document.createElement('button');
        this.btnNextImg.setAttribute('id', 'btn-next-img');
        this.btnNextImg.innerHTML = ('&#8680;');

        document.body.insertBefore(galleryContainer, document.body.firstChild);
        galleryContainer.appendChild(el);
        galleryContainer.prepend(this.btnPrevImg);
        galleryContainer.appendChild(this.btnNextImg);

        this.el = el;
        this.delay = delay;
        this.curentPosition = 0;
        this.imgWidth = 444;
        this.imageCounter = el.children.length;

        this.init();
    }

    init() {
        this.addHandlers();
        this.runTimeout();
    }

    showNextImg() {
        if (this.curentPosition + 1 !== this.imageCounter) {
            this.curentPosition++;
            this.switchImg();
        }
    }

    showPrevImg() {
        if (this.curentPosition - 1 !== 0) {
            this.curentPosition--;
            this.switchImg();
        }
    }

    addHandlers() {
        this.btnNextImg.addEventListener('click', this.showNextImg.bind(this), false);
        this.btnPrevImg.addEventListener('click', this.showPrevImg.bind(this), false);
    }

    runTimeout() {
        const interval = setInterval(() => {
            this.showNextImg();

            if (this.curentPosition + 1 === this.imageCounter) {
                clearInterval(interval);
            }
        }, this.delay);
    }

    showCurrenImage(index) {
        this.curentPosition = index;
        this.switchImg();
        this.runTimeout();
    }

    switchImg() {
        this.el.style.transform = `translateX(-${this.curentPosition * this.imgWidth}px)`;
    }
};

const galery = new Gallery(document.getElementById('container'), { delay: 2222 });