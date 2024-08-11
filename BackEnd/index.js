const express = require("express")
const app = express();
require("./configs/database")

const cors = require("cors")
const studentController = require("./controllers/studentController")

const port = 8000

app.use(express.json())
app.use(cors())
app.use("/students", studentController)

app.listen(port, ()=>{
    console.log(`Server is running at "http://127.0.0.1:${port}`);
})

