import mongoose from "mongoose";
const schema = mongoose.Schema;
const emp_schema= new schema({
    name:{type:String,required:true,},
    email:{type:String,match: /\S+@\S+\.\S+/ },
    age: { type: Number, min: 0, max: 120 },
});
const Emp_Model = mongoose.model("Employee",emp_schema);
export default Emp_Model;