// Description: Program to display Major description and advision location of Student using Switch  
// Author: HartCode Programmer
// Date: 07/23/2019
"Use Strict";
var studentName, studentMajor, majorDesc, advisingLoc;

// User input
studentName = "Dummy";
studentMajor = "HIST";

// Display based on the table look up
switch (studentMajor) {
    case "BIOL":
        majorDesc = "Biology";
        advisingLoc = "Science Bldg, Room 310";
        break;
    case "CSCI":
        majorDesc = "Computer Science";
        advisingLoc = "Sheppard Hall, Room 314";
        break;
    case "ENG":
        majorDesc = "English";
        advisingLoc = "Kerr Hall, Room 201";
        break;
    case "HIST":
        majorDesc = "History";
        advisingLoc = "Kerr Hall, Room 114";
        break;
    case "MKT":
        majorDesc = "Marketing";
        advisingLoc = "Westly Hall, Room 310";
        break;
    default:
        majorDesc = "Unknown";
        advisingLoc = "Unknown";
}

// Print out
console.log("Student: " + studentName);
console.log("Major: " + majorDesc);
console.log("Advising Location: " + advisingLoc);