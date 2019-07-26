// Description: Greeting script
// Author: HartCode Programmer
// Date: 07/25/2019
"Use Strict";

function greetUser() {
    const inputUserField = document.getElementById("inputUserName");
    let initString = inputUserField.value;
    console.log("initString:" + initString);
    let displayString = "Hello " + initString;
    alert(displayString);
}