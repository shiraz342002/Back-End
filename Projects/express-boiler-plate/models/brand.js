import mongoose from "mongoose";
const Schema = mongoose.Schema;
const brandSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  brandDescription: {
    type: String,
    required: true,
  },
  brandImage: {
    type: String,
  },
  brandLogo: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Brand", brandSchema);
