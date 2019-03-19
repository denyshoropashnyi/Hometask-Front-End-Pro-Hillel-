'use strict';

const obj = {
    name: 'Alex', age: 33, adress: {
        country: 'UA', city: 'Dnipro'
    }
};


function copyObject(originObject) {
    let cloneObject = {};

    for (let key in originObject) {
        if (originObject[key] != null && typeof (originObject[key]) == 'object') {
            cloneObject[key] = copyObject(originObject[key]);
        } else {
            cloneObject[key] = originObject[key];
        };
    };

    return cloneObject;
};


const copyObj = copyObject(obj);


console.log(obj, copyObj);

console.log(JSON.stringify(obj) === JSON.stringify(copyObj));