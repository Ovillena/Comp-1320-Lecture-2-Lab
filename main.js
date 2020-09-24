var dateFunctions= require('./lab-three.js'); //import lab-three.js file into main.js
var readlineSync= require('readline-sync'); //'npm i readline-sync' in terminal to install package for user input.

dateFunctions.makeCalendar;//call function from lab-three.js, comes from module.export =...

getDayOfTheWeekForUserDate();

function getDayOfTheWeekForUserDate(){
var userInputDate = readlineSync.question('Please enter a date(year/month/day). eg. 1991/01/31: '); //asks user to enter a date

var dateArray= []; //create array to split up year,month, and day 
dateArray=userInputDate.split("/");

if(dateFunctions.isLeapYear(dateArray[0]) == false && dateArray[1] == "02" && dateArray[2] > "28"){ 
    console.log("This is an invalid date."); //if its not a leap year and the month is february, will only allow days to be up to 28.
}
else if(dateArray[1] == "02" && dateArray[2] > "29"){
    console.log("This is an invalid date."); //if it is a leap year then days can be up to 29
}
else if((dateArray[1] == "04" || dateArray[1] == "06" || dateArray[1] == "09" || dateArray[1] == "11") && dateArray[2] > 30){
    console.log("This is an invalid date."); // april/june/sept/nov have only 30 days in them 
}
else if(dateArray[2] > 31){
    console.log("This is an invalid date."); // all the other months can't go passed 31 days
}
else{
    dateFunctions.getDayOfTheWeek(dateArray[0],dateArray[1],dateArray[2]); //if it's a valid date then it finds day of the week
    console.log("this is a valid date.") //<--shows test to see if dates are valid
}

}