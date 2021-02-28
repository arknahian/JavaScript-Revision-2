//!2 = 1*2
//!3 = 1*2*3
//!4 = 1*2*3*4 
function factorial(num) {
    var factorial = 1;
    for(var i=1; i <= num; i++) {
        factorial = factorial * i;
        
    }
    return factorial;
}
var x = factorial(5);
console.log(x);