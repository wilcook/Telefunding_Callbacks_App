
$("#login").on('click', function(){
//console log click event 
	console.log("login click recognized");

// variables 
	var email = $("#email").val().trim();
	var password = $("#password").val().trim();

// authentication
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

// test authentication
	console.log("firebase.User: " + firebase.User);
	console.log("firebase.provider: " + firebase.provider);
// console log the variables
	console.log("email: " + email);

// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;

// firbase email and password authentication closing brackets
});


	this.onAuth('onComplete', function(authData) {
	  if (authData) {
	    console.log("Authenticated with uid:", authData.uid);
	  } else {
	    console.log("Client unauthenticated.")
	  }
});
	return false;

// login on click closing brackets
});

// forgot password on click event
$("#forgot").on('click', function(){
	console.log("forgot button click is recognized");

	var auth = firebase.auth();
	var email = $("#email").val().trim();

	auth.sendPasswordResetEmail(email).then(function() {
		  // Email sent.
		}, function(error) {
		  // An error happened.
	});

	return false;
//closing brackets for forgot password on click event 
});

