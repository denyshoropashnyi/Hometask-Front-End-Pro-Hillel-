// // @ts-check
'use strict';

const USER_LIST_URL = 'http://fep-app.herokuapp.com/api/contacts';
const USER_ROW_TEMPLATE = document.getElementById('userTemplate').innerHTML;

const userListTable = document.getElementById('usersListTable');
const userListTableBody = userListTable.getElementsByTagName('tbody')[0];
const userSubmit = document.getElementById('userSubmit');
const userName = document.getElementById('nameSubmit');
const userSurname = document.getElementById('surnameSubmit');
const userTelephoneNumber = document.getElementById('phoneSubmit');
const userEmail = document.getElementById('emailSubmit');

let users = [];

init();

function init() {
    userSubmit.addEventListener('click', onUserSubmit);
    userListTableBody.addEventListener('click', onUserClick);
    fetchUsers();
}

function fetchUsers() {
    return fetch(USER_LIST_URL)
        .then((resp) => resp.json())
        .then(addUsers)
        .then(renderUsers)
}

function addUsers(data) {
    return users = data;
}

function renderUsers(data) {
    userListTableBody.innerHTML = data.map((user) => {
        return USER_ROW_TEMPLATE
            .replace('{{name}}', user.name)
            .replace('{{surname}}', user.surname)
            .replace('{{phone}}', user.phone)
            .replace('{{email}}', user.email)
            .replace('{{id}}', user.id)
            .replace('{{class}}', user.isDone ? 'done' : '')
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
        email: userEmail.value,
        isDone: false
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
    if (event.target.parentNode.classList.contains('user-item')) {
        toggleUserState(event.target.parentNode)
            .then(fetchUsers);
    }
}

function toggleUserState(el) {
    const id = el.dataset.userId;
    const contact = users.find((el) => { return el.id == id });

    contact.isDone = !contact.isDone;
    console.log(id, contact);

    return fetch(USER_LIST_URL + '/' + contact.id, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)

    })
}


function resetForm() {
            const addNewUser = document.getElementById('addNewUser');
            addNewUser.reset();
        }