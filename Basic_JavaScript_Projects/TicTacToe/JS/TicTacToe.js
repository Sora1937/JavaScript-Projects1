// This variable keeps track of whose turn it is.
let activePlayer = 'X';
// This array stores an array of moves. We use this to determin win conditions.
let selectedSquares = [];

// This function is for palcing an x or o in a square.
function placeXOrO(squareNumber) {
    // This condition ensures a square hasn't been selected already.
    // The .some() method is used to check each element of the selectSquare array
    // To see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        // This condition checks who's turn it is.
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x1.png")';
        } else {
            select.style.backgroundImage = 'url("images/o1.png")';
        }
        // squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        // This calls a function to check for any win condition.s
        checkWinConditions();
        // This condition is for changing the active player.
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        // This function plays placement sound.
        audio('./media/Place1.mp3');
        // This condition checks to see if it is the computers turn.
        if (activePlayer === 'O') {
            disableClick();
            // This function waits 1 second before the computer places an image and enables click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        // Returning true is needed for out computersTurn() function to work.
        return true;
    }


    // This function results in a random square being selected by the computer.
    function computersTurn() {
        // This is for our while loop.
        let success = false;
        // This starts a random number 0-8.
        let pickASquare;
        // This condition allows our while loop to keep trying if a square is selected already.
        while (!success) {
            // A random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            // If the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
                // This line calls the function.
                placeXOrO(pickASquare);
                // This changes our boolean and ends the loop.
                success = true;
            }
        }
    }
}
// This function parses the selectedSquares array to search for win conditions.
//drawLine() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
    // X: 0, 1, 2 condition
    if(arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 150, 558, 150) }
    // X: 3, 4, 5 condition
    else if(arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 354, 558, 354) }
    // X: 6, 7, 8 condition
    else if(arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 558, 558, 558) }
    // X: 0, 3, 6 condition
    else if(arrayIncludes('0X', '3X', '6X')) { drawWinLine(95, 100, 95, 608) }
    // X: 1, 4, 7 condition
    else if(arrayIncludes('1X', '4X', '7X')) { drawWinLine(300, 100, 300, 608) }
    // X: 2, 5, 8 condition
    else if(arrayIncludes('2X', '5X', '8X')) { drawWinLine(503, 100, 503, 608) }
    // X: 6, 4, 2 condition
    else if(arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 558, 510, 130) }
    // X: 0, 4, 8 condition
    else if(arrayIncludes('0X', '4X', '8X')) { drawWinLine(90, 150, 520, 570) }
    // O: 0, 1, 2 condition
    else if(arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 150, 558, 150) }
    // O: 3, 4, 5 condition
    else if(arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 354, 558, 354) }
    // O: 6, 7, 8 condition
    else if(arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 558, 558, 558) }
    // O: 0, 3, 6 condition
    else if(arrayIncludes('0O', '3O', '6O')) { drawWinLine(95, 100, 95, 608) }
    // O: 1, 4, 7 condition
    else if(arrayIncludes('1O', '4O', '7O')) { drawWinLine(300, 100, 300, 608) }
    // O: 2, 5, 8 condition
    else if(arrayIncludes('2O', '5O', '8O')) { drawWinLine(503, 100, 503, 608) }
    // O: 6, 4, 2 condition
    else if(arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 558, 510, 130) }
    // O: 0, 4, 8 condition
    else if(arrayIncludes('0O', '4O', '8O')) { drawWinLine(90, 150, 520, 570) }
    // This condition checks for a tie. If none of the above conditions are met and 
    // 9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        // This function plays the tie games.
        audio('./media/Tie1.mp3');
        // This function sets a .3 seconds timer before the resetGame is called.
        setTimeout(function () { reset(); }, 500);
    }
    // This function checks if an array includes 3 strings. It is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        // These 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        // If the 3 variables we pass are all included  in our array then
        // true is returned and our else if condition executes drawLine() function.
        if (a === true && b === true && c === true) { return true; }
    }
}
// This function makes our body element temporarily unclickable.
function disableClick() {
    // Define body element
    const body = document.querySelector('body');
    // This makes our body unclickable.
    body.style.pointerEvents = 'none';
    // This makes our body clickable again after 1 second.
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

// This function takes a string parameter of the path you set earlier for
// placement ConstantSourceNode('./media/place.mp3')
function audio(audioURL) {
    // We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    // Play method plays our audio sound.
    audio.play();
}

// This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
        // Start of line
    let x1 = coordX1,
        y1 = coordY1,
        // End of line
        x2 = coordX2,
        y2 = coordY2,
        // Storing variables to update in our animation loop
        x = x1,
        y = y1;
    // This function interacts with the canvas.
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // This method clears content from the last loop iteration.
        c.clearRect(0, 0, 608, 608);
        // Starts new path
        c.beginPath();
        // Moves us to a starting point in our line.
        c.moveTo(x1, y1);
        // This indicates the end point in our line.
        c.lineTo(x, y);
        // Width
        c.lineWidth = 10;
        // Color
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
        // Draws everything we laid out above
        c.stroke();
        // This checks if we've reached the endpoints.
        if (x1 <= x2 && y1 <= y2) {
            // This adds 10 to the previous end x endpoint.
            if (x < x2) { x += 10; }
            // This adds 10 to the previous end y endpoint.
            if (y < y2) { y += 10; }
            // This condition is similar to the one above.
            // This is necassary for the 6, 4, 2 win condition
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        // This condition is similar to the one above.
        // This is necessary for the 6, 4, 2 win condition.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); } 
        }
    }
    // This function clears our canvas after our win line is drawn.
    function clear() {
        // This line starts our animation loop.
        const animationLoop = requestAnimationFrame(clear);
        // This line clears our canvas. 
        c.clearRect(0, 0, 608, 608);
        // This line stops our animation loop.
        cancelAnimationFrame(animationLoop);
    }
    // This line disallows clicking while the win sound is playing.
    disableClick();
    // This line plaays the win sounds.
    audio('./media/Win1.mp3');
    // This line calls our main animation loop.
    animateLineDrawing();
    // This line waits 1 second. Then, clears canvas, resets game, an allows clicking again.
    setTimeout(function () { clear(); reset(); }, 1000);
}
// This function resets the game in the event of a tie or a win
function reset() {
    // This for loop iterates through each HTML square element.
    for (let i = 0; i < 9; i++) {
        // This variable gets the HTML element i
        let square = document.getElementById(String(i));
        // This removes our elements backgroundImage.
        square.style.backgroundImage = '';
    }
    // This resets our array so it is empty and we can start over.
    selectedSquares = [];
}