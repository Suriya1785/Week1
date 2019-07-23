// Description: This script tests various numeric conversion techniques
// Author: HartCode Programmer
"Use Strict";
var a = "   101.1   ";
var b = "402 Stevens";
var c = "Number 5  ";
var d = "55";

// ParseInt() execution
var inta = parseInt(a);
console.log("Display of " + a + " using parseInt is : " + inta);
var intb = parseInt(b);
console.log("Display of " + b + " using parseInt is : " + intb);
var intc = parseInt(c);
console.log("Display of " + c + " using parseInt is : " + intc);
var intd = parseInt(d);
console.log("Display of " + d + " using parseInt is : " + intd);

//ParseFloat() execution
var floata = parseFloat(a);
console.log("Display of " + a + " using parseFloat is : " + floata);
var floatb = parseFloat(b);
console.log("Display of " + b + " using parseFloat is : " + floatb);
var floatc = parseFloat(c);
console.log("Display of " + c + " using parseFloat is : " + floatc);
var floatd = parseFloat(d);
console.log("Display of " + d + " using parseFloat is : " + floatd);

//Number() execution
var numa = Number(a);
console.log("Display of " + a + " using Number is : " + numa);
var numb = Number(b);
console.log("Display of " + b + " using Number is : " + numb);
var numc = Number(c);
console.log("Display of " + c + " using Number is : " + numc);
var numd = Number(d);
console.log("Display of " + d + " using Number is : " + numd);