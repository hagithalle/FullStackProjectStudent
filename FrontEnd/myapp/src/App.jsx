import Navbar from './Components/Navbar'
import { Route, Routes } from "react-router-dom"
import UpdateStudent from './Pages/UpdateStudent'
import Students from './Pages/Students'
import AddStudent from './Pages/AddStudent'


function App() {


 
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="" element={<Students />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/update" element={<UpdateStudent />} />
    </Routes>

    </div>
  )
}

export default App
