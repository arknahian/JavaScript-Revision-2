function feetToInch(feet){
    var result = feet / 12;
    var x = result.toFixed(6);
    return x;
}
var num = feetToInch(10);
console.log(num);