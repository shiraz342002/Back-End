import express from "express";
import mongoose from "mongoose";
import Emp_Router from "./routes/router.js";

const app = express();
const port = 3000;
const conn = "mongodb://localhost:27017/Shiraz_Mongo_1";
app.use(express.json())
mongoose.connect(conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
    console.log("Database Connected ~");
});

mongoose.connection.on("error", (error) => {
    console.log("Database Connection Failed ~", error);
});
app.use("/employee",Emp_Router);


app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});
