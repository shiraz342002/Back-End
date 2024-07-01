import Product_Model from "../models/model.js";
import express from "express";

const router = express.Router();

router.post("/store", async (req, res) => {
    try {
        const product = await Product_Model.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.sendStatus(400).send();
    }
});

router.get("/retrieve", async (req, res) => {
    try {
        const products = await Product_Model.find();
        res.status(200).json(products);
        console.log("Products successfully retrieved");
    } catch (error) {
        res.sendStatus(400).send(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id; // Use req.params to get the id from URL
        const product = await Product_Model.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.sendStatus(400).send(error);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const product = await Product_Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(product);
        console.log("Product successfully updated");
    } catch (error) {
        res.sendStatus(400).send(error);
    }
});

router.delete("/", async (req, res) => {
    try {
        const result = await Product_Model.deleteMany();
        res.status(200).json(result);
        console.log("Products successfully deleted");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => { 
    try {
        const product = await Product_Model.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
        console.log("Product successfully deleted");
    } catch (error) {
        res.sendStatus(400).send(error);
    }
});

export default router;
