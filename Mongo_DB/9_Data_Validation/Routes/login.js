import express from "express";
import Joi from "joi";
const router = express.Router();
import LoginModel from "../Models/login.js";

router.get("/", async (req, res) => {

    try {
        const login = await LoginModel.find();
        res.json(login);
    } catch ({ message }) {
        res.json({ message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const login = await LoginModel.findById(req.params.id);
        res.json(login);
    } catch ({ message }) {
        res.json({ message });
    }
});

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;

        //Simple Validation 
        // if (!email.endsWith('@gmail.com')) {
        //     return res.status(400).json({ error: 'Email must end with @gmail.com' });
        // }
        // if (password.length < 8) {
        //     return res.status(400).json({ error: 'Password must be at least 8 characters long' });
        // }

        //Using Joi
        const schema = Joi.object().keys({
            password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
        });
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).send("Join said there is an error");
        }
        const result = await LoginModel.create({ email, password });
        res.status(201).json(result);
    } catch (error) {
        console.error('Error creating login:', error);
        res.status(500).json({ error: 'Failed to create login' });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const result = await LoginModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const result = await LoginModel.findByIdAndDelete(req.params.id);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
});

router.delete("/", async (req, res) => {
    try {
        const result = await LoginModel.deleteMany();
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
});

export default router;