import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Avatar, Grid, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { useState , useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddGrade({student,addGrades}){
 
  const [grade,setGrade] = useState({profession:'', sorce: '', id:uuidv4()})
  const [grades, setGrades] = useState([])
    
    /*if(props.student.grades > 0)
    {
      console.log("x")
      setGrades(props.student.grades)
    }
    */
    const addGrade =()=>{
        setGrade({...grade, id: uuidv4()})
        console.log("current gread:", grade)
        grades.push(grade)
        console.log("curent grades:", grades)
        addGrades(grades)
      }

      useEffect(()=>{
        
        },[]);

        const deleteGrade=(id)=>{
          const tempGrades = student.grades.filter(grade=> grade.id != id)
          setGrades(tempGrades) 
          addGrades(tempGrades)

        }
      

      return(
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                         <Typography component="h3" variant="h6" align="center" marginBottom={'20px'}>
                                Add new grade
                            </Typography>
                         <Grid container spacing={2} margin={'center'}>
                         
                         <Grid item xs={12} sm={6}>
                                <TextField
                                   autoComplete="profission"
                                   name="profession"
                                   required
                                   fullWidth
                                   id="profission"
                                   label="profission"
                                   autoFocus
                                   onChange={e=> setGrade({...grade, profession: e.target.value})}/>                                   
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                type='number'
                                required
                                fullWidth
                                id="score"
                                label="score"
                                name="sorce"
                                autoComplete=""
                                onChange={e=> setGrade({...grade, sorce: e.target.value})}/>
                          </Grid>
                         </Grid>
                         <Grid style={{textAlign:"Center"}}>
                         <Button 
                         style={ {textAlign:"Center", maxWidth: "30%", padding: "5px"} }
                         justifyContent=' center'
                            onClick={addGrade}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 0.5 }}
                            >
                            Add Grade
                            </Button>
                            </Grid>
                            {
                    student.grades && student.grades.map((grade)=>{
                      return(
                        <ListItem key={grade._id? grade._id : grade.id}>
                          <Paper sx={{width:'600px', display: "flex"}}>
                          <Grid container spacing={3} margin={'center'}>
                          <Grid item xs={20} sm={4}><ListItemText primary={`Profession: ${grade.profession}`}/></Grid>
                          <Grid item xs={20} sm={4}><ListItemText primary={`Score: ${grade.sorce}`}/></Grid>
                          <Grid item xs={20} sm={4} style={{left: '90%'}} justifyContent='left'> <Button onClick={()=>deleteGrade(grade.id)}>Delete</Button></Grid>
                            </Grid>
                          </Paper>
                        </ListItem> 
                      )
                  })}
                                           
                         </Box>
)}