//@ts-check

'use strict';

const galleryContainer = document.createElement('div');
const gallery = document.getElementById('container');

const btnPrevImg = document.createElement('button');
const btnNextImg = document.createElement('button');

const allImages = gallery.children;


galleryContainer.setAttribute('id', 'gallery-container');
document.body.insertBefore(galleryContainer, document.body.firstChild);

galleryContainer.appendChild(gallery);

btnPrevImg.setAttribute('id', 'btn-prev-img');
btnPrevImg.innerHTML = ('&#11164;');
galleryContainer.prepend(btnPrevImg);

btnNextImg.setAttribute('id', 'btn-next-img');
btnNextImg.innerHTML = ('&#11166;');
galleryContainer.appendChild(btnNextImg);


class Gallery {
    constructor(el, { delay }) {
        this.el = el;
        this.delay = delay;

        this.init();
    }

    init() {
    };

    showNextImg() {
    };

    showPrevImg() {
    }

    addEvents() {
        btnNextImg.addEventListener('click', showNextImg);
        btnPrevImg.addEventListener('click', showPrevImg);
    }

};



btnNextImg.addEventListener('click', showNextImg);

function showNextImg() {
    gallery.style.transform = "translateX(-444px)";
    // for (i = 0; i < allImages.length; i++) {
    //     gallery.classList.add('nextImg');
    // };
    return showNextImg()
};

btnPrevImg.addEventListener('click', showPrevImg);

function showPrevImg(i) {
    gallery.style.transform = "translateX(444px)";
    // for (i = 0; i < allImages.length; i++) {
    //     allImages[i].classList.add('prevImg');
    // };
};


console.dir(allImages);
console.log(allImages);
