'use strict';

const blackboardForm = $('#blackboardForm');
const blackboardTable = $('#blackboardTable');
const blackboardTableBody = $('#blackboardTableBody');
const createStickerButton = $('#createStickerButton');
const modalStickersTemplate = $('#modalStickersTemplate').html();
const modalStickersTemplateTitle = $('#modalStickersTemplateTitle');
const modalStickersTemplateTextarea = $('#modalStickersTemplateTextarea');
let stickersContent = $('#stickersContent');
const wrap = $('#wrap');

$(document).ready(function () {

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
        
        el.append(modalStickersTemplate);
        $("#modalStickersTemplateTitle").dialog();
        $("#modalStickersTemplateTextarea").dialog();
    }

    function onCancelStickerButtonClick(el) {
        el = blackboardTableBody;
        el.children.remove();
    }

    function onSaveStickerButtonClick() {
        getStickerOffset();
        alert('save');
        recordToLocalStorage();
    };

    function getStickerOffset(coords) {
        coords = $("#blackboardTableBody").offset();
        alert("Top: " + coords.top + " Left: " + coords.left);
    }
})




















// function recordToLocalStorage() {

// }

// // function blackboardStickerFormSubmit(sticker) {
// //     sticker = {
// //         titleInput: titleInput.value,
// //         descriptionTextarea: descriptionTextarea.value
// //     }
// //     document.body.innerHTML = "";
// //     blackboardTableHead.innerText('stickerTitleInput');
// //     document.append(blackboardTableBody)
// // }

// // function submitSticker() {
// //     modal = document.createElement('div');
// //     modal.className = 'modal';

// // //     modal.innerHTML = modalStickersTemplate;
// // // }

// // // }) }*//}
