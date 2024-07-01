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
router.get("/:id", async (req, res) => {
    try {
        const login = await Login_Model.findById(req.body.id);
        if (!login) {
            return res.status(404).json({ message: "Login not found" });
        }
        res.status(200).json(login);
    } catch (error) {
        res.status(500).json({ message: error.message });
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
router.post("/check", async (req, res) => {
    // const { user_name, password } = req.body;
    const { user_name, password } = req.body;
    try {
      const user = await Login_Model.findOne({ user_name });
      console.log(user);
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      if (password === user.password) {
        const payload = {
          userId: user._id,
          username: user.user_name,
          admin: user.admin,
        };
        const token = jwt.sign(payload,"defaultSecretKey"); 
        res.json({ token });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  router.get("/admin", authenticate_token, async (req, res) => {
    try {
      const users = await Login_Model.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
function authenticate_token(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token==null){
        return res.sendStatus(401)
    }
    jwt.verify(token,"defaultSecretKey",(err,user)=>{
        if(err) return res.sendStatus(400);
        req.user=user;
        next()
    })
}
export default router