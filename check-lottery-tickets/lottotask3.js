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
	var match 
	match = false;
	//Checks weekly number against array and updates boolean value accordingly
		if (customerNumbers == winningNumbers[0] ||
			customerNumbers == winningNumbers[1] ||
			customerNumbers == winningNumbers[2] ||
			customerNumbers == winningNumbers[3] ||
			customerNumbers == winningNumbers[4] ||
			customerNumbers == winningNumbers[5]) {
			match = true;
			alert("This Week's Winning Numbers are: " + "\n" 
				+ "\n" + winningNumbers + "\n" 
				+ "\n" + "The Customer's Number is: " + "\n" 
				+ "\n" + customerNumbers + "\n"
				+ "\n" + "We have a match and a winner!");
			} else {
			alert("This Week's Winning Numbers are: " + "\n" 
				+ "\n" + winningNumbers + "\n" 
				+ "\n" + "The Customer's Number is: " + "\n" 
				+ "\n" + customerNumbers + "\n"
				+ "\n" + "Sorry, you are not a winner this week.");
			}
}