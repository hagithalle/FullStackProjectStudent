import Box from '@mui/material/Box';
import { Avatar, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddGrade from '../Components/AddGrade';
import { createStudent} from '../Services/StudentsService';
import { useState , useEffect} from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom'



const defaultTheme = createTheme();




export default function AddStudent(){
    const navigate = useNavigate()
    const [gradesFinal, setGrades] = useState([])
    const [student, setStudent] = useState({id: '', name: '', faculty:'' , grades:[]})

    const addGrades =(gs)=>{
        console.log("addGrde")
        setGrades(gs)
        //setStudent({...student,grades: gs})
        //console.log("Student:", student)
    }


    const handleSubmit = async(e) => {
      //  console.log("Student:", student)
            e.preventDefault();
        const data = new FormData(e.currentTarget);

        const student = {
            id: data.get('id'),
            name: data.get('fullName'),
            faculty: data.get('faculty'),
            grades: gradesFinal}
        
        /*setStudent({...student, 
            id: data.get('id'),
            name: data.get('fullName'),
            faculty: data.get('faculty'),
            grades: grades})*/

            console.log("Student:", student)

            const status = await createStudent(student)
            alert(status)
            navigate("/")

            console.log("Student:", student)
      };





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
                        <PersonAddSharpIcon/>
                    </Avatar>
                    <Typography component="h3" variant="h6">
                       Add Student
                  </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                   autoComplete="given-name"
                                   name="fullName"
                                   required
                                   fullWidth
                                   id="fullName"
                                   label="Full Name"
                                   autoFocus/>                                   
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                fullWidth
                                id="id"
                                label="Id"
                                name="id"
                                autoComplete=""
                                />
                          </Grid>
                        </Grid>
                        <Grid item xs={12} justify={'center'} marginTop={'20px'} marginBottom={'20px'}>
                            <TextField
                            required
                            fullWidth
                            id="faculty"
                            label="Faculty"
                            name="faculty"
                            autoComplete="faculty"
                            />
                         </Grid>
                         <AddGrade callback={addGrades}/>  
                         <Grid style={{textAlign:"Center"}}>              
                         <Button style={{marginTop:'20px', width: "80%"}}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 3 }}
                            >
                            Add Student
                            </Button>
                            </Grid>
                    </Box>
                </Box>
                
       </Container>
    </ThemeProvider>
    );}
