const addContactBtn = document.getElementById('addContactBtn');
const contactsList = document.getElementById('contactsList');
const contactNameInput = document.getElementById('nameInput');
const contactPhoneInput = document.getElementById('phoneInput');
const contactAgeInput = document.getElementById('ageInput');


const delContactBtn = document.getElementById('delContactBtn');


const contactTemplate = document.getElementById('contactTemplate').innerHTML;


delContactBtn.addEventListener('click', ondelContactBtnClick)


addContactBtn.addEventListener('click', onAddContactBtnClick);
// addContact({ name: 'Alex', phone: '111' });

function ondelContactBtnClick() {
    deleteContact();
}

function deleteContact() {
    let deleteBtnTd = document.getElementById('delContactBtn');

    for (let i = 0; i < deleteBtnTd.length; i++) {
        deleteBtnTd.parentNode.remove();
    }
}

function onAddContactBtnClick() {
    submitContact();
}

function submitContact() {
    const contact = {
        name: contactNameInput.value,
        phone: contactPhoneInput.value,
        age: contactAgeInput.value,

        // delete: delContactBtn.value

    }
    addContact(contact);
    resetContactForm();
}

function addContact(contact) {
    const contactTr = document.createElement('tr');

    contactTr.innerHTML = contactTemplate
        .replace('{{name}}', contact.name)
        .replace('{{phone}}', contact.phone)
        .replace('{{age}}', contact.age || '-')


        .replace('{{delete}}', '<button id="delContactBtn">Click me to delete</button>')




    contactsList.appendChild(contactTr);

}

function resetContactForm() {
    contactNameInput.value = '';
    contactPhoneInput.value = '';
    contactAgeInput.value = '';
}
