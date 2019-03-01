/*eslint-env browser*/

//STEP 1

function halfNumber(oneNumber) {
    "use strict";
    
    return "Half of " + oneNumber + " is " + oneNumber / 2 + "<br>";
}
window.document.write(halfNumber(window.prompt("What number do you want to half?")));


//STEP 2
function squareNumber(num) {
    "use strict";
    
    return "The result of squaring the " + num + " is " + Math.pow(num, 2) + "<br>";
}
window.document.write(squareNumber(window.prompt("Please write a number to square")));

//STEP 3

function percentOf(num1, num2) {
    "use strict";
    num2 = parseFloat(window.prompt("pick a number to find it\'s percentage"));
    num1 = parseFloat(window.prompt("pick a number to figure our what percentage of the previous number it is."));
    return num1 + " is " + Math.round(num1 * 100 / num2) + " % of " + num2  + "<br>";
}
window.document.write(percentOf(window.prompt("write a numer", window.prompt("write another number"))));

//STEP 4
function findModulus(num3, num4) {
    "use strict";
    num3 = parseFloat(window.prompt("let\'s calculate a modulus, pick a number:"));
    num4 = parseFloat(window.prompt("need a second number for that modulus calculation"));
    return "The modulus between " + num3 + " and " + num4 + " is " + num3 % num4 + "<br>";
}

window.document.write(findModulus());

//STEP 5
sumarizing = (parseFloat(window.prompt("if you need help adding a bunch of quantities together, write them down here and separate each with a coma.")));

function addition() {
    "use strict";
    return "still working on this one";
}

addition(sumarizing);