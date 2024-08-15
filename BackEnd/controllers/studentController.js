const studentService = require("../services/studentService")
const express = require('express')
const router = express.Router()


// localhost:8000/students

router.get("/", async(req, res)=>{
    const students = await studentService.getAllStudents()
    return res.json(students)
})

router.get("/:id", async(req, res)=>{
    const id = req.params.id 
    const student = await studentService.getStudentById(id)
    return res.json(student)
})

router.post("/", async(req, res)=>{
    const newStudent = req.body
    const status = await studentService.createStudent(newStudent)
    return res.json({status})
})

router.put("/:id", async(req, res)=>{
    const id = req.params.id 
    const newStudent = req.body
    const status = await studentService.updateStudent(id,newStudent)
    return res.json({status})
})

router.delete("/:id", async(req, res)=>{
    const id = req.params.id 
    const status = await studentService.deletStudent(id)
    return res.json({status})
})

module.exports = router