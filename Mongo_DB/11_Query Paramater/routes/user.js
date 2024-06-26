import express from "express";
import User from "../models/user.js";
const router = express.Router();
router.get("/", async (req, res) => {
    const users = await User.find();
    res.send(users);
});
router.post("/", async (req, res) => {
    const user = await User.create(req.body);
    res.send(user);
});
export default router;