let lastPocket = 8;
let pocketStep = 4;
let prize = 0;
let currentPrize;
let firstPrize = 100;
let secondPrize = 50;
let thirdPrize = 25;
let two = 2;
let three = 3;
let hundred = 100;
let fifty = 50;
let twentyfive = 25;
let eight = 8;
let nextTour;
let bigNumber = 100000;
let lastTry;

let startGame = confirm('Do you want to play a game?');
if (!startGame) {
	alert('You did not become a billionaire, but can.');
} else {
	for (let i = 0; i < bigNumber; i++) {
		let attempts = 3;
		for (; attempts >= 0; attempts--) {
			switch (attempts) {
				case 0:
					alert('Thank you for your participation. Your prize is: ' +prize+ ' $');
					lastTry = confirm('Do you want to play again?');
					if (lastTry === false) {
						confirm('Do you want to play again?');
					}
					prize = 0;
					firstPrize = hundred;
					secondPrize = fifty;
					thirdPrize = twentyfive;
					lastPocket = eight;
					continue;
				case 1: 
					currentPrize = thirdPrize;
					break;
				case two: 
					currentPrize = secondPrize;
					break;
				case three: 
					currentPrize = firstPrize;
					break;
				default: 
					currentPrize = 0;
			}
			let pocket = Math.floor(Math.random() * (lastPocket + 1));
			let userNumber = prompt('Choose a roulette pocket number from 0 to ' +lastPocket+ '\nAttempts left: ' 
			+attempts+ '\nTotal prise: ' +prize+ '\nPossible prize on current attempt: ' +currentPrize+ '');
			userNumber = parseInt(userNumber);
			if (userNumber === pocket) {
				prize += currentPrize;
				nextTour = confirm('Congratulation, you won! Your prize is: ' +prize+ ' $. Do you want to continue?');
				break;
			} 
		}
	if (nextTour === true) {
		firstPrize = firstPrize * two;
		secondPrize = secondPrize * two;
		thirdPrize = thirdPrize * two;
		lastPocket = lastPocket + pocketStep;
		} else if (nextTour === false) {
			confirm('Do you want to play again?');
		}
	}
}