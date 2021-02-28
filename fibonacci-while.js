var fibonacci = [0, 1];
var i = 2;
while (i <= 10) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    i++;
}
console.log(fibonacci)