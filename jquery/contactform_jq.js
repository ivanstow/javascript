/*
Module Name: JavaScript 
Assignment Title: Final Marked Assignment (FMA) 
Task: Zedland Health Authority Contact Form with jQuery
Student Name: Ivan Stoyanov 
Username: istoya01 
Student Number: 12903492
Tutor Name: Tobi Brodie
Submission Deadline: Tuesday, 12 April 2016 
*/

//Initiate the validation process.
$(document).ready(function(){ 
	$("#fname").focus(); //Set the focus to the "First Name" field when the page loads.
	$("#image").bind({ //Display a tooltip next to the "Health Authority Number" field.
		"mouseover": function(){
			$("#tooltip").addClass("tooltip");//(McFarland 2012: 154-8)
		},
		"mouseout": function() {
			$("#tooltip").removeClass("tooltip");//(McFarland 2012: 154-8)
		},
	});
	/*
	Set a default value for the "Health Authority Number" field.
	Remove it when the user clicks into the field.
	Replace it when they tab out of the field without completing it.
	*/
	$("#zhanumber").val("e.g. ZHA346783"); //  (McFarland 2012: 262)
	$("#zhanumber").focus(function() { 
        if (this.value === "e.g. ZHA346783") {
            $(this).val(""); 
			$(this).css( // Session 6, Presentation Slides, Page 22
				{"color": "#000000", 
				"font-style": "normal"});
        }
    });
    $("#zhanumber").blur(function() { // Session 6, Presentation Slides, Page 22
        if (this.value === "") {
            $(this).val("e.g. ZHA346783"); //  (McFarland 2012: 262)
			$(this).css(
				{"color": "#A8A8A8",
				"font-style": "italic"});
        }
    });	
	//Use a boolean to check that the values entered into each field have met the validation criteria.
	$("#contactform").submit(function() {
		var submitFirstName = true;
		var submitLastName = true;
		var submitTitle = true;
		var submitZhaNumber = true;
		var submitEmailAddress = true;
		var submitTelNumber = true;
			// Session 8 Presentation Slides, Page 17-19
			if ($("#fname").val() == ""){ //  (McFarland 2012: 262)
				submitFirstName = false;
				$("#firstnameerror").html("This is a mandatory field.");
			} else if (!/^[a-zA-Z]+$/.test($("#fname").val())){
				submitFirstName = false;
				$("#firstnameerror").html("The name you have entered is not valid.");
			}
			// Session 8 Presentation Slides, Page 17-19
			if ($("#lname").val() == ""){ //  (McFarland 2012: 262)
				submitLastName = false;
				$("#lastnameerror").html("This is a mandatory field.");
			} else if (!/^-?[a-zA-Z]+$|^[a-zA-Z]+-?$|^[a-zA-Z]+-?[a-zA-Z]+$/.test($("#lname").val())){
				submitLastName = false;
				$("#lastnameerror").html("The name you have entered is not valid.");
			}
			// Session 8 Presentation Slides, Page 17-19
			if ($("#title").val() == ""){ //  (McFarland 2012: 262)
				submitTitle = false;
				$("#titleerror").html("This is a mandatory field.");
			} 
			// Session 8 Presentation Slides, Page 17-19
			if ($("#zhanumber").val() == ""){ //  (McFarland 2012: 262)
				submitZhaNumber = false;
				$("#zhanumbererror").html("This is a mandatory field.");
			} else if (!/^[zZ]+[hH]+[aA]+[0-9]{6}$/.test($("#zhanumber").val())){
				submitZhaNumber = false;
				$("#zhanumbererror").html("The number you have entered is not valid.");
			}	
			// Session 8 Presentation Slides, Page 17-19
			if ($("#email").val() == ""){ //  (McFarland 2012: 262)
				submitEmailAddress = false;
				$("#emailerror").html("This is a mandatory field.");
			} else if (!/[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,}$/.test($("#email").val())){
				submitEmailAddress = false;
				$("#emailerror").html("The email address you have entered is not valid.");
			}
			// Session 8 Presentation Slides, Page 17-19
			if (!/^[0-9]+$/.test($("#telnumber").val())){
				submitTelNumber = false;
				$("#telnumbererror").html("The number you have entered is not valid.");
			} else if ($("#telnumber").val() == ""){ //  (McFarland 2012: 262)
				submitTelNumber = true;
				$("#telnumbererror").html("");
			}
				//Use a boolean to display a warning if submission has failed, or let the user know if submission has been successful. 
				var allowSubmit;
					if (submitFirstName || 
						submitLastName || 
						submitTitle || 
						submitZhaNumber || 
						submitEmailAddress || 
						submitTelNumber) {
						allowSubmit = true;
						$("#success").html("Your details were submitted successfully. A member of staff will contact you soon.");
						$("#success").addClass('onsubmit'); //(McFarland 2012: 154-8)
					} else {
						allowSubmit = false;
						$("#success").html("Your details could not submitted at this time. Please review the errors on screen.");	
						$("#success").addClass('onsubmit'); //(McFarland 2012: 154-8)
					}
				return allowSubmit;
	});
});