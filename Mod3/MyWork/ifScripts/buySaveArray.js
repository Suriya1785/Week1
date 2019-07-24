// Description: Program - More you Buy More you Save (Work in Progress)
// Author: HartCode Programmer
"Use Strict";
var standardTaxRate, actualAmount, totalAmount, discountedAmount, level1BuyAmount, level2BuyAmount, tempAmount, taxAmount;
var buyAmount = ["100", "250", "300"];
var buyDiscount = ["0.9", "0.8", "0.7"];
var actualAmount = ["75", "150", "275", "250"];
standardTaxRate = 8;

for (i = 0; i <= actualAmount.length; i++) {

    for (j = 0; j <= buyAmount.length; j++) {
        console.log("Hello");
        if (actualAmount[i] >= buyAmount[j]) {
            tempAmount = actualAmount[i] * buyDiscount[j];
            discountedAmount = actualAmount[i] - tempAmount;
            taxAmount = tempAmount * (standardTaxRate / 100);
            totalAmount = tempAmount + taxAmount;
            j = 100;
        } else if ((actualAmount[i] < buyAmount[j])) {

        }
    }

}


// Take user inputs and dynamic driven level of discounts and amount threshold
if (actualAmount >= level2BuyAmount) {
    tempAmount = actualAmount * level2BuyDiscount;
    discountedAmount = actualAmount - tempAmount;
    taxAmount = tempAmount * (standardTaxRate / 100);
    totalAmount = tempAmount + taxAmount;
} else if ((actualAmount >= level1BuyAmount) && (actualAmount < level2BuyAmount)) {
    tempAmount = actualAmount * level1BuyDiscount;
    discountedAmount = actualAmount - tempAmount;
    taxAmount = tempAmount * (standardTaxRate / 100);
    totalAmount = tempAmount + taxAmount;
} else {
    taxAmount = actualAmount * (standardTaxRate / 100);
    totalAmount = actualAmount + taxAmount;
    discountedAmount = 0;
}

console.log("Discounted Amount is : " + discountedAmount);
console.log("Total amount to be paid : " + totalAmount);
console.log("Tax Amount for applied " + standardTaxRate + "% is : " + taxAmount);