import Login_Model from "../models/login.js";
import  express  from "express";
const router = express.Router();
import jwt from "jsonwebtoken";
router.get("/retrive",async(req,res)=>{
    try{
        const login = await Login_Model.find();
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
router.post("/check", (req, res) => {
    const { username, password } = req.body;
    const user=Login_Model.findOne(username);
    if (password === user.password) {
      const payload = {
        userId: 123,
        username: "user1",
        admin: true,
      };
      const token = jwt.sign(payload, "secretKey");
      res.json({ token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
router.post("/",async(req,res)=>{
    try{
        const login = await Login_Model.create(req.body);
        res.status(200).json(login);
    }catch({message}){
        res.json({message})
    }
})
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