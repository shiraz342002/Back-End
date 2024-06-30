import mongoose from "mongoose";
const { Schema } = mongoose;

const loginSchema = new Schema({
    user_name: { type: String },
    password: { type: String }
});

const Login_Model = mongoose.model("Credentials", loginSchema);

export default Login_Model;