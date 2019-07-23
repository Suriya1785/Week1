// Calculation of Rule of 72
"Use Strict";
var yearToDouble, savingsAcct, interestRate, futureDoubledAmount;
interestRate = 12;
savingsAcct = 150000;
const72 = 72;
const2 = 2;
yearToDouble = const72 / interestRate;
futureDoubledAmount = savingsAcct * const2;
console.log("At a " + interestRate + "% interest rate, your savings account will be worth " + futureDoubledAmount.toFixed(2) + " in " + yearToDouble.toFixed(1) + " years");