// Description: Program to display Major description and advision location of Student  
// Author: HartCode Programmer
// Date: 07/23/2019
"Use Strict";
var studentName, studentMajor;

// User input
studentName = "Dummy";
studentMajor = "BIOL";
var majorDesc;
var advisingLoc;

// Display based on the table look up
if (studentMajor == "BIOL") {
    majorDesc = "Biology";
    advisingLoc = "Science Bldg, Room 310";
} else if (studentMajor == "CSCI") {
    majorDesc = "Computer Science";
    advisingLoc = "Sheppard Hall, Room 314";
} else if (studentMajor == "ENG") {
    majorDesc = "English";
    advisingLoc = "Kerr Hall, Room 201";
} else if (studentMajor == "HIST") {
    majorDesc = "History";
    advisingLoc = "Kerr Hall, Room 114";
} else if (studentMajor == "MKT") {
    majorDesc = "Marketing";
    advisingLoc = "Westly Hall, Room 310";
} else {
    majorDesc = "Unknown";
    advisingLoc = "Unknown";
}

// Print out
console.log("Student: " + studentName);
console.log("Major: " + majorDesc);
console.log("Advising Location: " + advisingLoc);