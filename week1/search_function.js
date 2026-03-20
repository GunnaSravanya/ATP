/*receives an array and search element as args and returns the index of that search element in the array.it should return "not found" when search element is not found*/
let test = function target(a, t) {
  let k = 0;
  let x = "not found";
  for (let i = 0; i < a.length; i++) {
    if (a[i] == t) {
      return i;
    }
  }
  return x;
};
let l = test([10, 20, 30], 50);
console.log(l);
