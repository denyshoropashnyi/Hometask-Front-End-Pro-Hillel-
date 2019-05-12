// // @ts-check
'use strict';

const USER_LIST_URL = 'http://fep-app.herokuapp.com/api/contacts';
const USER_ROW_TEMPLATE = document.getElementById('userTemplate').innerHTML;

const userListTable = document.getElementById('usersListTable');
const userListTableBody = userListTable.getElementsByTagName('tbody')[0];
const userSubmit = document.getElementById('submit');
const userName = document.getElementById('name');
const userSurname = document.getElementById('surname');
const userTelephoneNumber = document.getElementById('phone');
const userEmail = document.getElementById('email');

let users = [];

init();

function init() {
    userSubmit.addEventListener('click', onUserSubmit);

    fetchUsers();
}

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
    console.log(data);

    userListTableBody.innerHTML = data.map((user) => {
        return USER_ROW_TEMPLATE
            .replace('{{name}}', user.name)
            .replace('{{surname}}', user.surname)
            .replace('{{phone}}', user.phone)
            .replace('{{email}}', user.email)
    }).join('\n');
}

function onUserSubmit(event) {
    event.preventDefault();

    userAdd();
}

function userAdd() {
    const newUser = {
        name: userName.value,
        surname: userSurname.value,
        phone: userTelephoneNumber.value,
        email: userEmail.value
    }

    addUser(newUser).then(fetchUsers);

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

function onUserClick(event) {
    console.log(event.target)
    if (event.target.classList.contains('user-item')) {
        toggleUserState(event.target)
            .then(fetchUsers);
    }
}

function resetForm() {
    const addNewUser = document.getElementById('addNewUser');
    addNewUser.reset();
}