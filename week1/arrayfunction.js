//write a function that receives an array as arg and return their sum
let h = function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};
let t = h([1, 2, 3, 4, 5]);
console.log(t);
