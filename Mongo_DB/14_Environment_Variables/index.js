import express from "express";
const app = express();
import multer from "multer";
import mongoose from "mongoose";
import fileRouter from "./routes/file.js";
import dotenv from "dotenv";
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/uploads", express.static("uploads")); 
app.use("/file",fileRouter)

const connection = mongoose.connection;
connection.once("connected", () => console.log("Database Connected ~"));
connection.on("error", (error) => console.log("Database Error: ", error));


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(1500);
