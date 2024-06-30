import mongoose from "mongoose";
const schema = mongoose.Schema;
const login_schema= new schema({
    user_name:{type:String,required:true},
    email:{type:String,match: /\S+@\S+\.\S+/ },
    pass:{type:String,required:true,unique:true,minlength:8}
})
const Login_Model= mongoose.model("login_details",login_schema)
export default Login_Model
