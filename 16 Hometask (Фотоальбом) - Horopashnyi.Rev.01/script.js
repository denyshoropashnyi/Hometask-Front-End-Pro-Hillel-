//@ts-check
'use strict';

class Album {
    constructor(el) {
        this.el = el;

        this.init();
    }

    init() {
        this.createElements();
        this.addEvents();
    }

    createElements() {
        const photobook = document.createElement('div');
        const currentPhoto = document.createElement('div');
        const photoListContainer = document.getElementById('container');
        const photoListImage = photoListContainer.children;
        this.currentImage = document.createElement('img');

        photobook.classList.add('photobook');
        currentPhoto.classList.add('photobook__currentphoto');
        photoListContainer.classList.add('photobook__photolist');
        for (let i = 0; i < photoListImage.length; i++) {
            photoListImage[i].classList.add('photobook__photolist--image')
        };

        document.body.insertBefore(photobook, document.body.firstChild);
        photobook.appendChild(currentPhoto);
        photobook.appendChild(photoListContainer);
        currentPhoto.appendChild(this.currentImage);
    }

    addEvents() {
        this.el.addEventListener('mouseover', this.changeImg.bind(this));
        this.el.addEventListener('mouseleave', this.changeImg.bind(this));
    }

    changeImg(el) {
        (el.target.nodeName === 'IMG') ? this.copyImg(el.target) : this.removeImg();
    }

    copyImg(el) {
        this.currentImage.src = el.src;
        this.currentImage.alt = el.alt;
    }

    removeImg() {
        this.currentImage.src = "";
        this.currentImage.alt = "";
    }
}


const album = new Album(document.getElementById('container'));