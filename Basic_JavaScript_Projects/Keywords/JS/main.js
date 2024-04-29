function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make= Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " Manufactured in " + Erik.Vehicle_Year;
}

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
var Sheena = new Person("Sheena", "Hedgecoke", 38, "Green");
var Van = new Person("Van", "Hensel", 20, "Hazel");

function show_Person() {
    document.getElementById("Person").innerHTML = "Sheena's Last Name is: " + Sheena.lastName;
}