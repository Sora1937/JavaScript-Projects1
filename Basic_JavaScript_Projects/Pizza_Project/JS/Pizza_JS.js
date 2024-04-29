function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
    // This sets the price for pizza sizes
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Small Pizza") {
		sizeTotal = 8;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
    // This added the pizza price to the total
	runningTotal = sizeTotal;
    // Debugging
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
    // All three of these variables will be passed on to each function
	getTopping(runningTotal,text1); 
};

function getTopping(runningTotal,text1) {
    // These variables allow the toppings to be added to the list of things to buy
	var toppingTotal = 0;
	var selectedTopping = [];
	var toppingArray = document.getElementsByClassName("toppings");
    // This sets the price for toppings
	for (var j = 0; j < toppingArray.length; j++) {
		if (toppingArray[j].checked) {
			selectedTopping.push(toppingArray[j].value);
			console.log("selected topping item: ("+toppingArray[j].value+")");
			text1 = text1+toppingArray[j].value+"<br>";
		}
	}
	var toppingCount = selectedTopping.length;
	if (toppingCount > 1) {
		toppingTotal = (toppingCount - 1);
	} else {
		toppingTotal = 0;
	}
    // This gives the total
	runningTotal = (runningTotal + toppingTotal);
    // This is for debugging
	console.log("total selected topping items: "+toppingCount);
	console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
	console.log("topping text1: "+ text1);
	console.log("Purchase Total: " + "$" + runningTotal + ".00");
    // This is so HTML can get what we want 
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};	