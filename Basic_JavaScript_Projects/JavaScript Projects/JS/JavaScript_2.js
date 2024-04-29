// This function makes sure that the input fields are filled out
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    }
    let y = document.forms["myForm"]["lname"].value;
    if (y == "") {
        alert("Last Name must be filled out");
        return false;
    }
    let z = document.forms["myForm"]["email"].value;
    if (z == "") {
        alert("Email must be filled out");
        return false;
    }
}