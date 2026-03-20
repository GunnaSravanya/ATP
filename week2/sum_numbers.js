//write a function to receive any num of args and return their sum
let sum_of_numbers = function (...a) {
  let sum = a.reduce((acc, element) => acc + element);
  return sum;
};
let s = sum_of_numbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`sum of first 10 natural numbers:${s}`);
