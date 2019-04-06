'use strict';

function Student(name, marks) {
    this.name = name;
    this.marks = marks;
    this.averageMark = averageMark;
    this.worksDone = worksDone;
    this.addMark = addMark;
};


function averageMark() {
    const sum = this.marks.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
    );
    return (sum / this.marks.length);
};

function worksDone() {
    return this.marks.reduce(function (accumulator, currentValue) {
        if (currentValue !== 0) { accumulator++ };
        return accumulator;
    }, 0);
};

function addMark(mark) {
    return this.marks.push(mark);
};


function allAverageMark() {
    const sum = students.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
    );
    return (sum / students.length);
};

function percentComplete() {
    const sumAllWorksDone = students.reduce((accumulator, currentValue) => accumulator + currentValue.worksDone(), 0);

    const totalAmountWorks = students.reduce((accumulator, currentValue) => accumulator + currentValue.marks.length, 0);

    return (sumAllWorksDone / totalAmountWorks) * 100 + ' percent';
};


const students = [
    new Student('Student 1', [10, 9, 8, 0, 10]), // имя, оценки
    new Student('Student 12', [10, 0, 8, 0, 3, 4])
];