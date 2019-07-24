// Description: Program to display calculated Federal Taxes based on the value of taxable income & filing status
// Author: HartCode Programmer
// Date: 07/23/2019
"Use Strict";
var taxableIncome, filingStatus;
// User input
filingStatus = "Joint";
taxableIncome = 75500;

// Calculation based on taxable income for filing Status "Single"
if (filingStatus == "Single") {
    if (taxableIncome < 12000) {
        fedTax = taxableIncome * 0.05;
    } else if (taxableIncome < 24500) {
        fedTax = taxableIncome * 0.1;
    } else if (taxableIncome < 74500) {
        fedTax = taxableIncome * 0.15;
    } else {
        fedTax = taxableIncome * 0.2;
    }
} else {
    if (taxableIncome < 12000) {
        fedTax = taxableIncome * 0;
    } else if (taxableIncome < 24500) {
        fedTax = taxableIncome * 0.06;
    } else if (taxableIncome < 74500) {
        fedTax = taxableIncome * 0.11;
    } else {
        fedTax = taxableIncome * 0.2;
    }
}
//Print the calculated Federal Tax
console.log("Federal tax for the given taxable income " + taxableIncome + " with filing status of " + filingStatus + " is: " + fedTax);