// Description : This script converts Fahrenheit to celsius  
// Author: HartCode Programmer
"Use Strict";
var fahrenheit, celsius, const32, const5, const9;
fahrenheit = 82;
const32 = 32;
const5 = 5;
const9 = 9;
celsius = ((fahrenheit - const32) * const5) / const9;
console.log("Celsius for the given fahrenheit " + fahrenheit + " is " + celsius);