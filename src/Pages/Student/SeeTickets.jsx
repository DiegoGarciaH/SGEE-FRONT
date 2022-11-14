import React from 'react';
import { Title } from '../Components/Styless';
import {TableStudentTicket} from '../Components/TableStudentTicket'

export const SeeTickets = () => {
  return (
    <> 
      <Title style={{textAlign: 'center', fontSize: '30px', fontWeight: 'bold'}}>Ver Boletos</Title>
      <br />
      <TableStudentTicket />
    </>



  )
}
