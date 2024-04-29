// This function takes your height and decided if you can ride or not
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// This function creates a class "Dog" 
function Dog(Breed, Age, Color) {
    this.Dog_Breed = Breed;
    this.Dog_Age = Age;
    this.Dog_Color = Color;
}
// Variables for Dog
var Skippy = new Dog("Border Collie", 5, "Brown");
var Sparky = new Dog("Labrador", 2, "Black");
var Toby = new Dog("Corgi", 10, "White");

// Displays things about Dog
function my_Function() {
    document.getElementById("New_and_This").innerHTML = 
    "Skippy is a " + Skippy.Dog_Color + "-colored " + Skippy.Dog_Breed + " who is " + Skippy.Dog_Age;
}

// This function subtracts 1 from a number
function minus_One() {
    document.getElementById("Minus").innerHTML = Subtr();
    function Subtr() {
        Starting_point = 9;
        function minus() {Starting_point -= 1}
        minus();
        return Starting_point;
    }
}

// This function adds 1 to a number
function count_Function() {
    document.getElementById("Counting").innerHTML = Count()
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1}
        Plus_one();
        return Starting_point;
    }
}