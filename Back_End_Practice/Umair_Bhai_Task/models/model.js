import mongoose from "mongoose";
const productSchema =mongoose.Schema(
  {
    p_name: { type: String, required: true },
    p_category: { type: String, required: true },
    p_description: { type: String, required: true },
    p_price: { type: Number, required: true, min: 0 },
    p_quantity: { type: Number, required: true, min: 0 },
    p_brand: { type: String },
  },
  {
    timestamps: true,
    collection: "Products",
  }
);

const Product_Model = mongoose.model("Products", productSchema);

export default Product_Model;
