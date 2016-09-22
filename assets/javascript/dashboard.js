$("document").ready(function(){
	console.log("dashboard.js is loaded");

// event listener for authentication state change
firebase.auth().onAuthStateChanged(function(user) {
    // if (user !== null) {
        console.log('logged in!');
        console.log("user: " + user);
        var userID = firebase.auth().currentUser.uid;
		console.log("userID: " + userID);
       $("#displayName").append(" #" + userID);

                
// var user = firebase.auth().currentUser;
// console.log("user: " + user);


// At the initial load, get a snapshot of the current data.

firebase.database().ref().on("child_added", function(dataSnapshot) {

// data snapshot variables
    var recUserID = dataSnapshot.val().userID;
  	var firstName = dataSnapshot.val().first_name;
  	var lastName = dataSnapshot.val().last_name;
    var phone = dataSnapshot.val().phone;
    var cbDatetoConvert = dataSnapshot.val().date1;
    var cbDate = moment(cbDatetoConvert).format('ddd, MMM Do');
    var cbTimetoConvert = dataSnapshot.val().time1;
    // var cbTime = moment(cbTimetoConvert).format('hh:mm');
    var fund = dataSnapshot.val().fund;
    var giftType = dataSnapshot.val().gift_type;
    var notes = dataSnapshot.val().notes;


//console log the data snapshot variables
console.log("firstName: " + firstName);
console.log("lastName: " + lastName);
console.log("phone: " + phone);
console.log("cbDatetoConvert: " + cbDatetoConvert);
console.log("cbDate: " + cbDate);
console.log("cbTimetoConvert: " + cbTimetoConvert);
// console.log("cbTime: " + cbTime);
console.log("fund: " + fund);
console.log("giftType: " + giftType);
console.log("notes: " + notes);
console.log("userID: " + userID);
console.log("recUserID: " + recUserID)


if(recUserID == userID){

// append to dashboard
$("#cbCards").append(
	'<div class="col s4"><span><div class="card-panel"><h5><span id="firstName">' 
	+ firstName 
	+ ' </span><span id="lastName">' 
	+ lastName 
	+ '</span></h5><p><span id="phoneNumber">' 
	+ phone 
	+ '</span></p><p id="upComingCall">'
	+ cbDate
	+ ', '
	+ cbTimetoConvert
	+ '</p><p><span id="fund">'
	+ fund
	+ ', </span><span id="giftType">'
	+ giftType
	+ '</span></p><p><span class="hide-on-med-and-down" id="notes">'
	+ notes
	+ '</span></p></div></span></div>');


// if recUserID == userID closing bracket
}

// data snapshot closing bracket
});

// if user !== null closing bracket
// }

// auth state listener closing bracket
});


$("#logout").on('click', function(){

	firebase.auth().signOut().then(function() {
  // Sign-out successful.


}, function(error) {
            // variables to hold error messages
            var errorCode = error.code;
            var errorMessage = error.message;

            // console log the error codes
            console.log("errorCode: " + errorCode);
            console.log("errorMessage: " + errorMessage);
});
	                    url = "login.html";
                    $(location).attr("href", url);
// logout close
});



// on ready function closing bracket
})
