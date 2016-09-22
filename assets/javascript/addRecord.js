$(document).ready(function() {
    console.log("addRecord.js loaded");

    // // formats the phone number
    // 	$('#phone').text(function(i, text) {
    //     return text.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    // });

    // Create a variable to reference the database
    var database = firebase.database();

    // code for moment js
    // var moment = require('moment');
    // moment().format();

    // on click event for submit button
    $("#submit").on('click', function() {

        // console log click event
        console.log("submit button click recognized");

        // variables to collect user input
        var sourceCode = parseInt($("#sourceCode").val().trim());
        var fund = $("#fund").val();
        var giftType = $("#giftType option:selected").val();
        var cID = parseInt($("#cID").val().trim());
        var phoneNumber = $("#phone").val().trim();
        var firstName = $("#firstName").val().trim();
        var lastName = $("#lastName").val().trim();
        var date0 = $("#date0").val();
        var time0 = $("#time0").val();
        var date1 = $("#date1").val();
        var time1 = $("#time1").val();
        var notes = $("#notes").val().trim();
        var dbTimeStamp = firebase.database.ServerValue.TIMESTAMP;
        var now = moment();
        var userID = firebase.auth().currentUser.uid;

        // console log variablees to hold user input
        console.log("sourceCode: " + sourceCode);
        console.log("fund: " + fund);
        console.log("giftType: " + giftType);
        console.log("cID: " + cID);
        console.log("phoneNumber: " + phoneNumber);
        console.log("firstName: " + firstName);
        console.log("lastName: " + lastName);
        console.log("date0: " + date0);
        console.log("time0: " + time0);
        console.log("date1: " + date1);
        console.log("time1: " + time1);
        console.log("notes: " + notes);
        console.log("dbTimeStamp: " + dbTimeStamp);
        console.log("now: " + now);
        console.log("userID: " + userID);

        // add users to database code
        database.ref().push({
            userID: userID,
            sourceCode: sourceCode,
            fund: fund,
            // gift_type: giftType,
            constituent_ID: cID,
            first_name: firstName,
            last_name: lastName,
            date0: date0,
            time0: time0,
            date1: date1,
            time1: time1,
            notes: notes,
            time_stamp: dbTimeStamp
        });
        return false;

        // submit on click closing brackets
    });

    $("#clear").on('click', function() {
        $(".input-field").val("");
        location.reload();
        console.log("clear button click recognized");

        // console log variablees to hold user input
        console.log("sourceCode: " + sourceCode);
        console.log("fund: " + fund);
        console.log("giftType: " + giftType);
        console.log("cID: " + cID);
        // console.log("phoneNumber: " + phoneNumber);
        console.log("firstName: " + firstName);
        console.log("lastName: " + lastName);
        console.log("date0: " + date0);
        console.log("time0: " + time0);
        console.log("date1: " + date1);
        console.log("time1: " + time1);
        console.log("notes: " + notes);
        console.log("dbTimeStamp: " + dbTimeStamp);
        console.log("now: " + now);

        // clear on click closing brackets 
    });


    //closing brackets for document on ready function 
})
