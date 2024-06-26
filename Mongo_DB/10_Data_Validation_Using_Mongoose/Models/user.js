import mongoose from "mongoose";

export const schema = mongoose.Schema({
  name: { type: String, required: true,},
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: String, min: 18 },
});

export default mongoose.model("User", schema);