//Description: Calculate the person net pay, tax rate per year 
//Author: HartCode Programmer

"Use Strict";
var stdHrsWorked, overtimeHoursWorked, grossPay, personHrsOfWorked, perPayRate, overtimePayRate, taxableIncome, filingStatus, medicareTaxPct, medicareTax, socialTax, socialTaxPct;
// User input
perPayRate = 30;
personHrsOfWorked = 45;
filingStatus = "Joint";

// Company thresholds 
overtimePayRate = 1.5;
medicareTaxPct = 0.062;
socialTaxPct = 0.0145;
stdHrsWorked = 40;

// Calculation of grossPay per week
if (personHrsOfWorked <= stdHrsWorked) {
    // Gross pay calculation for resource less than standard hours of work
    grossPay = perPayRate * personHrsOfWorked;
} else {
    // Gross pay calculation for resource More than standard hours of work
    overtimeHoursWorked = personHrsOfWorked - stdHrsWorked;
    grossPay = (overtimePayRate * overtimeHoursWorked) + (perPayRate * stdHrsWorked);
}

// Calculation of taxable income per year / Multiply it by 52 weeks (approximate)
taxableIncome = grossPay * 52;
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
medicareTax = taxableIncome * medicareTaxPct;
socialTax = taxableIncome * socialTaxPct;
netPay = taxableIncome - medicareTax - socialTax - fedTax;
//Print the calculated Federal Tax
console.log("Federal tax for the given taxable income " + taxableIncome + " with filing status of " + filingStatus + " is: " + fedTax);
console.log("Taxable income : " + taxableIncome.toFixed(2));
console.log("Medicare Tax : " + medicareTax.toFixed(2));
console.log("Social Tax : " + socialTax.toFixed(2));
console.log("Net Pay : " + netPay.toFixed(2));