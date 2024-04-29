function my_Dictionary() {
    // Variable to hold dictionary (chose name of my favorite pet rabbit)
    var Octavia = {
        Species: "Rabbit",
        Color: "White",
        Breed: "Rex",
        Age: 3,
        Sound: "Huff"
    };
    delete Octavia.Sound; //Deleted the sound attribute
    document.getElementById("Dictionary").innerHTML = Octavia.Sound; // To connect HTML and JS
}