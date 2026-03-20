/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"*/

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true },
];
//filter
let instock = cart.filter((cart_obj) => {
  if (cart_obj.inStock) {
    return cart_obj;
  }
});
console.log(instock);
//map
let new_array = cart.map((cart_obj) => {
  return {
    name: cart_obj.name,
    total_price: cart_obj.price * cart_obj.quantity,
  };
});
console.log(new_array);
//reduce
let grand_total = cart.reduce((acc, cart_obj) => {
  return acc + cart_obj.quantity * cart_obj.price;
}, 0);
console.log(grand_total);
//find
let find_mouse = cart.find((cart_obj) => {
  if (cart_obj.name === "Mouse") {
    return cart_obj;
  }
});
console.log(find_mouse);
//find index
let index = cart.findIndex((cart_obj) => cart_obj.name === "Keyboard");
console.log(index);
