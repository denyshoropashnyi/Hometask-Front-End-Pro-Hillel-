const URL = 'http://fep-app.herokuapp.com/api/contacts';
const contactForm = document.getElementById('contactForm');
const contactsList = document.getElementById('contactsList');
const contactsListFooter = document.getElementById('contactsListFooter');
const contactFormRow = document.getElementById('contactFormRow');
const contactIdInput = document.getElementById('idInput');
const contactNameInput = document.getElementById('nameInput');
const contactPhoneInput = document.getElementById('phoneInput');
const contactEmailInput = document.getElementById('emailInput');
const contactTemplate = document.getElementById('contactTemplate').innerHTML;
const modalTemplate = document.getElementById('modalTemplate').innerHTML;

let modal;
let contacts = [];
init()
function init(){
    contactForm.addEventListener('submit', contactFormSubmit);
    contactsList.addEventListener('click', onContactsListClick);

    fetchContacts();
}

function fetchContacts(){
    return fetch(URL)
            .then((response) => response.json())
            .then(setContacts)
            .then(renderContacts);
}

function setContacts(data){
    return contacts = data
}

function renderContacts(data){
    contactsList.innerHTML = data.map((contact) => {
        return contactTemplate
            .replace('{{id}}', contact.id)
            .replace('{{name}}', contact.name)
            .replace('{{phone}}', contact.phone)
            .replace('{{email}}', contact.email)
            .replace('{{class}}', contact.is_active? 'active': '')
    }).join('\n');
}

function contactFormSubmit(e){
    e.preventDefault();

    submitContact();
}

function onContactsListClick(event){
    if (event.target.tagName === 'BUTTON'){
        switch(event.target.dataset.type){
            case 'edit': editContact(event.target.parentNode.parentNode);
                break;
            case 'delete': removeContact(event.target.parentNode.parentNode.dataset.contactId)
                            .then(fetchContacts); 
                break;
        }
    } else {
        showContactDetails(event.target.parentNode.dataset.contactId);
    }
}

function editContact(el){
    const id = el.dataset.id;
    const contact = contacts.find(c => c.ic === id);

    contactIdInput.value = contact.id;
    contactNameInput.value = contact.name;
    contactPhoneInput.value = contact.phone;
    emailInput.value = contact.email;

    el.hidden = true;
    contactsList.insertBefore(contactFormRow, el);
}

function removeContact(id){
    return fetch(URL + '/' + id, {method: 'DELETE'});
}

function fetchContact(id){
    return fetch(URL + '/' + id);
}

function showContactDetails(id){
    if (!id){ return; }

    fetchContact(id)
        .then(resp => resp.json())
        .then(openModal);
};

function openModal(contact){
    modal = document.createElement('div');
    modal.className = 'modal';

    modal.innerHTML = modalTemplate
            .replace('{{id}}', contact.id)
            .replace('{{name}}', contact.name)
            .replace('{{phone}}', contact.phone)
            .replace('{{email}}', contact.email)
            .replace('{{isActive}}', contact.is_active);

    document.body.append(modal);
    document.addEventListener('click', closeModal);
}

function closeModal(){
    modal.remove();

    document.removeEventListener('click', closeModal);
}

function updateContact(contact){
    return fetch(URL + '/' + contact.id, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    });
}

function submitContact(){
    const contact = {
        name: contactNameInput.value,
        phone: contactPhoneInput.value,
        email: contactEmailInput.value,
        is_active: true
    }

    let savePromise;

    if (contactIdInput.value){
        contact.id = contactIdInput.value;
        savePromise = updateContact(contact);
    } else {
        savePromise = addContact(contact);
    }

    savePromise
        .then(fetchContacts);

    resetContactForm();
}

function addContact(contact){
    return fetch(URL, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    });
}

function resetContactForm(){
    contactsListFooter.append(contactFormRow);
    contactForm.reset();

    // contactIdInput.value = '';
    // contactNameInput.value = '';
    // contactPhoneInput.value = '';
    // emailInput.value = '';
}
