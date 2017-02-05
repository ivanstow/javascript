/*
Module Name: JavaScript 
Assignment Title: Final Marked Assignment (FMA) 
Task: Zedland Health Authority Contact Form with JavaScript
Student Name: Ivan Stoyanov 
Username: istoya01 
Student Number: 12903492
Tutor Name: Tobi Brodie
Submission Deadline: Tuesday, 12 April 2016 
*/

//Initiate the validation process.
function init() {
  setFocus();
  zhaNumberTooltip();
  textHint();
  displayResult();
}

//Set the focus to the "First Name" field when the page loads.
function setFocus() {
  var firstName; 
  firstName = document.getElementById("fname"); // Session 7 Presentation Slides, Page 13
  firstName.focus(); // (McGrath 2013: 148)
}

//Display a tooltip next to the "Health Authority Number" field.
function zhaNumberTooltip() {           
	// Session 8 Presentation Slides, Page 8
	document.getElementById("image").onmouseover = function() { 
	var tooltip;
		tooltip = document.getElementById("tooltip");
		tooltip.className = "tooltip";
  }; 	    
	document.getElementById("image").onmouseout = function() { 
	var tooltip;
		tooltip	= document.getElementById("tooltip");
		tooltip.className = "notooltip";
  }; 	
}	

/*
Set a default value for the "Health Authority Number" field.
Remove it when the user clicks into the field.
Replace it when they tab out of the field without completing it.
*/
function textHint() { 
	// Session 8 Presentation Slides, Page 7
	var defaultText;
		defaultText	= "e.g. ZHA346783";
	var field;
		field = document.getElementById("zhanumber");
		field.value = defaultText;
		field.onfocus = function() { 
			if (this.value === defaultText) {
				field.value = "";
				this.className = "onfocus";
			}
		};
		field.onblur = function() { 
			if (this.value === "") {
				field.value = defaultText;
				this.className = "onblur";
			}
		};	
}

//Display a warning if submission has failed, or let the user know if submission has been successful. 
function displayResult() {
  document.getElementById("button").onclick = submitForm;
}

//Use a boolean to check that the values entered into each field have met the validation criteria.
function submitForm() {
	var allowSubmit;
	var firstNameEntered;
		firstNameEntered = validateFirstName();
	var lastNameEntered;
		lastNameEntered = validateLastName();
	var titleEntered;
		titleEntered  = validateTitle();
	var zahNumberEntered;
		zahNumberEntered  = validateZhaNumber();
	var emailAddressEntered;
		emailAddressEntered  = validateEmailAddress();
	var telNumberEntered;
		telNumberEntered  = validateTelNumber();
	var message;
		message = document.getElementById("success");
			if (firstNameEntered === false || 
				lastNameEntered === false || 
				titleEntered === false ||
				zahNumberEntered === false || 
				emailAddressEntered === false || 
				telNumberEntered === false) {
					allowSubmit = false;
					// Session 5 Presentation Slides, Page 24
					message.innerHTML = "Your details could not submitted at this time. Please review the errors on screen.";
					message.className = "onsubmit"; 
				} else {
					allowSubmit = true;
					// Session 5 Presentation Slides, Page 24
					message.innerHTML = "Your details were submitted successfully. A member of staff will contact you soon.";
					message.className = "onsubmit"; 
			}
	return allowSubmit;
}

//Ensure that the "First Name" field contains more than one character without numbers or other disallowed characters.
function validateFirstName() { 
	// Session 8 Presentation Slides, Page 17-19
	var submitFirstName;
		submitFirstName	= true;
	var firstName;
		firstName = document.getElementById("fname").value;
	var firstNameRegEx;
		firstNameRegEx = /^[a-zA-Z]+$/;
	var firstNameError;
		firstNameError = document.getElementById("firstnameerror");
			if (firstName === "") {
				firstNameError.innerHTML = "This is a mandatory field.";
				submitFirstName = false;
			} else if (!firstNameRegEx.test(firstName)) {
				firstNameError.innerHTML = "The name you have entered is not valid.";
				submitFirstName = false;
			} else {
				firstNameError.innerHTML = "";
				submitFirstName = true;
			}
	return submitFirstName;
}

