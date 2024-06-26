import mongoose from "mongoose";
const Right_schema= new mongoose.Schema({
    staff_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'staff'
    },
    right:{
        type:String
    }
},{
timestamps:true
}  
)

const right= mongoose.model("right", Right_schema);
export default right;
