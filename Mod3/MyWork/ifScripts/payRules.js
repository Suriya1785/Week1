//Description: Calculate the payrate for given resource
//Author: HartCode Programmer
"Use Strict";
var stdHrsWorked, overtimeHoursWorked, grossPay, personHrsOfWorked, perPayRate, overtimePayRate;
stdHrsWorked = 40;
perPayRate = 1;
personHrsOfWorked = 45;
overtimePayRate = 1.5;

if (personHrsOfWorked <= stdHrsWorked) {
    // Gross pay calculation for resource less than standard hours of work
    grossPay = perPayRate * personHrsOfWorked;
} else {
    // Gross pay calculation for resource More than standard hours of work
    overtimeHoursWorked = personHrsOfWorked - stdHrsWorked;
    grossPay = (overtimePayRate * overtimeHoursWorked) + (perPayRate * stdHrsWorked);
}
console.log("GrossPay of the given person is : " + grossPay);
console.log("Standard hours of Work : " + stdHrsWorked);
console.log("Overtime Work Hours for given person is : " + overtimeHoursWorked);
console.log("Overtime Pay rate is: " + overtimePayRate);
console.log("Standard Pay rate is: " + perPayRate);