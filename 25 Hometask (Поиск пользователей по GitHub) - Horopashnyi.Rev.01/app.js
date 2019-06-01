'use strict';

// const URL = 'https://api.github.com/search/users?q=';
const URL = 'https://api.github.com/users/';


let test = userName;
console.log(test);

$("#userName").autocomplete({
    source: function () {
        $.ajax({
            url: URL + request.term,
            type: "GET"
        }).done((data) => {
            response(getListLogins(data));
        });
    },
    minLength: 2,
})


function getListLogins(data) {
    return data.items.map((item) => item.login)
}