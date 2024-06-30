import express from "express"
const router = express.Router();
import Emp_Model from "../model/Employee.js";
router.get("/",async(req,res)=>{
    try{
        const emp = await Emp_Model.findOne();
        res.json(emp);
    }catch(message){
        res.json({message});
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const emp = await Emp_Model.findById(req.params.id)
        res.json(emp);
    }catch({message}){
        res.json({message});
    }
});
router.post("/",async(req,res)=>{
    try{
        const emp = await Emp_Model.create(req.body);
        res.status(200).json(emp);
    }catch({message}){
        res.json({message})
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        const emp = await Emp_Model.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(emp);        
    }catch({message}){
        res.json({message});
    }
})
router.delete("/test", async (req, res) => {
    try {
        const emp = await Emp_Model.deleteOne({ name: "Zubaida Naz" });
        if (emp.deletedCount === 0) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({ message: "Employee deleted successfully", data: emp });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const emp = await Emp_Model.findByIdAndDelete(req.params.id);
        if (!emp) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json(emp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default router