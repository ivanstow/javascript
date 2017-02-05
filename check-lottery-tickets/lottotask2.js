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
    alert("This Week's Winning Numbers are: " 
		+ "\n" + winningNumbers + "\n" 
		+ "The Customer's Number is: " 
		+ "\n" + customerNumbers);
}