// variables 
var email = $("#email").val().trim();
var password = $("#password").val().trim();
var moment = require('moment');
moment().format();

// forgot password on click event
$("#forgot").on('click', function(){
		console.log("forgot button click si recognized");

	var auth = firebase.auth();
	var emailAddress = "user@example.com";

	auth.sendPasswordResetEmail(emailAddress).then(function() {
		  // Email sent.
		}, function(error) {
		  // An error happened.
	});

//closing brackets for forgot password on click event 
});