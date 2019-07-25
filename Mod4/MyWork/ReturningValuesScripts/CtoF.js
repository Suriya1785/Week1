// Description: Program to outline More functions (functions with parameters) / Celsius to Fahrenheit
// Author: HartCode Programmer
// Date: 07/24/2019
"Use Strict";
var myFahrenheit, myCelsius;
myCelsius = [100, 45, 19, 0, -7, -40];

for (i = 0; i < myCelsius.length; i++) {
    myFahrenheit = convertCtoF(myCelsius[i]);
    console.log("Celsius for the given fahrenheit value " + myCelsius[i] + " is: " + myFahrenheit);
}

//Function to convert from Celsius to Fahrenheit
function convertCtoF(currentTemp) {
    convertTemp = ((currentTemp * 9) / 5) + 32;
    return convertTemp;
}