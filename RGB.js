// alert("connected");
var numOfSquares = 6
var color = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
// var numOfSquares = 6
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	//mode button event listener
	setupSquares();
	

}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent ==="Easy" ? numOfSquares = 3: numOfSquares = 6;
		// if(this.textContent == "Easy"){
		// 	numOfSquares = 6;
		// }else{
		// 	numOfSquares = 3;
		// }
		reset();

	});
}

}
function setupSquares(){
	for( var i = 0; i < squares.length; i++){
		
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if (clickedColor == pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				resetButton.textContent = "Play Again";


			}else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"; //Faded
				// alert("Wrong!!");
			}
			// alert("Clicked")
			// alert(this.style.background);
		})
	}
	reset();
}


function reset(){
	color = generateRandomColors(numOfSquares);
	// pick a new random color;
	pickedColor = pickColor();
	// change color display to matched 
	// change colors
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	for( var i = 0; i < squares.length; i++){
		if(color[i]){
			squares[i].style.display = "block";
			squares[i].style.background = color[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}

	h1.style.background = "steelblue";

}






resetButton.addEventListener("click", function(){
	
	reset();

})



function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * color.length ); // pick random number based on color array
	return color[random];
}

function generateRandomColors(num){
	//Make an array
	//Add num random colors to arr
	//return the arr
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());  //get random color and push it to arr



	}

	return arr;
}


function randomColor(){
	//pick a red from 0 to 255 
	//pick a blue from 0 to 255 
	//pick a green from 0 to 255 
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")"; // CSS tricky bug
}


