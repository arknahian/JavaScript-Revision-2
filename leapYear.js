function leapYear(year) {
    if ((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)) {
        return "Your Year is Leap Year";
    }
    else{
        return "This is not leap year";
    }
}
var x = leapYear(2020);
console.log(x);