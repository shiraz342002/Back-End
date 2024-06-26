import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json());

app.use("/users", userRouter);

mongoose.connect("mongodb://localhost:27017/express-pagination", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.listen(3000, () => {
    console.log("Server started on port 3000");
});