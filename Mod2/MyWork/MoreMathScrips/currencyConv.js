// Description : This script does currency conversion  
// Author: HartCode Programmer
"Use Script";
var givenCurrency, convRate, convertedCurrency;
givenCurrency = 100;
typeOfCurrency = "INR";
convInRate = 68.94;
convEurRate = 0.89;
convKuwRate = 0.30;
convCadRate = 1.31;

// currency converter
if (typeOfCurrency == "INR") {
    convertedCurrency = givenCurrency * convInRate;
    console.log("Equivalent USD for given " + givenCurrency + " INR is $" + convertedCurrency);
} else if (typeOfCurrency == "EURO") {
    convertedCurrency = givenCurrency * convEurRate;
    console.log("Equivalent USD for given " + givenCurrency + " EURO is $" + convertedCurrency);
} else if (typeOfCurrency == "KWD") {
    convertedCurrency = givenCurrency * convKuwRate;
    console.log("Equivalent USD for given " + givenCurrency + " KWD is $" + convertedCurrency);
} else if (typeOfCurrency == "CAD") {
    convertedCurrency = givenCurrency * convCadRate;
    console.log("Equivalent USD for given " + givenCurrency + " CAD is $" + convertedCurrency);
} else if (typeOfCurrency == "USD") {
    console.log("Given Currency is dollars; NO NEED to convert");
} else {
    console.log("It is NOT one of the supported currencies");
}