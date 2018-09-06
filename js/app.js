/*
	Techdegree Project: Unit 4 - Object Oriented Programming Guessing Game
	File: perform basic DOM selection, add event handlers, and to reset the game when it ends
*/

// Global Variables
	const phraseArray = [
		"how are you",
		"you won",
		"good guess",
		"hi five",
		"phrase hunter",
		"oop js",
		"impressive",
		"are you bored yet",
		"isnt this fun",
	]
	const game = new Game(0, phraseArray);



// Creates a new instance of the Game class

// ResetDisplay(): this function hides the start screen overlay
	function resetDisplay(button) {
		button.parentNode.style.display = 'none';
	}

// MarkButton(): this function is called when a player selects a letter. It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
	function markButton(key) {
		key.disabled = true;
		key.className += ' chosen';
		console.log(key);
		//handleInteraction();
	}

// Add an event listener to the "Start Game" button which calls the resetDisplay() function, creates a new Game object, and starts the game.
	$("#btn__reset").on("click",  function() {
		game.startGame();
		resetDisplay(this);
	});

// Add event listeners to each of the keyboard buttons, so that clicking a button calls the markButton() function.
	$(".keyrow button").on("click", function() {
		markButton(this);
		//checkLetter(this.text);
	});



// Making the project your own - The general layout should remain the same, but feel free to make the project your own by experimenting with things like color, background color, font, borders, shadows, transitions, animations and/or the exciting CSS filter property.



// Check for cross-browser consistency




/*   EXCEEDS   */

// Add keyboard functionality using keypress events

// Reset the Game - Add a button to the “success” and “failure” screens that resets the game. 
	// Reset the buttons in the keyboard
	// Generate a new random phrase
	// Set the number of misses to zero.