import mongoose from "mongoose";
import Class from "./class.js";
const PersonSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    age: { type: Number, min: 0, max: 120 },
    email: { type: String, match: /\S+@\S+\.\S+/ },
    phone: { type: String, match: /^\+92-\d{3}-\d{3}-\d{4}$/ },
    isAlive: { type: Boolean, default: true },
    gender: { type: String, enum: ["male", "female", "other"] },
    photosURLs: { type: [String] },
    notes: { type: String },
    mother: { type: mongoose.Schema.Types.ObjectId, ref: "Person" },
    father: { type: mongoose.Schema.Types.ObjectId, ref: "Person" },
    class_id: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
});
const Person = mongoose.model("Person", PersonSchema);
export default Person;