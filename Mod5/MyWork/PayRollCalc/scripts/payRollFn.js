//Description: Pay Roll calculations
//Author: HartCode Programmer
//Date: 07/25/2019
function payRollCalculator() {
    let overtimeHoursWorked, grossPayPerYear, medicareTax, grossPayPerWeek;
    let personHrsOfWorked = parseFloat(inputHrsWorkedField.value);
    let perPayRate = parseFloat(inputPayRateField.value);
    let myWithHoldingCode = parseFloat(inputNoOfWithholdField.value);

    // console.log("HrsWorked : " + personHrsOfWorked);
    // console.log("inputPayRate : " + perPayRate);
    // console.log("WithHolding Code : " + myWithHoldingCode);
    // Company thresholds 
    let overtimePayRate = 1.5;
    let stdHrsWorked = 40;

    // Calculation of grossPay per week
    if (personHrsOfWorked <= stdHrsWorked) {
        // Gross pay calculation for resource less than standard hours of work
        grossPayPerWeek = perPayRate * personHrsOfWorked;
    } else {
        // Gross pay calculation for resource More than standard hours of work
        overtimeHoursWorked = personHrsOfWorked - stdHrsWorked;
        grossPayPerWeek = (overtimePayRate * overtimeHoursWorked) + (perPayRate * stdHrsWorked);
    }
    // Calculation of taxable income per year / Multiply it by 52 weeks (approximate)
    grossPayPerYear = grossPayPerWeek * 52;

    socialTax = getSocSecTax(grossPayPerYear);
    medicareTax = getMedicareTax(grossPayPerYear);
    fedTax = getFederalTax(grossPayPerYear, myWithHoldingCode);
    netPay = getNetPay(grossPayPerYear, medicareTax, socialTax, fedTax);
    // console.log("Person 1:      grossPay " + Math.ceil(taxableIncome) + "     witholding Code " + myWithHoldingCode + "      Social Sec Tax " + Math.ceil(mySocSecTax) + "      Medicare Tax " + Math.ceil(myMedicareTax) + "   Federal Tax " + Math.ceil(myFederalTax));

    //Print the calculated Federal Tax
    // console.log("Federal tax for the given taxable income " + grossPayPerYear + " with withholding code of " + myWithHoldingCode + " is: " + fedTax);
    // console.log("Gross Pay : " + grossPayPerYear.toFixed(2));
    // console.log("Medicare Tax : " + medicareTax.toFixed(2));
    // console.log("Social Tax : " + socialTax.toFixed(2));
    // console.log("Net Pay : " + netPay.toFixed(2));

    // Displaying it in table
    let fedTable = document.getElementById("fedTaxId");
    fedTable.innerText = fedTax.toFixed(2);
    let medTable = document.getElementById("medicareTaxId");
    medTable.innerHTML = medicareTax.toFixed(2);
    let socTable = document.getElementById("socSecTaxId");
    socTable.innerHTML = socialTax.toFixed(2);
    let grossTable = document.getElementById("grossPayId");
    grossTable.innerHTML = grossPayPerYear.toFixed(2);
    let netTable = document.getElementById("netPayId");
    netTable.innerHTML = netPay.toFixed(2);

    // Displaying it in para
    // var fedPara = document.getElementById("paraFedTaxId");
    // fedPara.innerHTML = "Federal Tax is : " + fedTax.toFixed(2);
    // var medPara = document.getElementById("paraMedicareTaxId");
    // medPara.innerHTML = "Medicare Tax is : " + medicareTax.toFixed(2);
    // var socPara = document.getElementById("paraSocSecTaxId");
    // socPara.innerHTML = "Social Tax : " + socialTax.toFixed(2);
    // var grossPara = document.getElementById("paraGrossPayId");
    // grossPara.innerHTML = "Gross Pay : " + grossPayPerYear.toFixed(2);
    // var netPara = document.getElementById("paraNetPayId");
    // netPara.innerHTML = "Net Pay : " + netPay.toFixed(2);
}

//List of Functions
// Calculate Social Security Tax
function getSocSecTax(grossPay) {
    let socSecTax;
    socSecTax = grossPay * 0.062;
    return socSecTax;
}

// Calculate Medicare Tax
function getMedicareTax(grossPay) {
    let medicareTax;
    medicareTax = grossPay * 0.0145;
    return medicareTax;
}

// Calculate Federal tax
function getFederalTax(grossPay, withHoldingCode) {
    let federalTax, base, diff, fedTaxPct;
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

// Calculate Net Pay
function getNetPay(grossPay, medicareTax, federalTax, SocSecTax) {
    let NetPay = grossPay - medicareTax - federalTax - SocSecTax;
    return NetPay;
}