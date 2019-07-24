// Description: Program to print a department name using switch  
// Author: HartCode Programmer
// Date: 07/23/2019
"Use Strict";
// variable declaration
var deptNum, deptName;
// User input
deptNum = 5;

// Logic to display
switch (deptNum) {
    case 1:
        deptName = "Marketing";
        break;
    case 5:
        deptName = "Human Resources";
        break;
    case 10:
        deptName = "Accounting";
        break;
    case 12:
        deptName = "Legal";
        break;
    case 18:
        deptName = "IT";
        break;
    case 20:
        deptName = "Customer Relations";
        break;
    default:
        deptName = "Unknown";
}

console.log("Department Name is: " + deptName);