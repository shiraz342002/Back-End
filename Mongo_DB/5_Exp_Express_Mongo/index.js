import express from "express";
import mongoose from "mongoose";
import bookRouter from "./Routes/book.js";

const app = express();
app.use(express.json());

const connection = mongoose.connection;

connection.once("connected", () => console.log("Database Connected ~");

connection.on("error", (error) => console.log("Database Error: ", error));

mongoose.connect("mongodb://127.0.0.1:27017/my_first_data_base", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use("/book", bookRouter);

app.listen(3000,()=>{
    console.log("on port ");
    
})