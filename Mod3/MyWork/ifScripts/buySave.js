// Description: Program - More you Buy More you Save
// Author: HartCode Programmer
"Use Strict";
var level1BuyDiscount, level2BuyDiscount, discPct, standardTaxRate, actualAmount, totalAmount, discountedAmount, level1BuyAmount, level2BuyAmount, tempAmount, taxAmount;
// Take user inputs & Define thresholds
level1BuyDiscount = 0.9;
level2BuyDiscount = 0.8;
actualAmount = 175;
level1BuyAmount = 100;
level2BuyAmount = 250;
standardTaxRate = 8;

// Calculate discount percentage based on the purchase amount
if (actualAmount < level1BuyAmount) {
    discPct = 0;
} else if (actualAmount < level2BuyAmount) {
    discPct = 0.9;
} else {
    discPct = 0.8;
}

// Calculate amount
tempAmount = actualAmount * discPct;
discountedAmount = actualAmount - tempAmount;
taxAmount = tempAmount * (standardTaxRate / 100);
totalAmount = tempAmount + taxAmount;

//Print appropriate amount
console.log("Discounted Amount is : " + discountedAmount);
console.log("Total amount to be paid : " + totalAmount);
console.log("Tax Amount for applied " + standardTaxRate + "% is : " + taxAmount);