// Global Variable
var x = 10;

// Adds x and a number together 
function addTwo() {
    var sum = x + 2;
    document.getElementById("Add").innerHTML = sum;
}

// This function takes 2 numbers and subracts them
// This function had an error
function minusTwo() {
    var y = 8;
    var result = y - 2;
    document.getElementById("Subtr").innerHTML = result;
}

// This was used to help debug and display in the devtool console for the webbrowser
console.log(minusTwo());

// This function greets you based on the time of day
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon."
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}

// This function has you input your age and determine if you are an adult or minor
function age_Check() {
    var age;
    age = document.getElementById("Age").value
    if (age > 17) {
        document.getElementById("adult").innerHTML = "You are an Adult";
    }
    else {
        document.getElementById("adult").innerHTML = "You are a Minor";
    }
}