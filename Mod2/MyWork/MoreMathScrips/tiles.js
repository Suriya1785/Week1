// Description : This script calculates the no of required tile box 
//              for given area of length, breadth and No of tiles in a box
// Author: HartCode Programmer
"Use Strict";
var length, width, areaOfBox;
length = 3;
width = 8;
areaOfBox = length * width;
tileSize = 1;
noOfTileInABox = 12;
noOfTilesRequired = Math.ceil(areaOfBox / tileSize);
noOfTileWithBrokerage = Math.ceil(0.1 * noOfTilesRequired);
noOfReqBox = Math.ceil((noOfTilesRequired + noOfTileWithBrokerage) / 12);
console.log("Number of Required Boxes for given area is : " + noOfReqBox);
console.log("Number of Required Tiles : " + noOfTilesRequired);
console.log("Number of Required Tiles for Brokerage : " + noOfTileWithBrokerage);