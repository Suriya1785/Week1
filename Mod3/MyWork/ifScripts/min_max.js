// Description: Program to display maximum and minimum of three numbers
// Author: HartCode Programmer
// Date: 07/23/2019
"Use Strict";
var a, b, c, smallest, largest;
// user input
a = 18;
b = 15;
c = 3;

//Usage of Math.max
largest = Math.max(a, b, c);
console.log("Max : " + largest);

//Usage of Math.min
smallest = Math.min(a, b, c);
console.log("Min : " + smallest);

// Calculation of largest of three numbers
if ((a > b) && (a > c)) {
    largest = a;
} else if ((b > a) && (b > c)) {
    largest = b;
} else {
    largest = c;
}
console.log("Largest of given three numbers " + a + "," + b + ", " + c + " is: " + largest);

// Calculation of smallest of three numbers
if ((a < b) && (a < c)) {
    smallest = a;
} else if ((b < a) && (b < c)) {
    smallest = b;
} else {
    smallest = c;
}
console.log("Smallest of given three numbers " + a + "," + b + ", " + c + " is: " + smallest);