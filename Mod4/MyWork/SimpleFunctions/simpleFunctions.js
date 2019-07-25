// Description: Program to outline simple functions  
// Author: HartCode Programmer
// Date: 07/24/2019
"Use Strict";
var userName, favMovie, favBand, favPlace;
//user input
userName = "Dummy";
favMovie = "Baasha";
favBand = "Light Music";
favPlace = "any Cricket Ground";

//calling simple functions with arguments and without argument
favoriteThings(userName, favMovie, favBand);
whyImHere();
favoritePlace(favPlace);

// Print favorite things - Function with parameter
function favoriteThings(name, movie, band) {
    console.log("UserName is: " + name);
    console.log("Favourite Movie is: " + movie);
    console.log("Favourite Band is: " + band);
}

// print just description
function whyImHere() {
    console.log("HartCode is a place to get knowledge on web development and its major features");
}

// Print favorite place
function favoritePlace(place) {
    console.log(place);
    if (place == "any Cricket Ground") {
        console.log("Energizes me when i visit my favourite place: " + place);
    } else {
        console.log("No matching place to print out");
    }
}