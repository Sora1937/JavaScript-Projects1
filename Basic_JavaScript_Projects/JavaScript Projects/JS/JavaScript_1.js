function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = "'s are great animals!";
    switch(Animals) {
        case "Cat":
            Animal_Output = "Cat" + Animal_String;
        break;
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
        break;
        case "Bird":
            Animal_Output = "Bird" + Animal_String;
        break;
        case "Bunny":
            Animal_Output = "bunny" + Animal_String;
        break;
        case "Snake":
            Animal_Output = "Snake" + Animal_String;
        break;
        case "Hamster":
            Animal_Output = "Hamster" + Animal_String;
        break;
        default:
            Animal_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    for (var i = 0; i < A.length; i++){
        A[i].innerHTML = "This text has changed!";
    }
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Calculate the center of the rectangle
var rectCenterX = c.width / 2;
var rectCenterY = c.height / 2;

// Define the redius of the gradient circle
var gradientRadius = Math.min(c.width, c.height) * 0.9;

// Create gradient
var grd = ctx.createRadialGradient(rectCenterX, rectCenterY, 0, rectCenterX, rectCenterY, gradientRadius);
grd.addColorStop(0, "red");
grd.addColorStop(1, "blue");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 250);