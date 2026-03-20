// payment.js - Payment processing

import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

// Process Payment
export function processPayment(paymentMethod, couponCode = null) {
  //  Get cart items and total
  const items = getCartItems();

  if (items.length === 0) {
    return {
      success: false,
      message: "Cart is empty",
    };
  }

  const total = getCartTotal();

  //  Apply discount if coupon provided
  let discountDetails = {
    originalTotal: total,
    discount: 0,
    finalTotal: total,
    message: "No coupon applied",
  };

  if (couponCode) {
    discountDetails = applyDiscount(total, couponCode, items);
  }

  const finalAmount = discountDetails.finalTotal;

  //  Validate payment method
  const paymentValidation = validatePaymentMethod(paymentMethod);

  if (!paymentValidation.valid) {
    return {
      success: false,
      message: paymentValidation.message,
    };
  }

  //  Simulate payment
  console.log(`Payment is processing via ${paymentMethod}...`);

  const paymentSuccess = true; // simulate success

  if (!paymentSuccess) {
    return {
      success: false,
      message: "Payment Failed!!!",
    };
  }

  //  Reduce stock for all items
  reduceStock(items);

  //  Clear cart
  clearCart();

  // Generate order summary
  const orderId = generateOrderId();

  return {
    success: true,
    orderId: orderId,
    items: items,
    subtotal: discountDetails.originalTotal,
    discount: discountDetails.discount,
    total: finalAmount,
    paymentMethod: paymentMethod,
    status: "success",
    message: "Order placed successfully!",
  };
}

// Validate Payment Method
export function validatePaymentMethod(method) {
  const validMethods = ["card", "upi", "cod"];

  if (!method) {
    return {
      valid: false,
      message: "Payment method required",
    };
  }

  if (!validMethods.includes(method.toLowerCase())) {
    return {
      valid: false,
      message: "Invalid payment method. Allowed: card / upi / cod",
    };
  }

  return {
    valid: true,
    message: "Valid payment method",
  };
}

// Generate Order ID
export function generateOrderId() {
  return "ORD" + Date.now();
}
