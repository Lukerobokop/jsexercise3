/**
* @author Rokop, Luke (lrokop14@gmail.com)
* @version 0.0.1
* @summary Exercise 3 || created 12-15-19
* @todo
*/

 "use strict";
 const PROMPT = require ('readline-sync');
 
 let i, number, color, answer, correct, continueGame;
 const RED = "Red";
 const GREEN = "Green";
 const BLUE = "Blue";
 const ORANGE = "Orange";
 const YELLOW = "Yellow";
 const MAX_ROUND = 9;
 
 function main(){
	 setI();
	 while(i <= MAX_ROUND){
	 setNumber();
	 setColor();
	 setAnswer();
	 setCorrect();
	 i++
	 }
	 setContinueGame();
 }
 
 main();
 
 function setI(){
	 i = 0
 }
 
 function setNumber(){
	number = Math.round(Math.random() *4)+1;
	}
	
 function setColor(){
	 if(number == 1){
		 color = RED;
	 }
	 else if(number == 2){
		 color = GREEN;
	 }
	 else if(number == 3){
		 color = BLUE;
	 }
	 else if(number == 4){
		 color = ORANGE;
	 }
	 else{
		 color = YELLOW;
	 }
 }
 
	function setAnswer(){
		if(i == 0){
		console.log(`Welcome to the ESP game! The rule is simple; Try to guess which color the computer picked.`)
		}
	answer = PROMPT.question (`\nWhat color did the computer pick? [Red=1 Green=2 Blue=3 Orange=4 Yellow=5]:`)
}

	function setCorrect(){
		if(correct == undefined){
			correct = 0;
		}
		if (number == answer){
			console.log(`Good job! that was the right answer!`)
			correct = correct + 1;
		}else{
			console.log(`Sorry the correct color was ${color}`)
		}
	}
	
	function setContinueGame(){
		console.log(`Thank you for playing! You scored ${correct} out of 10`)
		continueGame = PROMPT.question(`\nWould you like to play again? {1 = yes, 0 = no`)
	if(continueGame == 1){
		return main
	}else if (continueGame == 0){
		console.log (`Thank you for playing!`)
	}else{
		console.log(`\nThat is an invalid response`)
		return setContiueGame
		}
	}