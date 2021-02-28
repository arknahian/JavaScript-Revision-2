function factorial(num) {
    var factorial = 1;
    var i = 1;
    while (i <= num) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
var x = factorial(5);
console.log(x);