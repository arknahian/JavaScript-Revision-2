function primeNumber(num){
    if (num % 2 == 0) {
        return "This is a prime number.";
    }
    else{
        return "This is not a prime number.";
    }
}
var x = primeNumber(5);
console.log(x);

var y = primeNumber(4);
console.log(y)