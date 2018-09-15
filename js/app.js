/*
	Techdegree Project: Unit 4 - Object Oriented Programming Guessing Game
	File: perform basic DOM selection, add event handlers, and to reset the game when it ends
*/

// Global Variables
	const phraseArray = [
		"how are you",
		"you won",
		"good guess",
		"high five",
		"phrase hunter",
		"oop js",
		"impressive",
		"are you bored yet",
		"isnt this fun",
	]
	let phraseLetters = [];
	let startGame = document.querySelector("#btn__reset");
	const lives = document.querySelectorAll('.tries img');
	let shownLetters = 0;
	let game = new Game(0, phraseArray);
	let keys = document.querySelectorAll('#qwerty button');
	let keyObject = "";
	
	for (let i = 0; i < keys; i++) {
		keys[i].setAttribute('id', keys[i].textContent);
	}

// ResetDisplay(): this function hides the start screen overlay
	function resetDisplay(button) {
		button.parentNode.style.display = 'none';
		//document.querySelector('#phrase ul').removeChild('li');
	}

// MarkButton(): this function is called when a player selects a letter. It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
	function markButton(key) {
		key.disabled = true;
		game.handleInteraction(key);
	}

	function startTheGame() {
		for (let i = 0; i < keys.length; i++) {
			keys[i].setAttribute('id', keys[i].textContent);
		}
		game.startGame();
		resetDisplay(startGame);
	}
// Add an event listener to the "Start Game" button which calls the resetDisplay() function, creates a new Game object, and starts the game.
	startGame.addEventListener('click',()=>{
		startTheGame();
	});

// Add event listeners to each of the keyboard buttons, so that clicking a button calls the markButton() function.
	let keyboardButton = document.querySelector('#qwerty');
	keyboardButton.addEventListener('click',(e)=>{
		if (e.target.className === 'key') {
			markButton(e.target);
		}
	});


// Add keyboard functionality using keypress events
	document.addEventListener('keypress', function(e){
		if (startGame.parentNode.style.display === 'none') {
			if (e.key === 'Enter') {
				// if game hasn't started and "Enter" button is pressed, start game, otherwise do nothing.
				e.preventDefault();
			// if button pressed is a letter, enter handleKeydown() in game class, otherwise do nothing.
			} else if (/[a-z]/i.test(e.key)) {
			   	game.handleKeydown(e.key); 
			} else {
				e.preventDefault();	
			}
		} else {
			if (e.key === 'Enter') {
				// if game hasn't started and "Enter" button is pressed, start game, otherwise do nothing.
				startTheGame();
			// if button pressed is a letter, enter handleKeydown() in game class, otherwise do nothing.
			} else {
				e.preventDefault();	
			}
		}
	});





// Additional Touches - creating random colors and gradients

// The getRandomColor function gets random numbers to create random rgb colors, and returns rgb colors
function getRandomColor1(red, green, blue) {
	const _red = red
	const _green = green
	const _blue = blue
	const rgb1 = `rgb(${_red}, ${_green}, ${_blue})`;
  	return rgb1;
}


function getRandomColor2(red2, green2, blue2) {
	const _red2 = red2
	const _green2 = green2
	const _blue2 = blue2
	const rgb2 = `rgb(${_red2}, ${_green2},${_blue2})`;
	return rgb2;
}


// Find the opposite color value of the middle of the Random Gradient, and changes banner solid color button background color and text
function getOppositeRandomColor(red, green, blue, red2, green2, blue2) {
	const opposite_red = 255 - ((red + red2) /2);
	const opposite_green = 255 - ((green + green2) /2);
	const opposite_blue = 255 - ((blue + blue2) /2);
	const opposite_rgb = `rgb(${opposite_red}, ${opposite_green},${opposite_blue})`;
  	const rgbAvg = (opposite_red + opposite_green + opposite_blue) / 3;
  
	document.querySelector('#btn__reset').style.backgroundColor = opposite_rgb;
        
    if (rgbAvg < 170) {
        document.querySelector('#btn__reset').style.color = 'white';
    } else {
        document.querySelector('#btn__reset').style.color = 'black';
    }
    return opposite_rgb;
}

// The backgroundGradient funtion loads new background color
function backgroundGradient() {
	const red = Math.floor((Math.random() * 255) + 1 );
	const green = Math.floor((Math.random() * 255) + 1 );
	const blue = Math.floor((Math.random() * 255) + 1 );
	const red2 = Math.floor((Math.random() * 255) + 1 );
	const green2 = Math.floor((Math.random() * 255) + 1 );
	const blue2 = Math.floor((Math.random() * 255) + 1 );
  
	const rgb1 = getRandomColor1(red, green, blue);
	const rgb2 = getRandomColor2(red2, green2, blue2);
	const opposite_rgb = getOppositeRandomColor(red, green, blue, red2, green2, blue2);

    const gradient = `linear-gradient(to bottom right, ${rgb1}, ${rgb2})`;
	document.querySelector('.start').style.backgroundImage = gradient;
	document.querySelector('.header').style.color = opposite_rgb;
	return gradient;	
}

backgroundGradient();


