'use strict';

const obj = {
    name: 'Alex',
    age: 33,
    adress:
    {
        country: 'UA',
        city: 'Dnipro'
    }
};


function copyObject(originObject) {
    let copy = Array.isArray(originObject) ? [] : {};

    for (let key in originObject) {
        if (originObject[key] != null && typeof (originObject[key]) == 'object') {
            copy[key] = copyObject(originObject[key])
        } else {
            copy[key] = originObject[key]
        }
    };
    return copy;
};


const copyObj = copyObject(obj);


console.log(obj, copyObj);

console.log(JSON.stringify(obj) === JSON.stringify(copyObj));