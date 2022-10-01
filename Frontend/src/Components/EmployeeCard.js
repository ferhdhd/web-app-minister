import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ClassNames } from '@emotion/react';
import './EmployeeCard.css'
import Table from './Table.js';
import TableSchedule from './TableSchedule.js'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function EmployeeCard(props) {
  
  var cardName = props.employeeName ? props.employeeName : '';
  var cardSurname = props.employeeSurname ? props.employeeSurname : '';
  var cardImg = props.employeePhoto ? props.employeePhoto : '';
  var cardPhone = props.employeePhone ? props.employeePhone : '';
  var cardExtension= props.employeeExtension ? props.employeeExtension : '';
  var cardEmail = props.employeeEmail ? props.employeeEmail : '';
  var cardJob = props.employeeJob ? props.employeeJob : '';
  var cardBTW = props.employeeBTW ? props.employeeBTW : '';
  var cardFTW = props.employeeFTW ? props.employeeFTW : '';
  var cardSchedule = props.employeeSchedule ? props.employeeSchedule : '';
  
  const [clicked, setClicked] = useState(-1);

  const LearnMore = (value, job) => {
    if (value === 1) {
      if(job === 'Ministro X') {
       return (
        <div className='background-card-body-minister'>
          <h4>Telefone: {cardPhone}</h4>
          <h4>Ramal: {cardExtension}</h4>
          <h4>Email: <a className='link-color' href='mailto:`{cardEmail}`'>{cardEmail}</a></h4>
          <h4>Cargo: {cardJob}</h4>
          <h2>Horários em que bateu o ponto: </h2>
          <Table
            btw={cardBTW} 
            ftw={cardFTW}
          />
          <h2>Agenda da semana:</h2>
          <TableSchedule
            schedule={cardSchedule}
          />
        </div>
      )
    } else {
      return (
        <div className='background-card-body'>
          <h4>Telefone: {cardPhone}</h4>
          <h4>Ramal: {cardExtension}</h4>
          <h4>Email: <a className='link-color' href='mailto:`{cardEmail}`'>{cardEmail}</a></h4>
          <h4>Cargo: {cardJob}</h4>
          <h2>Horários em que bateu o ponto: </h2>
          <Table
            btw={cardBTW} 
            ftw={cardFTW}
          />
          <h2>Agenda da semana:</h2>
          <TableSchedule
            schedule={cardSchedule}
          />
        </div>
      )
    }
   }
  }

  const borderMinister = (job) => {
    if(job === 'Ministro X') {
      return (
      <div className='background-image-minister'>
        <img className='border-img-minister'src={cardImg}></img>
      </div>
      )
    } else {
      return (
      <div className='background-image'>
        <img className='border-img'src={cardImg}></img>
      </div>
      )
    }
  }

  const employeesName = (job) => {
    if (job === 'Ministro X') {
      return (
        <Typography className='name-minister' sx={{ fontSize: 20 }} gutterBottom>
          {cardName + ' ' + cardSurname}
        </Typography>
      )
    } else {
      return (
      <Typography className='name' sx={{ fontSize: 20 }} gutterBottom>
          {cardName + ' ' + cardSurname}
        </Typography>
      )
    }
  }
  
    return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {employeesName(cardJob)}
        <Typography variant="h5" component="div">
          {borderMinister(cardJob)}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {LearnMore(clicked,cardJob)}
        </Typography>
        <Typography variant="body2">
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => {setClicked(clicked *-1)}}>Saiba mais</Button>
      </CardActions>
    </Card>
  );
}