// document on ready
$(document).ready(function(){

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyALd6Qlvr0Axc9wtDXjt98TCpt2BKpnOfQ",
    authDomain: "employeedatabase-bab3b.firebaseapp.com",
    databaseURL: "https://employeedatabase-bab3b.firebaseio.com",
    storageBucket: "employeedatabase-bab3b.appspot.com",
    messagingSenderId: "1014099083928"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
  var database = firebase.database();

// At the initial load, get a snapshot of the current data.
  database.ref().on("child_added", function(childSnapshot) {
  	
  	// var utcdate = childSnapshot.val().start_date;
  	// var startMonth = $(utcdate).getMonth();
    var startDatetoConvert = childSnapshot.val().start_date
    var convertedStartDate = moment(startDatetoConvert).format('MMM Do YYYY');
    var totalPay = (moment(startDatetoConvert).diff(moment(), 'months'))*(childSnapshot.val().monthly_rate);
// console log employee data in firebase
  	console.log("employee_name: " + childSnapshot.val().employee_name);
  	console.log("employee_role: " + childSnapshot.val().employee_role);
  	console.log("start_date: " + convertedStartDate);
  	console.log("monthly_rate: " + childSnapshot.val().monthly_rate);
  	console.log("time_stamp: " + childSnapshot.val().time_stamp);
    console.log("monthly rate test: " + moment(convertedStartDate).diff(), 'days');
  	// console.log("month: " + startMonth);
  	// console.log("database: " + database);
  	// console.log("database.ref().length: " + database.ref().length);

// for (var i = 0; i < childSnapshot.length; i++) {


// print employee data in firebase to screen
	$("#employeeDisplay").append(
			"<tr>" +
			"<td id='nameDisplay'>" + childSnapshot.val().employee_name + "</td>" +
			"<td id='roleDisplay'>" + childSnapshot.val().employee_role + "</td>" +
			"<td id='startDateDisplay'>" + convertedStartDate + "</td>" +
      "<td id='daysWorked'>" + moment(convertedStartDate).diff(moment(), 'days') +
			"<td id='monthlyRateDisplay'>" + childSnapshot.val().monthly_rate + "</td>" +
      "<td id='totalPay'>" + totalPay +
			"</tr>");


// for loop closing bracket
// }

//on child added closing brackets 
  });

  $("#submit").on('click', function (){
  	// console log click event
  	console.log("submit button click recognized")

  	// variables to collect user input
  	var employeeName = $("#employeeName").val().trim();
  	var employeeRole = $("#role").val().trim();
  	var startDate = Date.parse($("#startDate").val().trim());
  	var monthlyRate = parseInt($("#monthlyRate").val().trim());
  	var timeStamp = firebase.database.ServerValue.TIMESTAMP;

  	// console log variablees to hold user input
  	console.log(employeeName);
  	console.log(employeeRole);
  	console.log(startDate);
  	console.log(monthlyRate);
  	console.log(timeStamp);

  	// add users to database code
	database.ref().push({
		employee_name: employeeName,
		employee_role: employeeRole,
		start_date: startDate,
		monthly_rate: monthlyRate,
		time_stamp: timeStamp
	});
return false;

// submit on click closing brackets
  });

// document on ready closing brackets
});

