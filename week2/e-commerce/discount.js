// discount.js - Coupon and discount logic

// Available coupons
const coupons = {
  WELCOME10: {
    type: "percentage",
    value: 10,
    minAmount: 1000,
  },
  FLAT500: {
    type: "flat",
    value: 500,
    minAmount: 5000,
  },
  ELECTRONICS20: {
    type: "percentage",
    value: 20,
    minAmount: 10000,
    category: "electronics",
  },
};

// Validate Coupon
export function validateCoupon(couponCode, cartTotal, cartItems) {
  // Check if coupon exists
  const coupon = coupons[couponCode];
  if (!coupon) {
    return { valid: false, message: "Invalid coupon code." };
  }

  // Check minimum cart amount
  if (cartTotal < coupon.minAmount) {
    return {
      valid: false,
      message: `Minimum cart value should be ₹${coupon.minAmount}.`,
    };
  }

  // Check category requirement (if coupon has category restriction)
  if (coupon.category) {
    const hasRequiredCategory = cartItems.some(
      (item) => item.category === coupon.category,
    );

    if (!hasRequiredCategory) {
      return {
        valid: false,
        message: `Coupon valid only for ${coupon.category} items.`,
      };
    }
  }

  return { valid: true, message: "Coupon applied successfully." };
}

// Calculate Discount
export function calculateDiscount(couponCode, cartTotal) {
  const coupon = coupons[couponCode];
  if (!coupon) return 0;

  let discount = 0;

  if (coupon.type === "percentage") {
    discount = (cartTotal * coupon.value) / 100;
  } else if (coupon.type === "flat") {
    discount = coupon.value;
  }

  return discount;
}

//Apply Discount
export function applyDiscount(cartTotal, couponCode, cartItems) {
  const validation = validateCoupon(couponCode, cartTotal, cartItems);

  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message,
    };
  }

  const discount = calculateDiscount(couponCode, cartTotal);
  const finalTotal = cartTotal - discount;

  return {
    originalTotal: cartTotal,
    discount: discount,
    finalTotal: finalTotal,
    message: "Discount applied successfully!",
  };
}
