import Box from '@mui/material/Box';
import { Avatar, Grid, Select, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddGrade from '../Components/AddGrade';
import { updateStudent, getAllStudents, getStudentById} from '../Services/StudentsService';
import { useState , useEffect} from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';



const defaultTheme = createTheme();




export default function AddStudent(){
    const navigate = useNavigate()
    const [students, setStudents] = useState([])
    const [currentStudent, setCurentStudent] = useState({id: '', name: '', faculty:'' , grades:[]})

    let currentId =sessionStorage.id
    let isStudentChange = true

    function addGrades(gs){

      setCurentStudent({...currentStudent, grades: currentStudent.grades.concat(gs)})
      console.log("Student:", currentStudent)
  }

    const fetchStudents = async () => {
      const students = await getAllStudents()
      console.log(students)
      setStudents(students)
    }
    const getCurrentStudent= async(id)=>{
      const data = await getStudentById(id)
      console.log("getCurrentStudent: ", data)
      setCurentStudent(data)
     
     // console.log("final grades:", currentStudent.grades)
     // console.log("final grades:", currentStudent.grades)
     
    }

    useEffect(() => {
      fetchStudents() 
      console.log("getStudents: ", students)
      getCurrentStudent(sessionStorage.id)  
  }, [])

  useEffect(()=>{
      console.log("Change grades")
  },[currentStudent.grades])

    const handleSubmit = async(e) => {
        e.preventDefault();

            console.log("Student:", currentStudent)

            const status = await updateStudent(currentStudent._id,currentStudent)
            alert(status)
            navigate("/")

      };

      const handleChange =(e)=>{
        e.preventDefault();
        console.log("handlerChange: ", e.currentTarget.getAttribute("data-value"))
        currentId = e.currentTarget.getAttribute("data-value")
        const indexCurrentStudent = students.findIndex(s=> s._id === currentId)
        console.log(students[indexCurrentStudent])
        setCurentStudent(students[indexCurrentStudent])  
        isStudentChange = !isStudentChange   
        
      }
       // Close menu
  const handleClose = () => {
    setAnchorEl(null);
  };

      if(currentStudent){
    return(
     
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
                <Box 
                    sx={{ 
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        }}>
                    <Avatar sx={{m: 1, bgcolor: 'action' }}>
                        <UpgradeIcon/>
                    </Avatar>
                    <Typography component="h3" variant="h6">
                       Update Student
                  </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                   autoComplete="given-name"
                                   name="id"
                                   required
                                   fullWidth
                                   label="Id"
                                   value={currentId} 
                                   id="select-id"
                                   select
                                   autoFocus
                                   //onChange={e => setCurentStudent({ ...currentStudent, id: e.target.value })}
                                   >
                                                              
                                     {students.map((student) => (
                                    <MenuItem key={student._id} value={student._id} onClick={handleChange}>
                                      {student.id}
                                    </MenuItem>                             
                            ))}       
                            </TextField>   
                            </Grid>
                            <Grid item xs={12} sm={6}>                          
                            <TextField required  
                                      name="name"
                                      label="Id" 
                                      autoComplete="" 
                                      fullWidth 
                                      value = {currentStudent.name} 
                                      onChange={(e)=>setCurentStudent({...currentStudent, name: e.target.value})}></TextField>
                               
                          </Grid>
                        </Grid>
                        <Grid item xs={12} justify={'center'} marginTop={'20px'} marginBottom={'20px'}>
                        <TextField required 
                                   name="faculty" 
                                   lable ="Faculty" 
                                   fullWidth value = {currentStudent.faculty} 
                                   onChange={(e)=>setCurentStudent({...currentStudent, faculty: e.target.value})}>

                        </TextField>
                         </Grid>
                        
                        <AddGrade student= {currentStudent} addGrades={addGrades}/>
                         
                         <Grid style={{textAlign:"Center"}}>              
                         <Button style={{marginTop:'20px', width: "80%"}}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 3 }}
                            >
                            Update Student
                            </Button>
                            </Grid>
                    </Box>
                </Box>
                
       </Container>
    </ThemeProvider>
    )};}
