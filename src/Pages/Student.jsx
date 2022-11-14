import React from 'react'
import { Card } from './Components/Card'
import { ContainerSection } from './Components/Styless'
import {faFilePen, faTicket} from '@fortawesome/free-solid-svg-icons'

export const Student = () => {
  return (
    <main>
    <h2 className="title-main">
      SERVICIOS ALUMNOS
    </h2>
    <ContainerSection className="flex-conteiner">
    
      <Card 
      linkTo="/EventRegister"
      name="Registro Eventos" 
      icon={faFilePen}
      iconSize="50px"
      color="#DD4B39" 
      colorFont="#ECF0F5" 
      secondColor="#C64333" />

      <Card
      linkTo="/SeeTickets"
      name="Ver Boletos" 
      icon={faTicket}
      iconSize="50px"
      color="#00A65A" 
      colorFont="#ECF0F5"
      secondColor="#009551" />
    </ContainerSection>
  </main>
  )
}
