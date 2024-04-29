// Takes 2 set numbers
function addTwo () {
    addition = 2 + 2;
    document.getElementById("Sum").innerHTML = "2 + 2 = " + addition;
}

// Subtracts 2 set numbers
function subtractTwo() {
    var subtraction = 5 - 2;
    document.getElementById("Subtr").innerHTML = "5 - 2 = " + subtraction;
}

// Multiplies 2 set numbers
function multiplyTwo() {
    var multiplication = 6 * 8;
    document.getElementById("Product").innerHTML = "6 * 8 = " + multiplication;
}

// Divideds 2 set numbers
function divideTwo() {
    var division = 48/6;
    document.getElementById("Quotient").innerHTML = "48/6 = " + division;
}

// Multiple operators in a single function
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and subtracted by 5 equals " + simple_Math;
}

// Returns the remainder 
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Remainder").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

// Makes positive negative and negative positive
function negation_Operator() {
    var x = 10
    document.getElementById("Neg").innerHTML = -x;
}

// Adds 1 to a number
function increment() {
    x = 5;
    x++;
    document.getElementById("Up").innerHTML = x;
}

// Subtracts 1 to a number
function reduceOne() {
    x = 5;
    x--;
    document.getElementById("Down").innerHTML = x;
}

// Gives a random number float number and rounds it
function random() {
    var x = Math.random() * 1000000000;
    x = Math.round(x);
    document.getElementById("Random").innerHTML = x;
}