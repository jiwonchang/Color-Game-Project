var colors = [];
var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode");

init();

var correctGuess = false;

function init() {
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons() {
	// mode buttons event listeners
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			// ternary operator (does the same as "if" statements for specific instances)
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			// if (this.textContent === "Easy") {
			// 	numSquares = 3;
			// } else {
			// 	numSquares = 6;
			// }
			reset();
		})
	}
}

function setUpSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				correctGuess = true;
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		})
	}
}

function reset() {
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a random color from array
	pickedColor = pickColor();
	// change color display to match picked color
	colorDisplay.textContent = pickedColor.toUpperCase();
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}

// easyBtn.addEventListener("click", function() {
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";
// 	resetButton.textContent = "New Colors";
// 	h1.style.backgroundColor = "steelblue";
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click", function() {
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";
// 	resetButton.textContent = "New Colors";
// 	h1.style.backgroundColor = "steelblue";
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// })

function changeColors(color) {
	// loop through all squares
	for (var i = 0; i < squares.length; i++) {
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// repeat num times
	for (i = 0; i < num; i++) {
		// get random color and push into array
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor() {
	// pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	color = "rgb(" + r + ", " + g + ", " + b + ")";
	return color;
}

resetButton.addEventListener("click", function() {
	reset();
})

