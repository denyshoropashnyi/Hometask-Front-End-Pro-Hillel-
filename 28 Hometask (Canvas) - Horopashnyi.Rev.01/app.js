'use strict';

const myField = document.getElementById('myField');
const ctx = myField.getContext('2d');

const ballRadiusRange = document.getElementById('ballRange');
const ballColorPicker = document.getElementById('ballColoricker');

let ballRadius = ballRadiusRange.value;
let ballColor = ballColorPicker.value;

let x = 20;
let y = 20;


init();


function init() {
    // window.addEventListener("load", drawField); // nevermind - delete
    onInputChange();
    // onBoardEvent(); // nevermind - delete
    animateXLeft();
    animateXRight();
    animateYTop();
    animateYDown();
    bindEventListeners();
}


function drawField() {
    if (myField.getContext) {
        ctx.fillStyle = "#45E31C";
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
        ctx.strokeStyle = "gold";
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


function animateXLeft() {
    x -= 10;
    drawBall();
}

function animateXRight() {
    x += 10;
    drawBall();
}

function animateYTop() {
    y -= 10;
    drawBall();
}

function animateYDown() {
    y += 10;
    drawBall();
}


function bindEventListeners() {
    document.body.addEventListener('keyup', (e) => onBoardEvent(e));
}

function onBoardEvent(event) {
    switch (event.code) {
        case 'ArrowUp':
            setInterval(animateYTop, 1000);
            break;
        case 'ArrowDown':
            setInterval(animateYDown, 1000);
            break;
        case 'ArrowLeft':
            setInterval(animateXLeft, 1000);
            break;
        case 'ArrowRight':
            setInterval(animateXRight, 1000);
            break;
    }
}

let timerID = setInterval(animateYDown, 1000);











// 'use strict';

// const myField = document.getElementById('myField');
// const ctx = myField.getContext('2d');

// const ballRadiusRange = document.getElementById('ballRange');
// const ballColorPicker = document.getElementById('ballColoricker');

// let ballRadius = ballRadiusRange.value;
// let ballColor = ballColorPicker.value;

// let x = 5;
// let y = 100;


// init();


// function init() {
//     // window.addEventListener("load", drawField);
//     onInputChange();
//     // drawField();
//     // onBoardEvent();
//     animateXLeft();
//     animateXRight();
//     animateYTop();
//     animateYDown();
//     bindEventListeners();
// }


// function drawField() {
//     if (myField.getContext) {
//         ctx.fillStyle = "#45E31C";
//         ctx.fillRect(0, 0, myField.width, myField.height);

//         let circle = new Path2D();
//         ctx.beginPath();
//         circle.arc(10, 10, ballRadius, 0, 2 * Math.PI);
//         ctx.fillStyle = ballColor;
//         ctx.fill(circle);
//         ctx.strokeStyle = "gold";
//         ctx.stroke(circle);
//     } else {
//         alert('canvas-unsupported code here');
//     }
// }


// function onInputChange() {
//     ballRadiusRange.addEventListener('change', changeBallRadius);
//     ballColorPicker.addEventListener('change', changeBallColor);
// }

// function changeBallRadius() {
//     ballRadius = ballRadiusRange.value;
//     drawField();
// }

// function changeBallColor() {
//     ballColor = ballColorPicker.value;
//     drawField();
// }

// function animateXLeft() {
//     x -= 10;
//     drawCircle();

//     // ctx.clearRect(0, 0, myField.width, myField.height);
//     // let circle = new Path2D();
//     // ctx.beginPath();
//     // circle.arc(x, y, ballRadius, 0, 2 * Math.PI);
//     // ctx.fillStyle = ballColor;
//     // ctx.fill(circle);
//     // ctx.strokeStyle = "gold";
//     // ctx.stroke(circle);
// }

// function animateXRight() {
//     x += 10;
//     drawCircle();
//     // let circle = new Path2D();
//     // ctx.beginPath();
//     // circle.arc(x, y, ballRadius, 0, 2 * Math.PI);
//     // ctx.fillStyle = ballColor;
//     // ctx.fill(circle);
//     // ctx.strokeStyle = "gold";
//     // ctx.stroke(circle);
//     // ctx.closePath();
// }

// function drawCircle() {
//     let circle = new Path2D();
//     ctx.clearRect(0, 0, myField.width, myField.height);

//     ctx.beginPath();
//     circle.arc(x, y, ballRadius, 0, 2 * Math.PI);
//     ctx.fillStyle = ballColor;
//     ctx.fill(circle);
//     ctx.strokeStyle = "gold";
//     ctx.stroke(circle);
//     ctx.closePath();
// }

// function animateYTop() {
//     y -= 10;
//     drawCircle();
//     // ctx.clearRect(0, 0, myField.width, myField.height);
//     // let circle = new Path2D();
//     // ctx.beginPath();
//     // circle.arc(10, y, ballRadius, 0, 2 * Math.PI);
//     // ctx.fillStyle = ballColor;
//     // ctx.fill(circle);
//     // ctx.strokeStyle = "gold";
//     // ctx.stroke(circle);
//     // ctx.closePath();
// }

// function animateYDown() {
//     y += 10;
//     drawCircle();
//     // ctx.clearRect(0, 0, myField.width, myField.height);
//     // let circle = new Path2D();
//     // ctx.beginPath();
//     // circle.arc(10, y, ballRadius, 0, 2 * Math.PI);
//     // ctx.fillStyle = ballColor;
//     // ctx.fill(circle);
//     // ctx.strokeStyle = "gold";
//     // ctx.stroke(circle);
//     // ctx.closePath();
// }

// function bindEventListeners() {
//     document.body.addEventListener('keyup', (e) => onBoardEvent(e));
// }

// function onBoardEvent(event) {
//     console.log(event.code);
//     switch (event.code) {
//         case 'ArrowUp':
//             // clearInterval(timerID);
//             animateYTop();
//             clearInterval();
//             setInterval(animateYTop, 1000);
//             break;
//         case 'ArrowDown':
//             // clearInterval(timerID);
//             animateYDown();
//             setInterval(animateYDown, 1000);
//             break;
//         case 'ArrowLeft':
//             // clearInterval(timerID);
//             animateXLeft();
//             setInterval(animateXLeft, 1000);
//             break;
//         case 'ArrowRight':
//             // clearInterval(timerID);
//             animateXRight();
//             setInterval(animateXRight, 1000);
//             break;
//     }
// }

// // let timerID = setInterval(animateXRight, 500);

// // let timerID = setTimeout(animateXRight {timerID animateXRight, 500}, 500);