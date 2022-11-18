function pickWord() {
	let words = [
		"программа",
		"макака",
		"прекрасный",
	];

	return words[Math.floor(Math.random() * words.length)];
}

function setupAnswerArray(word) {
	let answerArray = []
	for (var i = 0; i < word.length; i++) {
		answerArray[i] = "_";
	}
	return answerArray
}

function showPlayerProgress(answerArray) {
	alert(answerArray.join(" "))
}

function getGuess() {
	let guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры");
	return guess
}

function updateGameState(guess, word, answerArray){
	let count = 0
	for (var j = 0; j < word.length; j++) {
		if (word[j] === guess) {
			answerArray[j] = guess;
			count += 1
		}
	}
	return count
}

function showAnswerAndCongratulatePlayer(answerArray) {
	alert(answerArray.join(" "));
	alert("Отлично! Было загадано слово " + word);
}



var word = pickWord();

var answerArray = setupAnswerArray(word);

var remainingLetters = word.length;

while (remainingLetters > 0) {
	showPlayerProgress(answerArray);

	var guess = getGuess();
	if (guess === null) {
		break;
	} else if (guess.length !== 1) {
		alert("Пожалуйста, введите одиночную букву.")
	} else {
		var correctGuesses = updateGameState(guess, word, answerArray);
		remainingLetters -= correctGuesses;
	}
}
showAnswerAndCongratulatePlayer(answerArray);