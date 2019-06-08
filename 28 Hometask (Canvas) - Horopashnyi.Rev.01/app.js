'use strict';

const myField = document.getElementById('myField');
const test = document.getElementById('test');
const ctx = myField.getContext('2d');

const ballRadiusRange = document.getElementById('ballRange');
const ballColorPicker = document.getElementById('ballColoricker');

let ballRadius = ballRadiusRange.value;
let ballColor = ballColorPicker.value;

let x = 22;
let y = 250;


init();


function init() {
    onInputChange();
    drawBall();
    animateAlongAxisX();
    bindEventListeners();
}


function drawField() {
    if (myField.getContext) {
        ctx.fillRect(0, 0, myField.width, myField.height);
    } else {
        alert('canvas-unsupported code here');
    }
}

function drawBall() {
    if (myField.getContext) {
        ctx.clearRect(0, 0, myField.width, myField.height);
        let circle = new Path2D();
        ctx.beginPath();
        circle.arc(x, y, ballRadius, 0, 2 * Math.PI);
        ctx.fillStyle = ballColor;
        ctx.fill(circle);
        ctx.strokeStyle = "#7729BA";
        ctx.lineWidth = "2";
        ctx.stroke(circle);
        ctx.closePath();
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
    drawBall();
}

function changeBallColor() {
    ballColor = ballColorPicker.value;
    drawBall();
}


function bindEventListeners() {
    document.body.addEventListener('keyup', (e) => onBoardEvent(e));
}

function onBoardEvent(event) {
    switch (event.code) {
        case 'ArrowUp':
            reverseAnimateAlongAxisY();
            break;
        case 'ArrowDown':
            animateAlongAxisY();
            break;
        case 'ArrowLeft':
            reverseAnimateAlongAxisX();
            break;
        case 'ArrowRight':
            animateAlongAxisX();
            break;
    }
}

function reverseAnimateAlongAxisY() {
    setTimeout(function () {
        if ((y - 1 - ballRadius) > 0) {
            y -= 1,
                drawBall(),
                reverseAnimateAlongAxisY();
        } else {
            animateAlongAxisY();
        }
    }, 10);
};

function animateAlongAxisY() {
    setTimeout(function () {
        if (((y + ballRadius / 2)) < 500) {
            y += 1,
                drawBall(),
                animateAlongAxisY();
        } else {
            reverseAnimateAlongAxisY();
        }
    }, 10);
};

function reverseAnimateAlongAxisX() {
    setTimeout(function () {
        if ((x - 1 - ballRadius) > 0) {
            x -= 1,
                drawBall(),
                reverseAnimateAlongAxisX();
        } else {
            animateAlongAxisX();
        }
    }, 10);
};

function animateAlongAxisX() {
    setTimeout(function () {
        if ((x + 1 + ballRadius / 2) < 500) {
            x += 1,
                drawBall(),
                animateAlongAxisX();
        } else {
            reverseAnimateAlongAxisX();
        }
    }, 10);
};