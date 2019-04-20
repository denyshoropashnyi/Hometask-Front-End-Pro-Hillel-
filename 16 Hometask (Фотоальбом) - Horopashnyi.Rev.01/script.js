// //@ts-check
'use strict';

class Album {
    constructor() {

        this.init();
    }

    init() {
        this.createElements();
    }

    createElements() {
        const photobook = document.createElement('div');
        photobook.classList.add('photobook');
        document.body.insertBefore(photobook, document.body.firstChild);
        
        const currentPhoto = document.createElement('div');
        currentPhoto.classList.add('photobook__currentphoto');
        photobook.appendChild(currentPhoto);

        const photoListContainer = document.getElementById('container');
        photoListContainer.classList.add('photobook__photolist');
        photobook.appendChild(photoListContainer);
    }
}




const album = new Album(document.getElementById('container'));


