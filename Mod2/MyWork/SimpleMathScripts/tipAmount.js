// Calculation of tip amount
"Use Strict";
var amountOfBill, tipPercentage, tipAmount;
amountOfBill = 50.56;
tipPercentage = 20;
tipAmount = amountOfBill * (tipPercentage / 100);
console.log("The Tip on a $" + amountOfBill + " food bill is $" + tipAmount.toFixed(2));