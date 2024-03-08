// Limitation of Arrow function, if you want 'this' to change dynamically, 
// don't use arrow function

function changeColor() {
    console.log(this); // this = btn1 / btn2 / btn3
    this.style.backgroundColor = 'red';
}

document.getElementById('btn1').addEventListener('click', changeColor);
document.getElementById('btn2').addEventListener('click', changeColor);
document.getElementById('btn3').addEventListener('click', changeColor);