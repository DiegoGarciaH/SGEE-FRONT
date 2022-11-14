import React from 'react';
import { Card } from './Components/Card'
import { ContainerSection } from './Components/Styless'
import {faCalendar, faClipboardList, faUsersGear} from '@fortawesome/free-solid-svg-icons'

export const Teacher = () => {
  return (
    <main>
      <h2 className="title-main">
        SERVICIOS ACADEMICO
      </h2>
      <ContainerSection className="flex-conteiner">
      
        <Card 
        linkTo="/PassList"
        name="Pase de Lista" 
        icon={faCalendar}
        iconSize="50px"
        color="#DD4B39" 
        colorFont="#ECF0F5" 
        secondColor="#C64333" />

        <Card
        linkTo="/ControlSubjectsTeach"
        name="Control de Materias" 
        icon={faClipboardList}
        iconSize="50px"
        color="#00A65A" 
        colorFont="#ECF0F5"
        secondColor="#009551" />

        <Card 
        linkTo="/Tickets"
        name="Boletos" 
        icon={faUsersGear}
        iconSize="50px"
        color="#0073B7" 
        colorFont="#ECF0F5"
        secondColor="#0067A4" />
      </ContainerSection>
    </main>
  )
}
