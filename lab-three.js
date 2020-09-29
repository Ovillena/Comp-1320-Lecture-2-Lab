function isLeapYear(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        return true
    }
        return false  
}

function getFirstTwoDigitsOfYear(num) { //find the first 2 digits of the year to find century code in getCenturyCode()
    var numToStr = num.toString(); 
    var yearSubString = numToStr.substring(0, 2);
    return parseInt(yearSubString);
}

function getCenturyCode(num){ //get century code for special offsets for certain centuries
    if(num == 16 || num == 20){
        return 6
    }
    else if(num == 17 || num == 21){
        return 4
    }
    else if(num == 18){
        return 2
    }
    else{
        return 0
    }
}

function getLastTwoDigitsOfYear(num) {
    var numToStr = num.toString();
    var lastTwoDigits = numToStr.substring(numToStr.length - 2, numToStr.length);
    return parseInt(lastTwoDigits);
}

function getQuotient(num, divisor) {
    return Math.floor(num / divisor)
}

function getRemainder(num, divisor) {
    return num % divisor;
    
}

function getMonthCode(month) { //Octavio: I changed the 'month' to its numeral equivalent.
    if (month == "01" || month == "10") {
        return 1
    } else if (month == "02" || month == "03" || month == "11") {
        return 4
    } else if (month == "04" || month == "07") {
        return 0
    } else if (month == "05") {
        return 2
    } else if (month == "06") {
        return 5
    } else if (month == "08") {
        return 3
    } else if (month == "09" || month == "12") {
        return 6
    } else {
        return "Please enter a valid Month, i.e 01, 02 ... 12"
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
    }

}

function getDayOfTheWeek(year, month, day) {
    var lastTwoDigitsOfYear = getLastTwoDigitsOfYear(year);
    var quotientOfYear = getQuotient(lastTwoDigitsOfYear, 12);
    var remainderOfYear = getRemainder(lastTwoDigitsOfYear, 12);
    var quotientOfRemainder = getQuotient(remainderOfYear, 4);
    var monthCode = getMonthCode(month);
    var centurycode = getCenturyCode(getFirstTwoDigitsOfYear(year));

    var total = (quotientOfYear + remainderOfYear + quotientOfRemainder + parseInt(day) + monthCode + centurycode) % 7;
    //found that the 'day' in total was a string and so it was concatinating the rest of the variables. used parseInt(day)
    return getDayCode(total);
}

function daysInMonth(month, year) {
    if (month == 04 || month == 06 || month == 09 || month == 11) {
        return 30
    } else if (month == 02 && isLeapYear(year)) {
        return 29
    } else if (month == 02 && !isLeapYear(year)) {
        return 28
    } else {
        return 31
    }
    
}

function makeCalendar(year) {
    var numOfMonths = 12;
    for (var m = 1; m < numOfMonths + 1; m++){
        for (var d = 1; d < daysInMonth(m, year) + 1; d++){
            console.log(`${m}-${d}-${year} is a ${getDayOfTheWeek(year, m, d)}`)
        }
    }
}


module.exports = {
    makeCalendar: makeCalendar, //export for use in main.js
    getDayOfTheWeek: getDayOfTheWeek,
    isLeapYear: isLeapYear
}


