// Gets type of data
function get_Type() {
    document.getElementById("Type").innerHTML = typeof("Magnus");
}

// Combines a string and an integer
function str_int() {
    document.getElementById("Combo").innerHTML = "10" + 5;
}

// Checks if numbers are equal
function isEqual() {
    document.getElementById("isEqual").innerHTML = (10 == 10);
}

// Checks if data is the same
function compare() {
    document.getElementById("Compare").innerHTML = (10 === 22);
}

// Checks if the first number is greater than the second
function isGreater() {
    document.getElementById("isGreater").innerHTML = (4 > 2);
}

// Checks if the first number is less than the second
function isLess() {
    document.getElementById("isLess").innerHTML = (5 < 3);
}

// Checks if both operations have the same result
function and_Function() {
    document.getElementById("and").innerHTML = (10 == 10 && 3 > 2);
}

// Checks if one or the other operation is true  
function or_Function() {
    document.getElementById("or").innerHTML = (5 == 2 || 10 > 5);
}

// Makes positive negative and negative positive
function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}