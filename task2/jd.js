let students =[];
function createStudent(name,age,mark){
    return{name:name,age:age,mark:mark};
}
students.push(createStudent("dania",20,95));
students.push(createStudent("ali",20,30));
students.push(createStudent("rami",20,78));
students.push(createStudent("deema",20,82));
students.push(createStudent("osama",20,70));
let sucssesStudents=[];
let failedStudents=[];
for(let i=0;i<students.length;i++){
if (students[i].mark>=50) {
    sucssesStudents.push(students[i]);
} else {
   failedStudents.push(students[i]) ;
}}
console.log(sucssesStudents);
console.log(failedStudents);

