/*
Module Name: JavaScript 
Assignment Title: Tutor Marked Assignment (TMA) 
Student Name: Ivan Stoyanov 
Username: istoya01 
Student Number: 12903492
Tutor Name: Tobi Brodie
Submission Date: Thursday, 18 February 2016 
*/


window.onload = function() {
    var customerNumbers; 
	//Adds weekly number
	customerNumbers = 12;
	var winningNumbers = []; 
	//Adds winning numbers to the end of the array
	winningNumbers.push(12, 17, 24, 37, 38, 43);
	//Uses boolean value to flag up if a match is found 
	var match;
	match = false;
	//Checks weekly number against array and updates boolean value accordingly
	for (i = 0; i < winningNumbers.length && !match; i++) {
		if (winningNumbers[i] == customerNumbers) {
		match = true;
		}
	}
	if (match) {
		alert("This week Winning numbers are:" + "\n" 
		+ "\n" + winningNumbers + "\n" 
		+ "\n" + "The customer's Number is:" + "\n" 
		+ "\n" + customerNumbers + "\n" 
		+ "\n" + "We have a match and a winner!");
	} else {
		alert("This week Winning numbers are:" + "\n" 
		+ "\n" + winningNumbers + "\n" 
		+ "\n" + "The customer's Number is:" + "\n" 
		+ "\n" + customerNumbers + "\n" 
		+ "\n" + "Sorry, you are not a winner this week");
	}
}