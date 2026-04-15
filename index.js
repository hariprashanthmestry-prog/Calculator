let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let symbol = document.getElementById("symbol");
let result = document.getElementById("result");

import { add, subtract, divide, multiply } from "./maths.js";

function handleAdd() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);

    symbol.textContent = "+";
    result.textContent = add(n1, n2);
}

function handleSubtract() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);

    symbol.textContent = "-";
    result.textContent = subtract(n1, n2);
}

function handleDivide() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);

    if (n2 === 0) {
        result.textContent = "Cannot divide by 0";
        return;
    }

    symbol.textContent = "/";
    result.textContent = divide(n1, n2);
}

function handleMultiply() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);

    symbol.textContent = "*";
    result.textContent = multiply(n1, n2);
}

window.handleAdd = handleAdd;
window.handleSubtract = handleSubtract;
window.handleDivide = handleDivide;
window.handleMultiply = handleMultiply;

function colorchange() {
    result.style.color = "green"; 
}
colorchange();

