// Description : This script calculates the distance between two points 
// Author: HartCode Programmer
"Use Strict";
var x1, y1, x2, y2, distance1, distance2, distanceBetweenTwoPoints;
x1 = 2;
x2 = 3;
y1 = 4;
y2 = 5;
distance1 = Math.pow(Math.abs(x2 - x1), 2);
distance2 = Math.pow(Math.abs(y2 - y1), 2);
Math.sqrt(distanceBetweenTwoPoints = distance1 + distance2);
console.log("Distance between two points for the given is : " + distanceBetweenTwoPoints);