/*
	Techdegree Project: Unit 4 - Object Oriented Programming Guessing Game
	File: Create a Phrase class to handle the creation of phrases
*/
	
	
// Phrase class includes a constructor that accepts a phrase as an argument
class Phrase {
	constructor(phrase) {
		this.phrase = phrase;
	}

	// addPhraseToDisplay(): this adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one list item for each letter. See the example_phrase_html.txt file for an example of what the render HTML for a phrase should look like when the game starts. When the player correctly guesses a letter, the empty box is replaced with a the matched letter (see the showMatchedLetter() method below. Make sure the phrase displayed on the screen doesn't include spaces.
	addPhraseToDisplay() {
			let currentPhrase = this.phrase;
			for (let i = 0; i < currentPhrase.length; i++) {
				phraseLetters.push(currentPhrase[i]);
				let displayPhraseLi = document.createElement('li');
				if (currentPhrase[i] === " ") {
					displayPhraseLi.className = `hide space`;
				} else {
					displayPhraseLi.className = `hide letter ${currentPhrase[i]}`;
					displayPhraseLi.textContent = currentPhrase[i];
				}
				displayPhraseLi.text = currentPhrase[i];
				document.querySelector('#phrase ul').append(displayPhraseLi);
			}

		}

	// checkLetter(): checks to see if letter selected by player matches a letter in the phrase.
	checkLetter(letter) {
		let currentLetter = letter.textContent;
		let inArray = phraseLetters.includes(currentLetter);
		return inArray;
	}

	// showMatchedLetter(): reveals the letter(s) on the board that matches player's selection.
	showMatchedLetter(letter) {
		let currentLetter = letter.textContent;
		let letterBoxes = document.querySelectorAll('.letter');
		for (let i = 0; i < letterBoxes.length; i++) {
			if (letterBoxes[i].classList.contains(currentLetter)) {
				letterBoxes[i].classList.remove('hide');
				letterBoxes[i].classList.add('show');
				letterBoxes[i].textContent = currentLetter;
				shownLetters += 1;
			}
		}
	}
}


