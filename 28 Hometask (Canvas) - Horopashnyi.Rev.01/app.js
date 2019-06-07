'use strict';

const myField = document.getElementById('myField');
const ctx = myField.getContext('2d');

const ballRadiusRange = document.getElementById('ballRange');
const ballColorPicker = document.getElementById('ballColoricker');

let ballRadius = ballRadiusRange.value;
let ballColor = ballColorPicker.value;

let x = 0;
let y = 0;


init();


function init() {
    // window.addEventListener("load", drawField);
    onInputChange();
    drawField();
    // onBoardEvent();
    animateX();
    animateY();
    bindEventListeners();
}


function drawField() {
    if (myField.getContext) {
        ctx.fillStyle = "#45E31C";
        ctx.fillRect(0, 0, myField.width, myField.height);

        // let circle = new Path2D();
        // ctx.beginPath();
        // circle.arc(10, 10, ballRadius, 0, 2 * Math.PI);
        // ctx.fillStyle = ballColor;
        // ctx.fill(circle);
        // ctx.strokeStyle = "gold";
        // ctx.stroke(circle);
    } else {
        alert('canvas-unsupported code here');
    }
}


function onInputChange() {
    ballRadiusRange.addEventListener('change', changeBallRadius);
    ballColorPicker.addEventListener('change', changeBallColor);
}

function changeBallRadius() {
    ballRadius = ballRadiusRange.value;
    drawField();
}

function changeBallColor() {
    ballColor = ballColorPicker.value;
    drawField();
}

function animateX() {
    x += 1;
    ctx.clearRect(0, 0, myField.width, myField.height);
    let circle = new Path2D();
    ctx.beginPath();
    circle.arc(x, 10, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = ballColor;
    ctx.fill(circle);
    ctx.strokeStyle = "gold";
    ctx.stroke(circle);
    ctx.closePath();
}

function animateY() {
    y += 1;
    ctx.clearRect(0, 0, myField.width, myField.height);
    let circle = new Path2D();
    ctx.beginPath();
    circle.arc(10, y, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = ballColor;
    ctx.fill(circle);
    ctx.strokeStyle = "gold";
    ctx.stroke(circle);
    ctx.closePath();
}

function bindEventListeners() {
    document.body.addEventListener('keyup', (e) => onBoardEvent(e));
}

// function onBoardEvent(event) {
//     console.dir(event);
//     switch (KeyboardEvent.code) {
//         case 'ArrowUp':
//             animateY;
//             setInterval(animateY, 100);
//             break;
//         case 'ArrowDown':
//             animateY;
//             break;
//         case 'ArrowLeft':
//             animateX;
//             break;
//         case 'ArrowRight':
//             animateX;
//             break;
//     }
// }

setInterval(animateX, 100);