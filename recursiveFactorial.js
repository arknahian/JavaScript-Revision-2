//!2 = 1*2
//!3 = 1*2*3
//!4 = 1*2*3*4 
//!5 = 1*2*3*4*5
function factorial(number) {
    if (number === 0) {
        return 1;
    }
    else{
        return number * factorial(number - 1);
    }
}
var result = factorial(5);
console.log(result);