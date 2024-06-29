// routes/students.js

import express from "express";

const router = express.Router();
let students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
    { id: 3, name: 'Michael Johnson', age: 21 }
];

// GET all students
router.get("/", (req, res) => {
    res.send(students);
    console.log("All students:", students);
});

// GET student by ID
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const student = students.find(student => student.id === id);

    if (student) {
        console.log("Student found:", student);
        res.send(student);
    } else {
        console.log("Student not found for ID:", id);
        res.status(404).send({ message: "Student not found" });
    }
});


// POST new student
router.post("/", (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.send(students);
    console.log("New student added:", newStudent);
});

// PUT update student by ID
router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const student = students.find(student => student.id === id);

    if (student) {
        student.name = req.body.name;
        res.send(students);
        console.log("Student updated:", student);
    } else {
        res.status(404).send({ message: "Student not found in array" });
    }
});

// DELETE student by ID
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    students = students.filter(student => student.id !== id);
    res.send(students);
    console.log("Student deleted, new list:", students);
});

export default router;
