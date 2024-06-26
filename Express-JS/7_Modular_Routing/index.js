import express from "express";

// Importing routes
import students from "./Routes/students.js";
import teachers from "./Routes/teachers.js";
import courses from "./Routes/courses.js";

const app = express();
const port = 3000

app.get('/students',(req,res)=>{
    res.send("This is Student ")
})
// Configuring middlewares
app.use(express.json());

// Using routes as middleware

app.use("/students", students);
// '/students' is the prefix for the student's routes
// We can use any prefix we want, for example, '/api/students', '/api/v1/students', etc.
// We can also use multiple prefixes, for example, '/api/v1/students', '/api/v2/students', etc. like this: 👇
// app.use('/api/v1/students', '/api/v2/students', students);
// This is useful when we want to use the same routes for multiple versions of the API

app.use("/teachers", teachers);
// '/teachers' is the prefix for the teacher's routes

app.use("/courses", courses);
// '/courses' is the prefix for the courses routes

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })