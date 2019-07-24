// Description: To find out whether given year is leap year
// Author: HartCode Programmer
"Use Strict";
var givenYear, isLeapYear;
givenYear = 2004;
cons4 = 4;
cons100 = 100;
cons400 = 400;

// Calculate Leap Year & Usage of AND
// Century year validation
if (((givenYear % cons100) == 0)) {
    if (((givenYear % cons4) == 0) && ((givenYear % cons400) == 0)) {
        isLeapYear = True;
    } else {
        isLeapYear = False;
    }
} else if ((givenYear % cons4) == 0) {
    // other than century year validation
    isLeapYear = True;
} else {
    isLeapYear = False;
}

// Print Leap Year
if (isLeapYear == True) {
    console.log("Given Year is : " + givenYear + " Leap Year.");
} else {
    console.log("Given Year " + givenYear + " is not Leap Year");
}