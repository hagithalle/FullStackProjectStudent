import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { getAllStudents , deleteStudent} from '../Services/StudentsService';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { useNavigate } from 'react-router-dom'



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
      
      
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


export default function Students(){
    const navigate = useNavigate()
   const [students, setStudents] = useState([])

   const fetchUsers = async () => {
    const allStudents = await getAllStudents()
    console.log(allStudents)
    setStudents(allStudents)
}

useEffect(() => {
    fetchUsers() 
}, [])


const removeStudent = async (id) => {
    const status = await deleteStudent(id)
    alert(status)
    fetchUsers()
}

const updateStudent = (updateId)=>{
  sessionStorage.id = updateId
 navigate(`/update`)

}



    return(
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">id</StyledTableCell>
            <StyledTableCell align="center">name</StyledTableCell>
            <StyledTableCell align="center">Facult</StyledTableCell>
            <StyledTableCell align="center">Grades</StyledTableCell>
            <StyledTableCell align="center">Deleted</StyledTableCell>
            <StyledTableCell  style={{width: "10px"}} align="center">Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <StyledTableRow key={student.id}>
              <StyledTableCell align="center" component="th" scope="row">
                {student.id}
              </StyledTableCell>
              <StyledTableCell align="center">{student.name}</StyledTableCell>
              <StyledTableCell align="center">{student.faculty}</StyledTableCell>
              <StyledTableCell align="center">
              <TableContainer component={Paper}>
              <Table sx={{ minWidth: 100 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell align="center">profession</StyledTableCell>
                    <StyledTableCell align="center">sorce</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {student.grades?.map((grade)=>(
                         <StyledTableRow key={grade._id}>
                         <styledTableCell align="center" component="th" scope="row">{grade.profession}
                         </styledTableCell>
                          <StyledTableCell align="center">{grade.sorce}</StyledTableCell>
                          </StyledTableRow>

                    ))}
                   
                </TableBody>
                </Table>
                </TableContainer>              
                </StyledTableCell>
                <StyledTableCell align="center">
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => removeStudent(student._id)}>
                         Delete
                         </Button> 
                        </StyledTableCell>
                        <StyledTableCell align="center">
                <Button variant="outlined" startIcon={<UpgradeIcon />} onClick={() => updateStudent(student._id)}>
                         Update
                         </Button> 
                        </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
    }
