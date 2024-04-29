// This function concatenates strings together
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// This function slices a chuck of text out and displays the result
function slice_Method() {
    var Sentence = "Took a picture of your mom last Christmas, it's still printing";
    var Section = Sentence.slice(18, 26);
    document.getElementById("Slice").innerHTML = Section;
}

// This function takes the sentence you give it and makes it all upper case
function upperCase() {
    var text = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML = 
    text.toUpperCase();
}

// This function searches text and gives you the position of what youre looking for
function searchText() {
    var text = "Never gonna give you up";
    var position = text.search("give");
    document.getElementById("search").innerHTML = position;
}

// This function converts numbers to strings
function string_Method() {
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

// This function takes a number, limits the length of the number, and rounds to the set length
function precision_Method() {
    var x = 40568.4336912074;
    document.getElementById("Precision").innerHTML = x.toPrecision(13)
}

// This function takes a fixed amount of digits, throws away the rest, and displays them
function fixed_Function() {
    var num = 6.3545;
    var n = num.toFixed(2);
    document.getElementById("fixed").innerHTML = n;
}

// This function returns the primitive value of a number
function value_Function() {
    var num = -21;
    var n = num.valueOf();
    document.getElementById("value").innerHTML = n;
}