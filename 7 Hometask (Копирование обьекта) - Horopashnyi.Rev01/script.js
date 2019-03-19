'use strict';

const obj = {
    name: 'Alex', age: 33, adress: { country: 'UA', city: 'Dnipro' }
};


function copyObject(originObject) {
    let copyOfAnObject = Array.isArray(originObject) ? [] : {};

    for (let key in originObject) {
        if (originObject[key] != null && typeof (originObject[key]) == 'object') {
            copyOfAnObject[key] = copyObject(originObject[key])
        } else {
            copyOfAnObject[key] = originObject[key]
        }
    };
    return copyOfAnObject;
};


const copyObj = copyObject(obj);


console.log(obj, copyObj);

console.log(JSON.stringify(obj) === JSON.stringify(copyObj));