import { Schema, model } from "mongoose";
const productSchema = new Schema(
  {
    id: {
      type: Number,
      required: [true, "id is required"]
    },
    name: {
      type: String,
      required: [true, "product name is required"],
      minlength: [4, "minimum length should be 4 letters"],
      maxlength: [25, "maximum length should be 25 letters"]
    },
    brand: {
      type: String,
      required: [true, "brand is required"],
      minlength: [4, "minimum length should be 4 letters"],
      maxlength: [25, "maximum length should be 25 letters"]
    },
    price: {
      type: Number,
      required: [true, "price of the product is required"],
      min:[10000,"minimum price should be 10000"],
      max:[50000,"maximum price should be 50000"]
    },
  },
  {
    versionkey: false,
    timestamp: true,
  },
);
export const ProductModel = model("product", productSchema);
