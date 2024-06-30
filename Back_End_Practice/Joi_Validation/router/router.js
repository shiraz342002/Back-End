import Login_Model from "../models/login.js";
import  express  from "express";
import Joi from "joi";
const router = express.Router();

  //Joi Validation
const loginSchema = Joi.object({
    user_name: Joi.string().required(),
    email: Joi.string().email().required(),
    pass: Joi.string().min(8).required()
});
router.post("/",async(req,res)=>{
    const {error} = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try{
        const login = await Login_Model.create(req.body);
        res.status(200).json(login);
    }catch({message}){
        res.json({message})
    }
})
router.get("/",async(req,res)=>{
    try{
        const login = await Login_Model.findOne();
        res.json(login);
    }catch(message){
        res.json({message});
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const login = await Login_Model.findById(req.params.id)
        res.json(login);
    }catch({message}){
        res.json({message});
    }
});
router.patch("/:id",async(req,res)=>{
    try{
        const login = await Login_Model.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(login);        
    }catch({message}){
        res.json({message});
    }
})
router.delete("/test", async (req, res) => {
    try {
        const login = await Login_Model.deleteOne({ name: "Zubaida Naz" });
        if (login.deletedCount === 0) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({ message: "Employee deleted successfully", data: login });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const login = await Login_Model.findByIdAndDelete(req.params.id);
        if (!login) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json(login);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default router