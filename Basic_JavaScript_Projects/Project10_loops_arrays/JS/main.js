// This function counts to 10 and displays it
function count_to_Ten() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

// This function displays the length of a string
function str_Length() {
    str = "Hello World!";
    document.getElementById("Length").innerHTML = str.length;
}

// Variables :D 
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "trumpet", "Flute"];
var Content = "";
var y;

// A loop that goes through a list and prints whats inside
function for_Loop() {
    for (y = 0; y < Instruments.length; y++) {
        Content += Instruments[y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// This function gives information about an element in an array
function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[1] + ".";
}

// This function give information about a constant object
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The color of the " + Musical_Instrument.type + 
    " is " + Musical_Instrument.color;
}

// This function adds 2 numbers together
function addTwo() {
    let a = 93;
    let b = 34;
    document.getElementById("addTwo").innerHTML = a + b;
}

// This function multiplies 2 numbers its given together 
function multiply_Function(a, b) {
    return a * b;
}
document.getElementById("mult").innerHTML = multiply_Function(4, 3);

// Creating a "dog" object and giving the attributes about it
let dog = {
    breed: "Corgi ",
    age: 2,
    gender: "Female ",
    color: "Black ",
    status: "Sleeping ",
    description : function() {
        return "The dog is a " + this.age + " year old " +  this.color + this.breed + 
        " that is " + this.status;
    } 
};
document.getElementById("Dog_Object").innerHTML = dog.description();

// This is a counting function that stops at 3
function break_Function() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}

// This function counts and skips 3
function continue_Function() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}