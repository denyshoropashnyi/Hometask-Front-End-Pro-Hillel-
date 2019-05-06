// @ts-check
'use strict';

function request(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}
class Users {
    static BASE_URL = 'https://jsonplaceholder.typicode.com';
    static USERS_PATH = '/users';
    static POSTS_PATH = '/posts';
    static ALBUMS_PATH = '/albums'
    static USER_ROW_TEMPLATE = document.getElementById('userTemplate').innerHTML;

    constructor(container) {
        this.container = container;
        this.init();
    }

    init() {
        this.onBodyClick = this.onBodyClick.bind(this);

        this.tbody = this.container.getElementsByTagName('tbody')[0];
        this.userPosts = document.getElementById('userPosts');
        this.userAlbums = document.getElementById('userAlbums');

        this.tbody.addEventListener('click', this.onBodyClick)
        this.fetchUsers();
    }

    onBodyClick(e) {
        const id = e.target.parentNode.dataset.userId;

        this.fetchUserItems(id);
    }

    fetchUsers() {
        return request('get', Users.BASE_URL + Users.USERS_PATH)
            .then((data) => this.renderUsers(data));
    }

    renderUsers(usersList) {
        this.tbody.innerHTML = usersList.map((user) => {
            return Users.USER_ROW_TEMPLATE
                .replace('{{id}}', user.id)
                .replace('{{name}}', user.name)
                .replace('{{phone}}', user.phone)
                .replace('{{email}}', user.email)
        }).join('\n');
    }

    fetchUserItems(userId) {
        this.fetchUserPosts(userId)
            .then(() => this.fetchUserAlbums(userId))
    }

    fetchUserPosts(userId) {
        const url = Users.BASE_URL + Users.POSTS_PATH + '?userId=' + userId;
        return request('get', url)
            .then((data) => this.renderUserPosts(data));
    }

    renderUserPosts(posts) {
        this.userPosts.innerHTML = this.prepareList(posts);
    }

    fetchUserAlbums(userId) {
        const url = Users.BASE_URL + Users.ALBUMS_PATH + '?userId=' + userId;
        return request('get', url)
            .then((data) => this.renderUserAlbums(data));
    }

    renderUserAlbums(albums) {
        this.userAlbums.innerHTML = this.prepareList(albums);
    }

    prepareList(data) {
        return data.map((el) => `<li>${el.title}</li>`).join('\n');
    }
}

const usersList = new Users(
    document.getElementById('usersListTable')
)