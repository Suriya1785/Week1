// Description: Program to outline More functions (functions with parameters)
// Author: HartCode Programmer
// Date: 07/24/2019
"Use Strict";
var myName, myAddress, myCity, myState, myZip;

// user input
myName = "Dummy Dummy"
myAddress = "29 Main Street"
myCity = "Hartford"
myState = "CT"
myZip = "06140"

myName1 = "Dummy1 Dummy1"
myAddress1 = "10 Kannagi Street"
myCity1 = "Manchester"
myState1 = "CT"
myZip1 = "06075"

myNum1 = 5;
myNum2 = 10;
myNumber1 = 25;
myNumber2 = 75;

myTotalDue = 45.203
myAmountPaid = 50.345;
myTotalDue1 = 50.25;
myAmountPaid1 = 50.25;
myTotalDue2 = 100.25;
myAmountPaid2 = 55.25;

// Sections calling functions with arguments
displayMailingLabel(myName, myAddress, myCity, myState, myZip);
displayMailingLabel(myName1, myAddress1, myCity1, myState1, myZip1);

// calling Add number function with arguments
addNumbers(myNum1, myNum2);
addNumbers(myNumber1, myNumber2);

// calling Subtract functions with arguments
subNumbers(myNum1, myNum2);

multiplyNumbers(myNum1, myNum2);

divideNumbers(myNum1, myNum2);

displayReceipt(myTotalDue, myAmountPaid);
displayReceipt(myTotalDue1, myAmountPaid1);
displayReceipt(myTotalDue2, myAmountPaid2);

// function to display mailing label
function displayMailingLabel(name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(city + " " + state + " " + zip);
}

// function to add and print two numbers
function addNumbers(num1, num2) {
    var sum;
    sum = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + sum);
}

// function to subtract two numbers
function subNumbers(num1, num2) {
    var diff;
    diff = num1 - num2;
    console.log(num1 + " - " + num2 + " = " + diff);
}

// function to multiply two numbers
function multiplyNumbers(num1, num2) {
    var multiply;
    multiply = num1 * num2;
    console.log(num1 + " * " + num2 + " = " + multiply);
}

// function to divide two numbers
function divideNumbers(num1, num2) {
    var divide;
    divide = num1 / num2;
    console.log(num1 + " / " + num2 + " = " + divide);
}

// function to calculate and display changeDue
function displayReceipt(totalDue, amountPaid) {
    var changeDue;
    changeDue = totalDue - amountPaid;
    console.log("Amount Paid: $" + amountPaid);
    console.log("Total Due: $" + totalDue);

    if (amountPaid < totalDue) {
        console.log("Change Due: $" + changeDue.toFixed(2));
        console.log("Please pay the above change due by today");
    } else if (amountPaid > totalDue) {
        console.log("Change Due: -$" + Math.abs(changeDue.toFixed(2)));
        console.log("will make the adjustment upon next payment");
    } else {
        console.log("Change Due: $" + changeDue.toFixed(2));
        console.log("No more payment required !!");
    }

}