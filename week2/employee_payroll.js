/*ASSIGNMENT 3:
-------------
Employee Payroll Processor
You are building a salary processing module in a company HR app.
Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
Tasks:
    1. filter() employees from IT department
    2. map() to add:  netSalary = salary + 10% bonus
    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"*/

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" },
];
//filter
let it_employees = employees.filter((obj) => obj.department === "IT");
console.log("IT department employee details");
console.log(it_employees);
//map
let netsalary = employees.map(
  (obj) => (obj.net_salary = obj.salary + obj.salary * 0.1),
);
console.log("After adding net salary:");
console.log(employees);
//reduce
let total_payout = employees.reduce((acc, obj) => acc + obj.net_salary, 0);
console.log("total payout:");
console.log(total_payout);
//find
let find_employee = employees.find((obj) => obj.salary === 30000);
console.log("employee details whose salary is 30000");
console.log(find_employee);
//find index
let index_of_neha = employees.findIndex((obj) => obj.name === "Neha");
console.log("Index of employee Neha:");
console.log(index_of_neha);
