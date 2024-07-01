import Product_Model from "../models/model.js"
import express from "express"
const router = express();
router.post("/",async(req,res)=>{
    try{
        const product= await Product_Model.create(req.body);
        res.status(200).json(product)
    }catch({error}){
        res.sendStatus(400).send()
    }
});

router.get("/",async(req,res)=>{
    try{
        const product = await Product_Model.findAll();
        res.status(200).send(product)
        console.log("Product successfully added");

        
    }catch({error}){
        res.sendStatus(400).send(error)
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const id = req.body.id;
        const product = await Product_Model.findById(id);
        res.status(200).send(product)
    }catch({error}){
        res.sendStatus(400).send(error)
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        const product = await Product_Model.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).send(product)
        console.log("Product successfully Updated");

    }catch({error}){
        res.sendStatus(400).send(error);
    }
})
router.delete("/", async (req, res) => {
    try {
        const result = await Product_Model.deleteMany();
        res.status(200).json(result);
        console.log("Products successfully deleted");

    } catch ({ message }) {
        res.json({ message });
    }
});
router.delete("/:id"),async(req,res)=>{
    try{
        const product = await Product_Model.deleteMany();
        res.status(200).send(product)
        console.log("Product successfully deleted");
    }catch({error}){
        res.sendStatus(400).send(error)
    }
}
export default router