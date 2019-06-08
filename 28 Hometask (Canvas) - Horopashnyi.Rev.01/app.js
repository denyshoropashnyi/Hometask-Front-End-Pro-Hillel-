'use strict';

const myField = document.getElementById('myField');
const ctx = myField.getContext('2d');

const ballRadiusRange = document.getElementById('ballRange');
const ballColorPicker = document.getElementById('ballColoricker');

let ballRadius = ballRadiusRange.value;
let ballColor = ballColorPicker.value;

let x = 50;
let y = 50;


init();


function init() {
    // window.addEventListener("load", drawField);
    onInputChange();
    drawField();
    animateXLeft();
    animateXRight();
    animateY();
    bindEventListeners();
    // onBoardEvent();
}


function drawField() {
    if (myField.getContext) {
        ctx.fillStyle = "#45E31C";
        ctx.fillRect(0, 0, myField.width, myField.height);

        let circle = new Path2D();
        ctx.beginPath();
        circle.arc(10, 10, ballRadius, 0, 2 * Math.PI);
        ctx.fillStyle = ballColor;
        ctx.fill(circle);
        ctx.strokeStyle = "gold";
        ctx.stroke(circle);
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


function animateXLeft() {
    x -= 10;
    ctx.clearRect(0, 0, myField.width, myField.height);
    let circle = new Path2D();
    ctx.beginPath();
    circle.arc(x, y, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = ballColor;
    ctx.fill(circle);
    ctx.strokeStyle = "gold";
    ctx.stroke(circle);
    ctx.closePath();
}

function animateXRight() {
    x += 10;
    ctx.clearRect(0, 0, myField.width, myField.height);
    let circle = new Path2D();
    ctx.save();
    ctx.beginPath();
    circle.arc(x, y, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = ballColor;
    ctx.fill(circle);
    ctx.strokeStyle = "gold";
    ctx.stroke(circle);
    ctx.closePath();
    ctx.restore();
}

function animateY() {
    y += 10;
    ctx.clearRect(0, 0, myField.width, myField.height);
    let circle = new Path2D();
    ctx.beginPath();
    circle.arc(x, y, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = ballColor;
    ctx.fill(circle);
    ctx.strokeStyle = "gold";
    ctx.stroke(circle);
    ctx.closePath();
}

function bindEventListeners() {
    document.body.addEventListener('keyup', onBoardEvent);
}

function onBoardEvent(event) {
    console.log(event.code);
    switch (event.code) {
        case 'ArrowUp':
            animateY(y += 10);
            setInterval(animateY, 1000);
            break;
        case 'ArrowDown':
            animateY(y -= 10);
            setInterval(animateY, 1000);
            break;
        case 'ArrowLeft':
            animateXLeft();
            setInterval(animateXLeft, 1000);
            break;
        case 'ArrowRight':
            animateXRight();
            setInterval(animateXRight, 1000);
            break;
    }
}

// setInterval(animateXRight, 100);