import mongoose from "mongoose";
const schema = mongoose.Schema;
const login_schema= new schema({
    user_name:{type:String},
    email:{type:String},
    pass:{type:String}
})
const Login_Model= mongoose.model("login_details",login_schema)
export default Login_Model