/*ASSIGNMENT 2:
-------------
Student Performance Dashboard
You are working on a college result analysis system.
Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D
   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 },
];
//filter
let students_above_40 = students.filter((obj) => obj.marks >= 40);
console.log("students above 40 marks:");
console.log(students_above_40);
//map
let grades = students.map(function (obj) {
  if (obj.marks >= 90 && obj.marks <= 100) {
    obj.garde = "A";
  } else if (obj.marks >= 75 && obj.marks < 90) {
    obj.grade = "B";
  } else if (obj.marks >= 60 && obj.marks < 75) {
    obj.grade = "C";
  } else {
    obj.grade = "D";
  }
});
console.log("Adding grades based on their marks");
console.log(students);
//reduce
let avg_marks = students.reduce(
  (acc, obj) => (acc + obj.marks) / students.length,
  0,
);
console.log("Average marks:");
console.log(avg_marks);
//find
let stu = students.find((obj) => obj.marks === 92);
console.log("Deatils of student who scored 92:");
console.log(stu);
//find index
let index = students.findIndex((obj) => obj.name === "Kiran");
console.log("index of student kiran");
console.log(index);
