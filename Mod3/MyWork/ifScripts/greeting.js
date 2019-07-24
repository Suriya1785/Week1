// Description: Program to display greeting based on the hour of day
// Author: HartCode Programmer
// Date: 07/23/2019
"Use Strict";
//Input
var currentHour;
// currentHour = 4;
// take the current hour if No user input given  
var dateDummy = new Date();
if (Boolean(currentHour)) {
    console.log("There you go!");
} else {
    currentHour = dateDummy.getHours();
    console.log("Need User input, Showing greting based on current Hour")
}

// Display the greeting based on the hour
if (currentHour <= 10) {
    console.log("Good morning!")
} else if (currentHour < 17) {
    console.log("Good day!");
} else {
    console.log("Good evening")
}
console.log("current hour : " + currentHour)