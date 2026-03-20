//E-Commerce Shopping Cart System :Building a shopping cart like Amazon or Flipkart

//product.js - Product catalog

// Product database (simulated)
const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10, category: "electronics" },
  { id: 2, name: "Phone", price: 30000, stock: 15, category: "electronics" },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    stock: 25,
    category: "accessories",
  },
  { id: 4, name: "Mouse", price: 500, stock: 50, category: "accessories" },
  { id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" },
];

// TODO: Implement these functions

function getProductById(id) {
  return products.find((obj) => obj.id === id);
}

function getAllProducts() {
  return products;
}

function getProductsByCategory(category) {
  return products.filter((obj) => obj.category === category);
}

function searchProducts(query) {
  // Search products by name (case-insensitive)
  return products.filter((obj) =>
    obj.name.toLowerCase().includes(query.toLowerCase()),
  );
}

function checkStock(productId, quantity) {
  // Check if product has enough stock
  // Return true/false
  let product = products.find((obj) => obj.id === productId);
  if (product && product.stock >= quantity) {
    return true;
  }
  return false;
}

function reduceStock(items) {
  // Reduce product stock after purchase
  items.forEach((item) => {
    products.map((obj) => {
      if (obj.id === item.id) {
        obj.stock = obj.stock - item.quantity;
      }
    });
  });
}

export {
  getProductById,
  getAllProducts,
  getProductsByCategory,
  checkStock,
  reduceStock,
  searchProducts,
};
