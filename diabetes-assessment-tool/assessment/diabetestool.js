/*
Module Name: JavaScript 
Assignment Title: Final Marked Assignment (FMA) 
Task: The Diabetes Risk Assessment Tool
Student Name: Ivan Stoyanov 
Username: istoya01 
Student Number: 12903492
Tutor Name: Tobi Brodie
Submission Deadline: Tuesday, 12 April 2016 
*/

//Initiate the diabetes assessment process by pre-checking the lowest score for each risk factor.
function init(){
	// (McFarland 2012: 263)
	document.getElementById("1-25").checked = true; 
	document.getElementById("0-25").checked = true; 
	document.getElementById("no").checked = true; 
	document.getElementById("lowsugar").checked = true; 
	document.getElementById("button").onclick = submitForm;
}

//Display health advice based on the determined level of risk upon clicking the "Calculate" button.
function submitForm(){
	riskLevelAdvice(getValue());
}

/*
*Retrieve the numerical value for each selected answer.
*@return {Number|Array} value; contains the value for all selected answers.
*/
function getValue(){
	var factor;
		factor = document.getElementsByTagName("input");
	var value;
		value = [];
	for (i=0; i<factor.length; i++){
		if (factor[i].checked){
			value.push(factor[i]);
		}
	}
	return value;
}

/*
*Add the value for each selected answer to generate a total diabetes score.
*@param {Number|Array} value; contains the value for all selected answers.
*@return {Number|Integer} score; provides the total sum of the values.
*/
function totalScore(value){
	var score;
		score = 0;
	for (i=0; i<value.length; i++){
		score += parseInt(value[i].value); // (McFarland 2012: 92)
	}
	return score;
}

/*
*Loop through the value array to check for risk factors where users have scored >= 10.
*@param {Number|Array} value; contains the value for all selected answers.
*@return {Number|Array} highRisk; contains only risk factors with a score >= 10.
*/
function highRiskFactor(value){
	var highRisk;
		highRisk = [];
	for (i=0; i<value.length; i++){
		if (parseInt(value[i].value) >= 10){ // (McFarland 2012: 92)
			highRisk.push(value[i].name);
		}
	}
	return highRisk;
}

/*
*Generate health advice for all risk factors where users have scored higher than 10.
*@param {Number|Array} value; contains the value for all selected answers.
*@return {String} message; contains health advice only for risk factors with a score >= 10.
*/
function highRiskMessage(value)	{
	var highRisk;
		highRisk = highRiskFactor(value);
	var message;	
	for (i=0; i<highRisk.length; i++){ 
		// (McFarland 2012: 98)
		if (highRisk.length == 1) {
			message	= "Your main risk factor is your ";
			message += highRisk[0];
		} else if (highRisk.length == 2) {
			message	= "Your main risk factors are your ";
			message	+= highRisk[0] + " and " + highRisk[1];
		} else if (highRisk.length == 3){
			message	= "Your main risk factors are your ";
			message	+= highRisk[0] + ", " + highRisk[1] + " and " + highRisk[2];
		} else {
			message	= "Your main risk factors are your ";
			message	+= highRisk[0] + ", " + highRisk[1] + ", " + highRisk[2] + " and " + highRisk[3];
			}
		}
	return message;
}

/*
Display appropriate health advice for all other factors based on the user's total score.
*@param {Number|Array} value; contains the value for all selected answers.
*/
function riskLevelAdvice(value){
	var riskLevel;
		riskLevel = totalScore(value);
	var message;
		message = highRiskMessage(value);	
		// Session 5 Presentation Slides, Page 24
		if (riskLevel <= 15) {
			document.getElementById("result").className = "some"; 
			document.getElementById("advice").innerHTML = "Your results show that you currently have a low risk of developing diabetes. However, it is important that you maintain a healthy lifestyle in terms of diet and exercise.";
			document.getElementById("advice").className = "some"; 
		} else if (riskLevel <= 25) {
			document.getElementById("result").className = "some"; 
			document.getElementById("advice").innerHTML = "Your results show that you currently have a medium risk of developing diabetes. For more information on your risk factors, and what to do about them, please visit our diabetes advice website at <a href=#>http://www.zha.org.zd</a>.";
			document.getElementById("advice").className = "some";
		} else {
			document.getElementById("result").className = "some"; 
			document.getElementById("advice").innerHTML = "Your results show that you currently have a HIGH risk of developing diabetes. " + message +". We advise that you contact the Health Authority to discuss your risk factors as soon as you can. Please fill in our <a href=contactform.html>contact form</a> and a member of the Health Authority Diabetes Team will be in contact with you.";
			document.getElementById("advice").className = "some"; 
		}
}

window.onload=init;