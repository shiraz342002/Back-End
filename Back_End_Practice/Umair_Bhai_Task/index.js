import express from "express";
import mongoose from "mongoose";
import ProductRouter from "./routes/routes.js";
const app = express();
const PORT = 3000;
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/Task_1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.on("connected", () => {
    console.log("Database Connected ~");
});
connection.on("error", (error) => {
    console.error("Database Error: ", error);
});
app.use("/product", ProductRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
