/*
	Techdegree Project: Unit 4 - Object Oriented Programming Guessing Game
	File: Create a Game class with methods for starting and ending the game, handling interactions, getting random phrases, checking for a win, and removing a life counter.
*/

	
// Game class includes a constructor that takes "missed" (used to track the number of missed guesses by the player), and "phrases" (an array of phrases to use with the game) as arguments
class Game {
	constructor(missed, phrases) {
		this.missed = missed;
		this.phrases = phrases;
	}

	// getRandomPhrase(): this method randomly retrieves one of the phrases stored in the phrases array.
	getRandomPhrase() { 
		let num = Math.round(Math.random() * this.phrases.length);
		let randomPhrase = new Phrase(this.phrases[num]);
		return randomPhrase;
	}

	// handleInteraction(): this method checks to see if the button clicked by the player matches a letter in the phrase.
	handleInteraction() {
			
		// If button clicked does not match a letter in the phrase, then call the removeLife() method
		// If the selected letter matches, call the showMatchedLetter() method on the phrase and then call the checkForWin() method

	}

	// removeLife(): this method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
	removeLife() {
		
	}

	// checkForWin(): this method checks to see if the player has selected all of the letters.
	checkForWin() {
		
	}
	// gameOver(): this method displays a message if the player wins or a different message if they lose.
	gameOver() {
		
	}
	// startGame(): calls the getRandomPhrase() method, and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.
	startGame() {
		this.getRandomPhrase();
		randomPhrase.addPhraseToDisplay();

		document.addEventListener("mousedown", function (e) {
            e.preventDefault();
        });
	}
}






