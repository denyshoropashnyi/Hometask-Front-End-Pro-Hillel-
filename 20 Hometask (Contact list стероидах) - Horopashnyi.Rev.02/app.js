const USER_LIST_URL = 'http://fep-app.herokuapp.com/api/contacts';

const USER_LIST_TABLE = document.getElementById('usersListTable');
const USER_LIST_TABLE_BODY = USER_LIST_TABLE.getElementsByTagName('tbody')[0];
const USER_ROW_TEMPLATE = document.getElementById('userTemplate').innerHTML;

const USER_NAME = document.getElementById('name');
const USER_SURNAME = document.getElementById('surname');
const USER_TELEPHONE_NUMBER = document.getElementById('phone');
const USER_EMAIL = document.getElementById('email');
const SUBMIT = document.getElementById('submit');

let users = [];

init();


function init() {
    SUBMIT.addEventListener('click', onBodyClick)

    fetchUsers();
};

function fetchUsers() {
    return fetch(USER_LIST_URL)
        .then((resp) => resp.json())
        .then(addUsers)
        .then(renderUsers)
}

function addUsers(data) {
    users = data;

    return data;
}

function renderUsers(data) {
    console.log(data)
    USER_LIST_TABLE_BODY.innerHTML = data.map((user) => {
        return USER_ROW_TEMPLATE
            .replace('{{id}}', user.id)
            .replace('{{name}}', user.name)
            .replace('{{surname}}', user.surname)
            .replace('{{phone}}', user.phone)
            .replace('{{email}}', user.email)
    }).join('\n');
}

function onBodyClick() {
    submitNewUser();
}

function submitNewUser() {
    const newUser = { name: USER_NAME.value, surname: USER_SURNAME.value, phone: USER_TELEPHONE_NUMBER.value, email: USER_EMAIL.value }

    addUser(newUser);
    fetchUsers();

    resetForm();
}

function addUser(newUser) {
    return fetch(USER_LIST_URL, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });
}

function resetForm() {
    const addNewUser = document.getElementById('forms');
    addNewUser.reset();
}