//Ensure that the "Last Name" field contains more than one character without numbers or other disallowed characters, except for a hyphen.
function validateLastName() { 
	// Session 8 Presentation Slides, Page 17-19
	var submitLastName;
		submitLastName = true;
	var lastName;
		lastName = document.getElementById("lname").value;
	var lastNameRegEx;
		lastNameRegEx = /^-?[a-zA-Z]+$|^[a-zA-Z]+-?$|^[a-zA-Z]+-?[a-zA-Z]+$/;
	var lastNameError;
		lastNameError = document.getElementById("lastnameerror");
			if (lastName === "") {
				lastNameError.innerHTML = "This is a mandatory field.";
				submitLastName = false;
			} else if (!lastNameRegEx.test(lastName)) {
				lastNameError.innerHTML = "The name you have entered is not valid.";
				submitLastName = false;
			} else {
				lastNameError.innerHTML = "";
				submitLastName = true;
			}
	return submitLastName;
}

//Ensure that an option has been selected from the "Title" dropdown.
function validateTitle() { 
	// Session 8 Presentation Slides, Page 17-19
	var submitTitle;
		submitTitle = true;
	var title;
		title = document.getElementById("title");
	var titleError;
		titleError = document.getElementById("titleerror");
		if (title.selectedIndex === 0) { // (McGrath 2013)
			titleError.innerHTML = "This is a mandatory field.";
			submitTitle = false;
		} else {
			titleError.innerHTML = "";	
			submitTitle = true;
		}
	return submitTitle;
}

//Ensure that the "Health Authority Number" field contains a six-digit integer prefixed with the letters ZHA.
function validateZhaNumber() { 
	// Session 8 Presentation Slides, Page 17-19
	var submitZhaNumber;
		submitZhaNumber = true;
	var zhaNumberRegEx;
		zhaNumberRegEx = /^[zZ]+[hH]+[aA]+[0-9]{6}$/; 
	var zhaNumber;
		zhaNumber = document.getElementById("zhanumber").value;
	var zhaNumberError;
		zhaNumberError = document.getElementById("zhanumbererror");
			if (zhaNumber === "") {
				zhaNumberError.innerHTML = "This is a mandatory field.";	
				submitZhaNumber = false;
			} else if (!zhaNumberRegEx.test(zhaNumber)) {
				zhaNumberError.innerHTML = "The number you have entered is not valid.";
				submitZhaNumber = false;
			} else {
				zhaNumberError.innerHTML = "";
				submitZhaNumber = true;
			}
	return submitZhaNumber;
}

//Ensure that a valid email address has been entered.
function validateEmailAddress() { 
	// Session 8 Presentation Slides, Page 17-19
	var submitEmailAddress;
		submitEmailAddress = true;
	var emailAddressRegEx;
		emailAddressRegEx = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,}$/;
	var emailAddress;
		emailAddress = document.getElementById("email").value;
	var emailError;
		emailError = document.getElementById("emailerror");
			if (emailAddress === "") {
				emailError.innerHTML = "This is a mandatory field.";
				submitEmailAddress = false;
			} else if (!emailAddressRegEx.test(emailAddress)) {
				emailError.innerHTML = "The email address you have entered is not valid.";
				submitEmailAddress = false;
			} else {
				emailError.innerHTML = "";
				submitEmailAddress = true;
			}
	return submitEmailAddress;
}

//Ensure that the "Telephone Number" field contains eleven digits and no letters, spaces or other disallowed characters. 
function validateTelNumber() { 
	// Session 8 Presentation Slides, Page 17-19
	var submitTelNumber;
		submitTelNumber = true;
	var telNumberRegEx;
		telNumberRegEx = /^[0-9]+$/;
	var telNumber;
		telNumber = document.getElementById("telnumber").value;
	var telNumberError;
		telNumberError = document.getElementById("telnumbererror");
			if (telNumber !== "" && !telNumberRegEx.test(telNumber)) {
				telNumberError.innerHTML = "The number you have entered is not valid.";
				submitTelNumber = false;
			} else {
				telNumberError.innerHTML = "";
				submitTelNumber = true;
			}
	return submitTelNumber;
}

window.onload = init;