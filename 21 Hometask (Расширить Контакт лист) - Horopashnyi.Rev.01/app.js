// // @ts-check
'use strict';

const URL = 'http://fep-app.herokuapp.com/api/contacts';
const newContactForm = document.getElementById('newContactForm');
const contactsList = document.getElementById('contactsList');
const contactNameInput = document.getElementById('nameInput');
const contactSurnameInput = document.getElementById('surnameInput');
const contactPhoneInput = document.getElementById('phoneInput');
const contactEmailInput = document.getElementById('emailInput');
const contactTemplate = document.getElementById('contactTemplate').innerHTML;

let contacts = [];
init()
function init() {
    newContactForm.addEventListener('submit', newContactFormSubmit);
    contactsList.addEventListener('click', onContactsListClick);

    fetchContacts();
}

function fetchContacts() {
    return fetch(URL)
        .then((response) => response.json())
        .then(setContacts)
        .then(renderContacts);
}

function setContacts(data) {
    return contacts = data
}

function renderContacts(data) {
    contactsList.innerHTML = data.map((contact) => {
        return contactTemplate
            .replace('{{id}}', contact.id)
            .replace('{{name}}', contact.name)
            .replace('{{surname}}', contact.surname)
            .replace('{{phone}}', contact.phone)
            .replace('{{email}}', contact.email)
            .replace('{{class}}', contact.is_active ? 'active' : '')
    }).join('\n');
}

function newContactFormSubmit(e) {
    e.preventDefault();

    submitContact();
}

function onContactsListClick(event) {
    if (event.target.tagName === 'BUTTON') {
        removeContact(event.target.parentNode.parentNode.dataset.contactId)
            .then(fetchContacts);
    } else {
        toggleContactState(event.target.parentNode.dataset.contactId)
            .then(fetchContacts);
    }
}

function removeContact(id) {
    return fetch(URL + '/' + id, { method: 'DELETE' });
}

function toggleContactState(id) {
    const contact = contacts.find((c) => c.id == id);

    contact.is_active = !contact.is_active;
    return updateContact(contact);
};

function updateContact(contact) {
    return fetch(URL + '/' + contact.id, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    });
}

function submitContact() {
    const contact = {
        name: contactNameInput.value,
        surname: contactSurnameInput.value,
        phone: contactPhoneInput.value,
        email: contactEmailInput.value,
        is_active: true
    }
    addContact(contact)
        .then(fetchContacts);

    resetContactForm();
}

function addContact(contact) {
    return fetch(URL, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    });
}

function resetContactForm() {
    //newContactForm.reset();

    contactNameInput.value = '';
    contactSurnameInput.value = '';
    contactPhoneInput.value = '';
    emailInput.value = '';
}