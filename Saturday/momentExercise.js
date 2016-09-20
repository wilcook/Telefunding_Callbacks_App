
var randomDate = "02/23/1999";
var utcDate = moment(new Date(randomDate));
var today = moment();

// Using scripts from moment.js write code below to complete each of the following. 
// Console.log to confirm the code changes you made worked.

// 1. ...to convert the randomDate into three other date formats
console.log(moment(utcDate).format('MMM DD YYYY'));
console.log(moment(utcDate).format('dddd, hh:mm:ss'));
console.log(moment(utcDate).format('Do MM YY'));

// 2. ...to determine the time in years, months, days between today and the utcDate
console.log(moment(utcDate).diff(moment(), 'months'));
console.log(moment(utcDate).diff(moment(), 'days'));

// 3 ...to determine the number of days between the randomDate and 02/14/2001

// 4 ...to convert the randomDate to unix time 
// (be sure to look up what unix time even is!!!)

// 5 ...to determine what day of the week and what week of the year 
// this randomDate falls on.

// If you finish early... 
// Start creating HTML inputs and then redisplay the dates using moment.js 
// elsewhere on the page.
console.log("//////////////////////// TRAIN PROBLEM ////////////////////////////");

var now = moment();
console.log("now: " + now);

var nowFormatted = moment(now).format('MM/DD/YY hh:mm:ss');
console.log("nowFormatted: " + nowFormatted);

var firstTrain = Date.parse("09/17/16 03:00 AM");
console.log("firstTrain: " + firstTrain);

var trainFrequency = +420000;
console.log("trainFrequency: " + moment(trainFrequency).format("mm:ss"));

var sinceFirstTrain = moment().diff(firstTrain);
console.log("sinceFirstTrain: " + sinceFirstTrain);

var diffSinceFirstVSNow = moment() - sinceFirstTrain;
console.log("diffSinceFirstVSNow: " + diffSinceFirstVSNow);

var sinceFirstTrainFormatted = moment(sinceFirstTrain).format("hh:mm:ss");
console.log("sinceFirstTrainFormatted: " + sinceFirstTrainFormatted);

var remainderFrequencyNow = trainFrequency % sinceFirstTrain;
console.log("remainderFrequencyNow: " + remainderFrequencyNow);

var remainderFormatted = moment(remainderFrequencyNow).format("mm:ss");
console.log("remainderFormatted: " + remainderFormatted);

var sinceFirstDivByTrainFreq = sinceFirstTrain / trainFrequency;
console.log("sinceFirstDivByTrainFreq: " + sinceFirstDivByTrainFreq);

var sinceFirstModuloTrainFreq = sinceFirstTrain % trainFrequency;
console.log("sinceFirstModuloTrainFreq: " + sinceFirstModuloTrainFreq);

var trainFreqMultSinceFirst = trainFrequency*sinceFirstTrain;
console.log("trainFreqMultSinceFirst: " + trainFreqMultSinceFirst);

var trainsPassed = ((trainFreqMultSinceFirst / 420000) / 60) / 1000;
console.log("trainsPassed: " + trainsPassed);

var lastTrain = (firstTrain + (trainFrequency*sinceFirstTrain));
console.log("lastTrain: " + lastTrain);

var lastTrainFormatted = moment(lastTrain).format("MM/DD/YY hh:mm:ss");
console.log("lastTrainFormatted: " + lastTrainFormatted);

