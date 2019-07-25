// Description: Program to outline More functions (functions with parameters) / Fahrenheit to Celsius
// Author: HartCode Programmer
// Date: 07/24/2019
"Use Strict";
//User input
var myFahrenheit, myCelsius;
myFahrenheit = [212, 90, 70, 32, 0, -40, 82];

for (i = 0; i < myFahrenheit.length; i++) {
    myCelsius = convertFtoC(myFahrenheit[i]);
    console.log("Celsius for the given fahrenheit value " + myFahrenheit[i] + " is: " + myCelsius);
}


//Function to convert from Fahrenheit to Celsius
function convertFtoC(currentTemp) {
    convertTemp = ((currentTemp - 32) * 5) / 9;
    return convertTemp;
}