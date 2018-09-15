/*
	Techdegree Project: Unit 4 - Object Oriented Programming Guessing Game
	File: Create a Game class with methods for starting and ending the game, handling interactions, getting random phrases, checking for a win, and removing a life counter.
*/

	
// Game class includes a constructor that takes "missed" (used to track the number of missed guesses by the player), and "phrases" (an array of phrases to use with the game) as arguments
class Game {
	constructor(missed, phrases) {
		this.missed = missed;
		this.phrases = phrases.map((phrase) => new Phrase(phrase));
	}

	// getRandomPhrase(): this method randomly retrieves one of the phrases stored in the phrases array.
	getRandomPhrase() { 
		let phrase = this.phrases
		var randomPhrase = phrase[Math.floor(Math.random() * phrase.length)];
		return randomPhrase;
	}

	// handleInteraction(): this method checks to see if the button clicked by the player matches a letter in the phrase.
	handleInteraction(letter) {
		let checkLetters = this.getRandomPhrase().checkLetter(letter);
		// If button clicked does not match a letter in the phrase, then call the removeLife() method
		// If the selected letter matches, call the showMatchedLetter() method on the phrase and then call the checkForWin() method
		if (checkLetters === true) {
			this.getRandomPhrase().showMatchedLetter(letter);
			letter.setAttribute('class', 'key chosen');
			this.checkForWin();
		} else {
			this.removeLife();
			letter.setAttribute('class', 'key wrong');
			this.checkForWin();
		}

	}

	// Handle keyboard functionality
	handleKeydown(letter) {
		markButton(document.querySelector('#' + letter));
	}

	// removeLife(): this method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
	removeLife() {
		lives[this.missed].setAttribute("src", "images/lostHeart.png");
		this.missed += 1;
	}

	// checkForWin(): this method checks to see if the player has selected all of the letters.
	checkForWin() {
		const lost = 'You Lose';
		const win = 'You Win';
		if (this.missed === 5) {
			this.gameOver(lost);
		} else if (shownLetters === phraseLetters.filter((character) => character !== " ").length) {
			this.gameOver(win);
		} else {

		}
	}

	// gameOver(): this method displays a message if the player wins or a different message if they lose.
	gameOver(result) {
		backgroundGradient();
		startGame.parentNode.style.display = 'flex';
		const results = document.querySelector('#game-over-message');
		startGame.textContent = "New Game";
		if (result === 'You Lose') {
			results.textContent = 'You Lost! Wanna Play Again?';
		} else {
			results.textContent = 'You Won! Wanna Play Again?';
		}
		this.gameReset();
	}

	// startGame(): calls the getRandomPhrase() method, and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.
	startGame() {
		const currentPhrase = this.getRandomPhrase();
		currentPhrase.addPhraseToDisplay();

		document.addEventListener("mousedown", function (e) {
            e.preventDefault();
        });
	}

	//resets the game (resets lives, clears phrase)
	gameReset() {
		this.missed = 0;
		shownLetters = 0;
		phraseLetters = [];
		for (let i=0; i < lives.length; i++) {
		  lives[i].setAttribute("src", "images/liveHeart.png");
		}
		let choseKeys = document.querySelectorAll('.key[disabled]');
		for (let i = 0; i < choseKeys.length; i++) {
			choseKeys[i].disabled = false;
			choseKeys[i].setAttribute('class', 'key');
		}
		let letters = document.querySelectorAll('#phrase li');
		for (let i = 0; i < letters.length; i++) {
			letters[i].remove();
		}
	}

}






