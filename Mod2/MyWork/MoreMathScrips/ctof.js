// Description : This script converts celsius to Fahrenheit  
// Author: HartCode Programmer
"Use Strict";
var fahrenheit, celsius, const32, const5, const9;
celsius = 27.79;
const32 = 32;
const5 = 5;
const9 = 9;
fahrenheit = ((celsius * const9) / const5) + const32;
console.log("Fahrenheit for the given celsius " + celsius + " is " + fahrenheit);