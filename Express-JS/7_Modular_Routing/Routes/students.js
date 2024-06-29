import express from "express";
const router = express.Router();
let students = [];

router.get("/get", (req, res) => {
  res.send(students);
  console.log(students);
});

router.get("/getbyid/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find((student) => student.id === id);

  if (student) {
    res.status(200).json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

router.post("/add", (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.send("New Student is Added");
  console.log(students);
});

router.put("/students/:id", (req, res) => {
  const id = req.params.id;
  const updatedStudent = req.body;

  const index = students.findIndex((student) => student.id === id);

  if (index !== -1) {
    students[index].name = updatedStudent.name;
  }

  console.log(students);
  res.send(students);
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  students = students.filter((student) => student.id !== id);

  console.log(students);
  res.send(students);
});

export default router;
