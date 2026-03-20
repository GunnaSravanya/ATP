// cart.js - Shopping cart operations
import { getProductById, checkStock } from "./product.js";

let cartItems = [];

// Add To Cart
function addToCart(productId, quantity) {
  let product_details = getProductById(productId);

  if (!product_details) {
    console.log("Product not found");
    return;
  }

  if (checkStock(productId, quantity)) {
    let existingItem = cartItems.find((obj) => obj.id === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
      console.log("The product quantity is increased");
    } else {
      cartItems.push({
        ...product_details,
        quantity: quantity,
      });
      console.log("The product is successfully added to cart");
    }
  } else {
    console.log("Not enough stock");
  }
}

// Remove From Cart
function removeFromCart(productId) {
  cartItems = cartItems.filter((obj) => obj.id !== productId);

  console.log("Product removed from cart");
}

// Update Quantity
function updateQuantity(productId, newQuantity) {
  if (checkStock(productId, newQuantity)) {
    cartItems = cartItems.map((obj) => {
      if (obj.id === productId) {
        return { ...obj, quantity: newQuantity };
      }
      return obj;
    });

    console.log("Quantity updated");
  } else {
    console.log("Not enough stock");
  }
}

// Get Cart Items
function getCartItems() {
  return cartItems;
}

// Get Cart Total
function getCartTotal() {
  let total = cartItems.reduce((acc, obj) => acc + obj.price * obj.quantity, 0);

  return total;
}

// Clear Cart
function clearCart() {
  cartItems = [];
  console.log("Cart cleared");
}

export {
  addToCart,
  removeFromCart,
  updateQuantity,
  getCartItems,
  getCartTotal,
  clearCart,
};
