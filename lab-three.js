function isLeapYear(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        return true
    }
        return false  
}

function getDayOfTheWeek(year, month, day) {
    var lastTwoDigitsOfYear = getLastTwoDigitsOfYear(year);
    var quotientOfYear = getQuotient(lastTwoDigitsOfYear, 12);
    var remainderOfYear = getRemainder(lastTwoDigitsOfYear, 12);
    var quotientOfRemainder = getQuotient(remainderOfYear, 4);
    var monthCode = getMonthCode(month);
    
    var total = (quotientOfYear + remainderOfYear + quotientOfRemainder + day + monthCode) % 7
    return getDayCode(total);
}

function getLastTwoDigitsOfYear(num) {
    var numToStr = num.toString();
    console.log(numToStr.length);
    var lastTwoDigits = numToStr.substring(numToStr.length - 2, numToStr.length);
    var strToNum = parseInt(lastTwoDigits); 
    console.log(typeof strToNum);
    console.log(typeof lastTwoDigits);
    return lastTwoDigits;
}

function getQuotient(num, divisor) {
    return Math.floor(num / divisor)
}

function getRemainder(num, divisor) {
    return num % divisor;
    
}

function getMonthCode(month) {
    if (month == "January" || month == "October") {
        return 1
    } else if (month == "February" || month == "March" || month == "November") {
        return 4
    } else if (month == "April" || month == "July") {
        return 0
    } else if (month == "May") {
        return 2
    } else if (month == "June") {
        return 5
    } else if (month == "August") {
        return 3
    } else if (month == "September" || month == "December") {
        return 6
    } else {
        return "Please enter a valid Month, i.e January, February ..."
    }

}

function getDayCode(day) {
    if (day == 0) {
        return "Saturday"
    } else if (day == 1) {
        return "Sunday"
    } else if (day == 2) {
        return "Monday"
    } else if (day == 3) {
        return "Tuesday"
    } else if (day == 4) {
        return "Wednesday"
    } else if (day == 5) {
        return "Thursday"
    } else if (day == 6) {
        return "Friday"
    } else {
        return "Please enter a valid Day, i.e Monday, Tuesday ..."
    }

}

console.log(getDayOfTheWeek(1950, "March", 20))

function makeCalendar() {
    console.log("test");
}


module.exports = {
    makeCalendar: makeCalendar, //export for use in main.js
    getDayOfTheWeek: getDayOfTheWeek,
    isLeapYear: isLeapYear
}


