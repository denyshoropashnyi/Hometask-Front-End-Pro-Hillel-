// // @ts-check
'use strict';

class Users {

};

const usersList = new Users(
    document.getElementById('usersListTable')
);
const basicUrl = 'https://jsonplaceholder.typicode.com/';
const userUrl = 'users';



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

request('get', (basicUrl + userUrl), (resp)=> {console.log(resp)});