// Description: Program to outline More functions (functions with parameters)
// TaxFunctions using Object arrays and functions
// Author: HartCode Programmer
// Date: 07/24/2019
"Use Strict";
var myBasePay, mySocSecTax, myWithHoldingCode, myFederalTax, personGroup;
//User input
personPayGroup = [{ basePay: "60000", withHoldingCode: "5" }, { basePay: "75000", withHoldingCode: "4" }, { basePay: "95000", withHoldingCode: "39" }, { basePay: "60000", withHoldingCode: "10" }];
myBasePay = 60000;
myWithHoldingCode = 10;
myBasePay1 = 75000;
myWithHoldingCode1 = 6;

// Using object arrays and FOR loop to read and access and print
for (var i = 0; i < personPayGroup.length; i++) {
    mySocSecTax = getSocSecTax(personPayGroup[i].basePay);
    myMedicareTax = getMedicareTax(personPayGroup[i].basePay);
    myFederalTax = getFederalTax(personPayGroup[i].basePay, personPayGroup[i].withHoldingCode);
    myGrossPay = getGrossPay(personPayGroup[i].basePay, myMedicareTax, mySocSecTax, myFederalTax);
    console.log("Person " + i + ":" + "      grossPay " + Math.ceil(myGrossPay) + "     witholding Code " + personPayGroup[i].withHoldingCode + "      Social Sec Tax " + Math.ceil(mySocSecTax) + "      Medicare Tax " + Math.ceil(myMedicareTax) + "   Federal Tax " + Math.ceil(myFederalTax));
}

// Person 1: Gross Pay calculation and print / without object array
mySocSecTax = getSocSecTax(myBasePay);
myMedicareTax = getMedicareTax(myBasePay);
myFederalTax = getFederalTax(myBasePay, myWithHoldingCode);
myGrossPay = getGrossPay(myBasePay, myMedicareTax, mySocSecTax, myFederalTax);
console.log("Person 1:      grossPay " + Math.ceil(myGrossPay) + "     witholding Code " + myWithHoldingCode + "      Social Sec Tax " + Math.ceil(mySocSecTax) + "      Medicare Tax " + Math.ceil(myMedicareTax) + "   Federal Tax " + Math.ceil(myFederalTax));

//Person 2: tax calculation and print / without object array
mySocSecTax = getSocSecTax(myBasePay1);
myMedicareTax = getMedicareTax(myBasePay1);
myFederalTax = getFederalTax(myBasePay1, myWithHoldingCode1);
myGrossPay = getGrossPay(myBasePay, myMedicareTax, mySocSecTax, myFederalTax);
console.log("Person 2:      grossPay " + Math.ceil(myGrossPay) + "     witholding Code " + myWithHoldingCode1 + "      Social Sec Tax " + Math.ceil(mySocSecTax) + "      Medicare Tax " + Math.ceil(myMedicareTax) + "   Federal Tax " + Math.ceil(myFederalTax));

//List of Functions
// Calculate Social Security Tax
function getSocSecTax(grossPay) {
    var socSecTax;
    socSecTax = grossPay * 0.062;
    return socSecTax;
}

// Calculate Medicare Tax
function getMedicareTax(grossPay) {
    var medicareTax;
    medicareTax = grossPay * 0.0145;
    return medicareTax;
}

// Calculate Federal tax
function getFederalTax(grossPay, withHoldingCode) {
    var federalTax, base, fedTaxPct;
    switch (withHoldingCode) {
        case 0:
            federalTax = grossPay * 0.23;
            break;
        case 1:
            federalTax = grossPay * 0.21;
            break;
        case 2:
            federalTax = grossPay * 0.195;
            break;
        case 3:
            federalTax = grossPay * 0.185;
            break;
        default:
            if (withHoldingCode >= 4) {
                base = 4;
                diff = withHoldingCode - base;
                fedTaxPct = ((18 - (diff * 0.5)) / 100);
                if (fedTaxPct <= 0) {
                    federalTax = 0;
                } else {
                    federalTax = (grossPay * fedTaxPct);
                }
            } else {
                console.log("happy");
            }
            break;
    }
    return federalTax;
}

// Calculate Gross Pay

function getGrossPay(basePay, medicareTax, federalTax, SocSecTax) {
    myGrossPay = myBasePay + myMedicareTax + mySocSecTax + myFederalTax;
    return myGrossPay;
}