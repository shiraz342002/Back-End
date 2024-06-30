//This file is basically just to Create Schema & Create Model
import mongoose from "mongoose"; //sabse pehle mongoose jo humne npm se install kiya usko import karenge
//basically ye hota ha schema create karne ke liye schema means iska structure
const schema = mongoose.Schema({  
    name:{type:String,required:true},
    size:{type:String},
    price:{type:Number},
    quantity:{type:Number},
    date:{type:Date},
});
const orderModel=mongoose.model("Pizza",schema);
export default orderModel;