/*
Module Name: JavaScript 
Assignment Title: Tutor Marked Assignment (TMA) 
Student Name: Ivan Stoyanov 
Username: istoya01 
Student Number: 12903492
Tutor Name: Tobi Brodie
Submission Date: Thursday, 18 February 2016 
*/


//Sets customerNumbers and winningNumbers as 'global' because their values are required in displayResult()
var customerNumbers;
customerNumbers = 12;
var winningNumbers = [];
winningNumbers.push(12, 17, 24, 37, 38, 43);
//Returns customerNumbers values
function getCustomerNumber(){
	return customerNumbers;
}
//Returns winningNumbers values
function getWinningNumbers(){	
	return winningNumbers;
}
/*
* Checks weekly number against array and updates boolean value accordingly:
* @parameter1 {Integer} customerNumbers
* @parameter2 {Integer} winningNumbers
* @return {Boolean} match 
*/
function checkNumbers(customerNumbers, winningNumbers){
	var match;
	var match  = false;
		for (i = 0; i < winningNumbers.length && !match; i++) {
			if (customerNumbers == winningNumbers[i]) {
				match = true;
			}
		}
		return match;
}
/*
Flags up if a match is found 
@parameter1 {Boolean} match 
*/
function displayResult(match){
  if (match){
    alert("This week Winning numbers are:" + "\n" 
		+ "\n" + winningNumbers + "\n" 
		+ "\n" + "The customer's Number is:" + "\n" 
		+ "\n" + customerNumbers + "\n" 
		+ "\n" + "We have a match and a winner!");
	}else{
	alert("This week Winning numbers are:" + "\n" 
		+ "\n" + winningNumbers + "\n" 
		+ "\n" + "The customer's Number is:" + "\n" 
		+ "\n" + customerNumbers + "\n" 
		+ "\n" + "Sorry, you are not a winner this week");
	}
}
//Initialises the process of checking the lottery result
function init(){
	var result;
	result = checkNumbers(customerNumbers, winningNumbers);
	displayResult(result);
}
window.onload = init();