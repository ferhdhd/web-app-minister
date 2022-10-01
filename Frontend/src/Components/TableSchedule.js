import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, description, start, duration) {
  return { name, description, start, duration };
}

const createArray = (mon, tue, wed, thu, fri, monH, tueH, wedH, thuH, friH) => { 
    
    var array = [];
    for(var i in mon) {
        array.push(createData('Segunda-feira', mon[i].description, monH[i][0], mon[i].duration))
        }
    for(var i in tue) {
        array.push(createData('Terça-feira', tue[i].description, tueH[i][0], tue[i].duration))
        }
    for(var i in wed) {
        array.push(createData('Quarta-feira', wed[i].description, wedH[i][0], wed[i].duration))
        }
    for(var i in thu) {
        array.push(createData('Quinta-feira', thu[i].description, thuH[i][0], thu[i].duration))
        }
    for(var i in fri) {
        array.push(createData('Sexta-feira', fri[i].description, friH[i][0], fri[i].duration))
        }
    
    return array;
}

export default function TableSchedule(props) {
    
    if(props.schedule.mon !== undefined) { 
      var mon = Object.values(props.schedule.mon);
      var monH = (Object.entries(props.schedule.mon));
    }
    if(props.schedule.tue !== undefined) { 
      var tue = Object.values(props.schedule.tue);
      var tueH = (Object.entries(props.schedule.tue));
    }
    if(props.schedule.wed !== undefined) { 
      var wed = Object.values(props.schedule.wed);
      var wedH = (Object.entries(props.schedule.wed));
    }
    if(props.schedule.thu !== undefined) { 
      var thu = Object.values(props.schedule.thu); 
      var thuH = (Object.entries(props.schedule.thu));
    }
    if(props.schedule.fri !== undefined) { 
      var fri = Object.values(props.schedule.fri);
      var friH = (Object.entries(props.schedule.fri));
     }
    
    const rows = createArray(mon, tue, wed, thu, fri, monH, tueH, wedH, thuH, friH);
  
    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dia da Semana</TableCell>
            <TableCell align="right">Descrição</TableCell>
            <TableCell align="right">Início</TableCell>
            <TableCell align="right">Duração</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.start}</TableCell>
              <TableCell align="right">{row.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
