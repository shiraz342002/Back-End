import express from "express";
const router = express.Router();
import bookModel from "../Models/book.js";

router.get("/", async (req, res) => {

    try {
        const books = await bookModel.find();
        res.json(books); 
    } catch ({ message }) {
        res.json({ message });
    }
});
//Pagination
router.get("/limit", async (req, res) => {
    const limit = parseInt(req.query.limit) || 5;
    const skip = parseInt(req.query.skip) || 0;
    const users = await bookModel.find().limit(limit).skip(skip);
    const total = await bookModel.countDocuments();

    res.send({ users, total });

});
router.get("/:id", async (req, res) => {
    try {
        const book = await bookModel.findById(req.params.id);
        res.json(book);
    } catch ({ message }) {
        res.json({ message });
    }
});

router.post("/", async (req, res) => {
    try {
        const result = await bookModel.create(req.body);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const result = await bookModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const result = await bookModel.findByIdAndDelete(req.params.id);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
});

router.delete("/", async (req, res) => {
    try {
        const result = await bookModel.deleteMany();
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
});

export default router;