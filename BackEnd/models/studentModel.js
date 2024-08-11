const mongosse = require("mongoose")

const studentSchema = new mongosse.Schema({
    id: String,
    name: String,
    faculty: String,
    grades: [{profession: String, sorce: Number}]

})

module.exports = mongosse.model("students", studentSchema)