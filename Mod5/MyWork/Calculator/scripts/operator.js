// Description: script to perform Add, subtract, Multiply and Divide of two numbers
// Author: HartCode Programmer
// Date: 07/25/2019
"Use Strict";

// function to add two numbers
function addNumbers() {
    let inputNumber1 = parseFloat(inputNum1Field.value);
    let inputNumber2 = parseFloat(inputNum2Field.value);
    let sum;
    sum = inputNumber1 + inputNumber2;
    document.getElementById("outputResult").value = sum;
}

// function to subtract two numbers
function subNumbers() {
    let inputNumber1 = parseFloat(inputNum1Field.value);
    let inputNumber2 = parseFloat(inputNum2Field.value);
    let diff;
    diff = inputNumber1 - inputNumber2;
    document.getElementById("outputResult").value = diff;
}

// function to multiply two numbers
function multiplyNumbers() {
    let inputNumber1 = parseFloat(inputNum1Field.value);
    let inputNumber2 = parseFloat(inputNum2Field.value);
    let multiply;
    multiply = inputNumber1 * inputNumber2;
    document.getElementById("outputResult").value = multiply.toFixed(2);
}

// function to divide two numbers
function divideNumbers() {
    let inputNumber1 = parseFloat(inputNum1Field.value);
    let inputNumber2 = parseFloat(inputNum2Field.value);
    let divide;
    divide = inputNumber1 / inputNumber2;
    document.getElementById("outputResult").value = divide.toFixed(2);
}