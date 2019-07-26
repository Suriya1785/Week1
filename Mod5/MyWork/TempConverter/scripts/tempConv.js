//Description: temperatur converter javascripts
//Author: HartCode programmer
//Date: 07/25/2019
//fahrenheit to celsius converter
function ftoc() {
    var celsius, fahrenheitElement;
    fahrenheitElement = parseFloat(inputFahrenheitField.value);
    celsius = ((fahrenheitElement - 32) * 5) / 9;
    console.log(fahrenheitElement);
    console.log(celsius);
    document.getElementById("celsiusId").value = celsius.toFixed(1);
}

// celsius to fahrenheit converter
function ctof() {
    let fahrenheit, celsiusElement;
    celsiusElement = document.getElementById("inputCelsius");
    temp = parseFloat(celsiusElement.value);
    fahrenheit = ((temp * 9) / 5) + 32;
    console.log(temp);
    console.log(fahrenheit);
    document.getElementById("fahrenheitId").value = fahrenheit.toFixed(1);
}

// Redirect pages based on the button clicked

function callCtoF() {
    window.location.href = "ctof.html";
}

function callFtoc() {
    window.location.href = "ftoc.html";
}

function home() {
    window.location.href = "index.html";
}