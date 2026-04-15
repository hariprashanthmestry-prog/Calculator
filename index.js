let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let symbol = document.getElementById("symbol");
let result = document.getElementById("result");

import { add, subtract, divide, multiply } from "./maths.js";


function submitForm() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let sym = symbol.textContent;
    let res;

    switch (sym) {
        case "+":
            res = add(n1, n2);
            break;
            case "-":
                res = subtract(n1, n2);
                break;
                case "/":
            res = divide(n1, n2);
            break;
        case "*":
            res = multiply(n1, n2);
            break;
        default:
            result.textContent = "Invalid operator";
            return;
        }
        
        result.textContent = res;
    }
    window.submitForm = submitForm;


function colorchange() {
    result.style.color = "green"; 
}
colorchange();

function handleAdd() {    
    symbol.textContent = "+";
}

function handleSubtract() {
    symbol.textContent = "-";
}

function handleDivide() {
    let n2 = Number(num2.value);
    
    if (n2 === 0) {
        result.textContent = "Cannot divide by 0";
        return result.style.color = "red";
    }

    symbol.textContent = "/";
}

function handleMultiply() {
    symbol.textContent = "*";
}

window.handleAdd = handleAdd;
window.handleSubtract = handleSubtract;
window.handleDivide = handleDivide;
window.handleMultiply = handleMultiply;

