import express from "express"
const router = express.Router();
let students=[];
router.get("/",(req,res)=>{
    res.send(students);
    console.log(students);
})
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id, 10); 
    const student = students.find((student) => student.id == id); 
    if (student) {
        console.log("Student found:", student); 
        res.send(student); 
    } else {
        console.log("Student not found"); 
        res.status(404).send({ message: "Student not found" }); 
    }
});
router.post("/",(req,res)=>{
    students.push(req.body)
    res.send(students)
    console.log(students);
})
router.put("/:id",(req,res)=>{
    const id= parseInt(req.params.id);
    const student=students.find((student)=>student.id===id);
    if(student){
        student.name=req.body.name;
        res.send(students)
    }else{
        res.status(404).send({message:"Student not foudn in array"})
    }
    console.log(students);
})

router.delete("/:id",(req,res)=>{
    const id = req.params.id;
    students = students.filter(student => student.id !== id);
    res.send(students);
    console.log(students);
})
export default router;