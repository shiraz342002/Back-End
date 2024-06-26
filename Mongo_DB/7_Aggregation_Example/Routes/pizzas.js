import express from "express"; //To Create server
const router = express.Router(); //Creating app
import OrderModel from "../Models/pizzas.js" // importing the model from another folder

//To Display ALl functions
router.get("/",async(req,res)=>{
    try{
        const pizzas = await OrderModel.find();
        res.json(pizzas)
    }catch({message}){
        res.json({message});
    }
})
// To Display Using Specefic id
router.get("/:id",async(req,res)=>{
    try{
        const pizzas = await OrderModel.findById(req.params.id);
        res.json(pizzas);
    }catch({message}){
        res.json({message});
    }
});

//To Create or Insert
router.post("/", async (req, res) => {
    try {
        const result = await OrderModel.create(req.body);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
});
// To update 
router.patch("/:id", async (req, res) => {
    try {
        const result = await OrderModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
});
// To Delete BY a specefic id
router.delete("/:id", async (req, res) => {
    try {
        const result = await OrderModel.findByIdAndDelete(req.params.id);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
});
//To Delete ALl
router.delete("/", async (req, res) => {
    try {
        const result = await OrderModel.deleteMany();
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
});
export default router;



