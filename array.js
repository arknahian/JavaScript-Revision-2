var number = [11, 21, 21, 43, 21, 54];
console.log(number);

// array advanced 
var students = ["Tony", "Stark", "Al", "Nahian", "Ark"];
students.push("John");

console.log(students);
console.log(students.length);
students.pop();
console.log(students.length);

// another array
 var name = ["Scarlet", "Johansson", "Dr. Bruce"];
 name.unshift("Tom Cruse");
 console.log(name);
 console.log(name.length);
 name.shift();
 console.log(name.length);



// Splice SLice & Concat

var singers = ['Jusitn', 'Bieber', 'Selena', 'Gomez'];

singers.splice(0, 1);
console.log(singers);

singers.splice(1);
console.log(singers);

var another = ['Ed Sheeran', 'Charlie Puth'];
var x = singers.concat(another);
console.log(x);