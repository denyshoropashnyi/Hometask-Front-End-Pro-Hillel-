const contactsList = document.getElementById('contactsList');
const contactNameInput = document.getElementById('nameInput');
const contactPhoneInput = document.getElementById('phoneInput');
const contactAgeInput = document.getElementById('ageInput');

const delContactBtn = document.getElementsByTagName('button');
const addContactBtn = document.getElementById('addContactBtn');

const contactTemplate = document.getElementById('contactTemplate').innerHTML;


contactsList.addEventListener('click', onDeleleteContactClick);
addContactBtn.addEventListener('click', onAddContactBtnClick);


addContact({ name: 'Alex', phone: '111' });


function onDeleleteContactClick(element) {
    if (element.target.tagName === 'BUTTON') {
        element.target.parentNode.parentNode.remove();
    };
};

function onAddContactBtnClick() {
    submitContact();
};

function submitContact() {
    const contact = {
        name: contactNameInput.value,
        phone: contactPhoneInput.value,
        age: contactAgeInput.value,
    };

    addContact(contact);

    resetContactForm();
};

function addContact(contact) {
    const contactTr = document.createElement('tr');

    contactTr.innerHTML = contactTemplate
        .replace('{{name}}', contact.name)
        .replace('{{phone}}', contact.phone)
        .replace('{{age}}', contact.age || '-')
        .replace('{{delete}}', '<button сlass="delContactBtn">Click me to delete</button>');

    contactsList.appendChild(contactTr);
};

function resetContactForm() {
    contactNameInput.value = '';
    contactPhoneInput.value = '';
    contactAgeInput.value = '';
};