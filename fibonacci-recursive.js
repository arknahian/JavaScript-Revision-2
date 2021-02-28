function fibonacci(num) {
    if (num === 0) {
        return 0;
    }
    if (num ===1) {
        return 1;
    }
    else{
        return fibonacci[num] = fibonacci(num-1) + fibonacci(num-2);
    }
}
var x = fibonacci(10);
console.log(x);