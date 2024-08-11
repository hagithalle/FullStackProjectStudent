const studentModel = require("../models/studentModel")

const getAllStudents=()=>{
    return studentModel.find({})
}

const getStudentById=(id)=>{
    return studentModel.findById(id)
}

const createStudent=async(student)=>{
    const finalStudent = new studentModel(student)
    await finalStudent.save()
    return "Created.."
}
const updateStudent =async(id, studentData)=>{
    await studentModel.findByIdAndUpdate(id, studentData)
    return "Updated.."

}

const deletStudent =async(id)=>{
    await studentModel.findByIdAndDelete(id)
    return "Deleted.."

}

module.exports = {getAllStudents,getStudentById, createStudent, updateStudent,deletStudent}