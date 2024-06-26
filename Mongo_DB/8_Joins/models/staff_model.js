import mongoose from "mongoose";
const Staff_schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    }
},{
timestamps:true
}  
)

const staff = mongoose.model("staff", Staff_schema);
export default staff
