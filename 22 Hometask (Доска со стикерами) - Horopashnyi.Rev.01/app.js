'use strict';

const blackboardForm = document.getElementById('blackboardForm');

const blackboardTableBody = document.getElementById('blackboardTableBody');

const createStickerButton = document.getElementById('createStickerButton');

const modalStickersTemplate = document.getElementById('modalStickersTemplate').innerHTML;
const modalStickersTemplateTitle = document.getElementById('modalStickersTemplateTitle');
const modalStickersTemplateTextarea = document.getElementById('modalStickersTemplateTextarea');


init();

function init() {
    document.addEventListener('click', onDocumentClick);
};

function onDocumentClick(event) {
    if (event.target.classList.contains('createBtn')) {
        onCreateStickerButtonClick()
    } else if (event.target.classList.contains('cancelBtn')) {
        onCancelStickerButtonClick()
    } else if (event.target.classList.contains('saveBtn')) {
        onSaveStickerButtonClick()
    }
}

function onCreateStickerButtonClick() {
    showModalStickersTemplate();
}

function showModalStickersTemplate(el) {
    el = blackboardTableBody;
    el.classList.add('pop');
    el.innerHTML = modalStickersTemplate;
    $("#modalStickersTemplateTitle").dialog();

}

function onCancelStickerButtonClick(el) {
    el = blackboardTableBody;
    el.remove();
}

function onSaveStickerButtonClick() {
    getStickerOffset();
    alert('save')
};

function getStickerOffset (coords) {
    coords = $("#modalStickersTemplateTitle").offset();
    alert("Top: " + coords.top + " Left: " + coords.left);
    console.log(coords)
}




// function blackboardStickerFormSubmit() {
//   // const sticker = {
//   //   titleInput: titleInput.value,
//   //   descriptionTextarea: descriptionTextarea.value
//   // }
//   // document.body.innerHTML = "";
//   // blackboardTableHead.innerText('stickerTitleInput');
//   document.append(blackboardTableBody)


// function submitSticker() {
//   modal = document.createElement('div');
//   modal.className = 'modal';

//   modal.innerHTML = modalStickersTemplate;



// function openModal() {
//   modal = document.createElement('div');
//   modal.classList.add('modal');

//   modal.innerHTML = modalStickersTemplate
//   .replace('{{}}')

// }







// $(function () {
//   $("#dialog").dialog();
// });



// const modalTemplate = $('#modalTemplate');


// $("div").click(function () {
//   $("div").fadeOut("slow")
// });

// $("div").click(function () {
//   $("div").animate({
//     opacity: 1.25,
//     left: "+=50",
//     height: "toggle"
//   }, 5000, function () {
//     $("div").text('Hello');
//     $("div").height(300 + 'px');
//   });
// });

//   $( "div" ).text('Hello')

// $(function () {
//   $(".dialog").dialog();
// });