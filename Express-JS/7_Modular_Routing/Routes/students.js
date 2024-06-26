import express from "express";
const router = express.Router();
let students = [];

// GET all students
router.get("/students", (req, res) => {
    res.send(students);
});

// POST a new student
router.post("/students", (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.send("New Student is Added");
});

// PUT update a student by ID
router.put("/students/:id", (req, res) => {
    const id = req.params.id;
    const updatedStudent = req.body;
    
    // Find the index of the student with the given id
    const index = students.findIndex(student => student.id === id);
    
    // If student with the given id exists, update it
    if (index !== -1) {
        students[index].name = updatedStudent.name;
    }
    
    res.send(students);
});

// DELETE a student by ID
router.delete("/students/:id", (req, res) => {
    const id = req.params.id;
    
    // Filter out the student with the given id
    students = students.filter(student => student.id !== id);
    
    res.send(students);
});

export default router;
