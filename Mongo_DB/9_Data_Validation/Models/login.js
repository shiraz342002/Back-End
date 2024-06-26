import mongoose from "mongoose";
const schema = mongoose.Schema({
    email: { type: String,},
    password: { type: String,},
});

const LoginModel = mongoose.model("login", schema);
export default LoginModel;