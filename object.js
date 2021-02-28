var student = {
    name : "Al Nahian Ark",
    id : 12, 
    company : "Asfo Inc."
}
var student2 = {
    name : "Lalisa Manoban", 
    id : 32,
    company : "BlackPink"
}


//for the student how to have some property 
 
var propertyName = "name";
var name = student[propertyName];
console.log(name);

var studentId = student.id;
console.log(studentId);

var studentCompany = student["company"];
console.log(studentCompany);


//for the student2 how to have property Name

var student2Name = "name";
var name2 = student2[student2Name];
console.log(name2);

var student2Id = student2["id"];
console.log(student2Id);

var student2Company = student2.company;
console.log(student2Company);

console.log(student2.company)
