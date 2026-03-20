function bigNumber(a, b, c) {
  if (a > b && a > c) {
    console.log("a is big");
  } else if (b > a && b > c) {
    console.log("b is big");
  } else {
    console.log("c is big");
  }
}
bigNumber(10, 20, 30);
