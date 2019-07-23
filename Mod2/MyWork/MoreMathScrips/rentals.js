// Description : This script calculates van rental for given no of people.  
// Author: HartCode Programmer
"Use Strict";
var noOfSeatsPerVan, vanCostPerDay, reqCostPerPerson, noOfPeople;
noOfSeatsPerVan = 15;
vanCostPerDay = 250;
noOfPeople = 47;
noOfReqdVans = Math.ceil(noOfPeople / 15);
console.log("Number of Required Vans : " + noOfReqdVans);
totalCost = noOfReqdVans * vanCostPerDay;
reqCostPerPerson = totalCost / noOfPeople;
console.log("Total Cost required to rent van including drivers : " + totalCost);
console.log("Cost Per Person : " + reqCostPerPerson);