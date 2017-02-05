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
var customerNumbers = [];
customerNumbers.push(12, 17, 24, 37, 38, 43);
var winningNumbers = [];
winningNumbers.push(12, 17, 24, 37, 38, 43);    
//Returns customerNumbers values
function getCustomerNumbers(){
    return customerNumbers;
}
//Returns winningNumbers values
function getWinningNumbers() {    
    return winningNumbers;
}
/*
* Checks weekly customer array against winning array 
* Increments integer variable by one if a match is found
* @parameter1 {Integer} customerNumbers
* @parameter2 {Integer} winningNumbers
* @return {Integer} match
*/
function checkNumbers(customerNumbers, winningNumbers) {    
    var match = 0;
    for (i=0; i<customerNumbers.length; i++) {
        for (n=0; n<winningNumbers.length; n++) {
            if (customerNumbers[i] == winningNumbers[n]) {
                match++;
            }
        }
    }
    return match;
}
//Displays the number of matches found
function displayResult(match) {    
    var result;
	result = checkNumbers(customerNumbers,winningNumbers);
	alert("This Week's Winning Numbers are: " + "\n" 
		+ "\n" + customerNumbers + "\n" 
		+ "\n" + "The Customer Numbers are: " + "\n" 
		+ "\n" + winningNumbers + "\n" 
		+ "\n" + "Numbers Matched: " + result);
}
//Initiates the process of checking the lottery result
function init() {
    var result;
	result = checkNumbers(customerNumbers,winningNumbers);
	displayResult(result);
}
window.onload = init;