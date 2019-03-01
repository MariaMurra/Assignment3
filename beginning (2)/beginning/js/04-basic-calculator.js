/*eslint-env browser*/
window.document.write("<h1>Simple Calculator</h1");
var num1 = parseFloat(window.prompt("In order to perform a calculation we need two numbers and the operation you want to perform. \n Please write the first number"));
var num2 = parseFloat(window.prompt("Now we need the second number, write it down here:"));
var calc = window.prompt("Now, what calculation do you want to perform? (add, substract, multiply or divide)");

/*var calc = parseFloat(window.prompt("Now, what calculation do you want to perform? (add \"+\", substract \"-\", multiply \"*\" or divide \"/\") "));*/


function calculate() {
    "use strict";
    switch (calc) {
    case "add":
        window.alert(num1 + " + " + num2 + " equals: " + (num1 + num2));
        break;
            
    case "substract":
        window.alert(num1 + " - " + num2 + " equals: " + (num1 - num2));
        break;
            
    case "multiply":
        window.alert(num1 + " multiplied by " + num2 + " equals: " + (num1 * num2));
        break;
            
    case "divide":
        window.alert(num1 + " divided by " + num2 + " equals: " + (num1 / num2));
        break;
    }
}
calculate(num1, num2, calc);