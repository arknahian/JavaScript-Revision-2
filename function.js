//function with console.log

function sayYourName(){
    console.log("Al Nahian Ark");
}
sayYourName();

//function without return 

function sayLoveYou(){
    return "I Love You";
}

var x = sayLoveYou();
console.log(x);

// function with parameters

function doubleIt(num) {
    return num * 2;
}
var y = doubleIt(7);
console.log(y);

//with DOuble parameters

function addNumber(num1, num2) {
    return num1 + num2;
}
var plus = addNumber(3, 4);
console.log(plus);

//with three parameters

function addSum(sum1, sum2, sum3) {
    return sum1 + sum2 + sum3;
}
var addEveryThings = addSum(2, 3, 3);
console.log(addEveryThings);