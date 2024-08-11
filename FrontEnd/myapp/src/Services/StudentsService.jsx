import axios from "axios"
const url = "http://localhost:8000/students"

const getAllStudents = async()=>{
    const {data: students} = await axios.get(url)
    return students
}
const getStudentById = async (id) => {
    const { data: student } = await axios.get(`${url}/${id}`)
    return student
}

const createStudent = async (newStudent) => {
    const { data } = await axios.post(url, newStudent)
    return data.status

}

const updateStudent = async (id, newData) => {
    const { data } = await axios.put(`${url}/${id}`, newData)
    return data.status


}

const deleteStudent = async (id) => {
    const { data } = await axios.delete(`${url}/${id}`)
    return data.status

}

export { createStudent,getAllStudents,getStudentById, updateStudent,deleteStudent}