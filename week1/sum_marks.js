//sum of marks in [90,78,65,98]
let marks = [90, 78, 65, 98];
let sum = 0;
let min = marks[0];
for (let i = 0; i < marks.length; i++) {
  sum = sum + marks[i];
  if (marks[i] < min) {
    min = marks[i];
  }
}
console.log(`Sum of marks is ${sum}`);
//smallest element in marks array
console.log(`Smallest element in marks array is ${min}`);
