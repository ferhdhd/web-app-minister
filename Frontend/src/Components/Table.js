import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, entry, exit) {
  return { name, entry, exit };
}

const createArray = (monBTW, tueBTW, wedBTW, thuBTW, friBTW, monFTW, tueFTW, wedFTW, thuFTW, friFTW) => {
    return (
    [
    createData('Segunda-feira', monBTW, monFTW),
    createData('Terça-feira', tueBTW, tueFTW),
    createData('Quarta-feira', wedBTW, wedFTW),
    createData('Quinta-feira', thuBTW, thuFTW),
    createData('Sexta-feira', friBTW, friFTW)
    ]
    )
}

export default function DenseTable(props) {
  let monBTW = props.btw.mon ? props.btw.mon : '';
  let tueBTW = props.btw.tue ? props.btw.tue : '';
  let wedBTW = props.btw.wed ? props.btw.wed : '';
  let thuBTW = props.btw.thu ? props.btw.thu : '';
  let friBTW = props.btw.fri ? props.btw.fri : 'FOLGA';

  let monFTW = props.ftw.mon ? props.ftw.mon : '';
  let tueFTW = props.ftw.tue ? props.ftw.tue : '';
  let wedFTW = props.ftw.wed ? props.ftw.wed : '';
  let thuFTW = props.ftw.thu ? props.ftw.thu : '';
  let friFTW = props.ftw.fri ? props.ftw.fri : 'FOLGA';

  const rows = createArray(monBTW, tueBTW, wedBTW, thuBTW, friBTW, monFTW, tueFTW, wedFTW, thuFTW, friFTW);  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dia da Semana</TableCell>
            <TableCell align="right">Horário de Entrada</TableCell>
            <TableCell align="right">Horário de Saída</TableCell>
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
              <TableCell align="right">{row.entry}</TableCell>
              <TableCell align="right">{row.exit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}