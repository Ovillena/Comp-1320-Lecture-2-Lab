/*
if (year is not divisible by 4) then (it is a common year)
else if (year is not divisible by 100) then (it is a leap year)
else if (year is not divisible by 400) then (it is a common year)
else (it is a leap year)
*/

function isLeapYear(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        return true
    } else {
        return false
    }   
}

function getDayOfTheWeek(year, month, day) {
    
}

//test
console.log(isLeapYear(4))
console.log(isLeapYear(4))
console.log(isLeapYear(8))
console.log(isLeapYear(100))
console.log(isLeapYear(400))
console.log(isLeapYear(404))
console.log(isLeapYear(104))
console.log(isLeapYear(200))

function makeCalendar(){
console.log("test");
}


module.exports = {
    makeCalendar:makeCalendar, //export for use in main.js
    getDayOfTheWeek:getDayOfTheWeek,
    isLeapYear:isLeapYear
}