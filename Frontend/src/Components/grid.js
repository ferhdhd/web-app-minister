import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './EmployeeCard';
import EmployeeCard from './EmployeeCard';
import * as jsonData from './servidores.json';

const BuildCards = () => {

    const urlBACK = "http://localhost:3000/employees";

    const [employees, setEmployees] = useState();
    
    React.useEffect(() => {
      fetch(`${urlBACK}`,{method: 'GET'})
      .then(response => response.json())
      .then(response => setEmployees(response))
      .catch(err => {
          console.log(err)
      })
  }, );

    if (!employees) return null;

    const result = [];
    let employeesSize = Object.values(employees);
    
    for(let i = 0; i < employeesSize.length; i++) {
      if (employees[i].job_position === 'Ministro X') {  
      result.push(
            <Grid item xs={6}>
                <EmployeeCard  
                  employeeName={employees[i].name}
                  employeeSurname={employees[i].surname}
                  employeePhoto={employees[i].photo_file}
                  employeePhone={employees[i].phone}
                  employeeExtension={employees[i].extension}
                  employeeEmail={employees[i].email}
                  employeeJob={employees[i].job_position}
                  employeeBTW={employees[i].begin_to_work}
                  employeeFTW={employees[i].finished_to_work}
                  employeeSchedule={employees[i].schedule}
                  />
            </Grid>
          )
        }
      }

      for(let i = 0; i < employeesSize.length; i++) {
        if (employees[i].name !== 'Marcos') {  
        result.push(
              <Grid item xs={6}>
                  <EmployeeCard  
                    employeeName={employees[i].name}
                    employeeSurname={employees[i].surname}
                    employeePhoto={employees[i].photo_file}
                    employeePhone={employees[i].phone}
                    employeeExtension={employees[i].extension}
                    employeeEmail={employees[i].email}
                    employeeJob={employees[i].job_position}
                    employeeBTW={employees[i].begin_to_work}
                    employeeFTW={employees[i].finished_to_work}
                    employeeSchedule={employees[i].schedule}
                    />
              </Grid>
            )
          }
        }
    

    return result
}

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {BuildCards()}
      </Grid>
    </Box>
  );
}
