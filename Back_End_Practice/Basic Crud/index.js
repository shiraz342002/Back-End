import express from "express"
import studentRouter from "./routes/students.js"
const app = express()
var port = 3000
app.use(express.json())
app.use("/students",studentRouter);


app.listen(port, () =>
    console.log(`Hello world app listening on port ${port}!`)
);

