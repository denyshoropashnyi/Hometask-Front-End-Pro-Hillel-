const addContactBtn = document.getElementById('addContactBtn');
const contactsList = document.getElementById('contactsList');
const contactNameInput = document.getElementById('nameInput');
const contactPhoneInput = document.getElementById('phoneInput');
const contactAgeInput = document.getElementById('ageInput');
const contactTemplate = document.getElementById('contactTemplate').innerHTML;

addContactBtn.addEventListener('click', onAddContactBtnClick);
addContact({ name: 'Alex', phone: '111' });

function onAddContactBtnClick() {
    submitContact();
}

function submitContact() {
    const contact = {
        name: contactNameInput.value,
        phone: contactPhoneInput.value,
        age: contactAgeInput.value,
    }
    addContact(contact);
    resetContactForm();
}

function addContact(contact) {
    const contactTr = document.createElement('tr');

    contactTr.innerHTML = contactTemplate
        .replace('{{name}}', contact.name)
        .replace('{{phone}}', contact.phone)
        .replace('{{age}}', contact.age || '-');

    contactsList.appendChild(contactTr);

}

function resetContactForm() {
    contactNameInput.value = '';
    contactPhoneInput.value = '';
    contactAgeInput.value = '';
}
