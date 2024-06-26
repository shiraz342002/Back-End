import express from "express";
import mongoose from "mongoose";
import LoginRouter from "./Routes/login.js";

const app = express();
app.use(express.json());

const connection = mongoose.connection;

connection.once("connected", () => console.log("Database Connected ~"));

connection.on("error", (error) => console.log("Database Error: ", error));

mongoose.connect("mongodb://127.0.0.1:27017/Data_Validation", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use("/login", LoginRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
