// @ts-check
'use strict';

class Users {
    constructor(element) {
        this.element = element;
        this.init();
    }

    init() {
        const basicUrl = 'https://jsonplaceholder.typicode.com/';
        const userUrl = 'users';
        request('get', (basicUrl + userUrl), (resp) => { this.renderContacts(resp) });
    }

    renderContacts(resp) {
        const userTemplate = document.getElementById('userTemplate');
        const renderList = userTemplate.innerHTML;
        let inputContacts = '';

        resp.map((item) => {
            inputContacts += renderList
                .replace('{{name}}', item.name)
                .replace('{{phone}}', item.phone)
                .replace('{{email}}', item.email)
        })
        this.element.children[1].innerHTML = inputContacts;
    }
};


/****** Function to make request *******
USAGE: 
request('get', 'http://exmaple.com', (resp)=> {console.log(resp)} );
*/

var request = function () {
    var xhr = new XMLHttpRequest();
    return function (method, url, callback) {
        xhr.onload = function () {
            callback(JSON.parse(xhr.responseText));
        };
        xhr.open(method, url, true);
        xhr.send();
    };
}();


const usersList = new Users(
    document.getElementById('usersListTable')
);