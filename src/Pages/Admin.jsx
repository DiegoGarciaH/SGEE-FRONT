import React from 'react';
import styled from "styled-components";
import {Card } from './Components/CardAdmin';
import {faCalendar, faClipboardList, faUsersGear} from '@fortawesome/free-solid-svg-icons'

export const Admin = () => {
    const ContainerSection = styled.section`
    display: flex;
    justify-content: space-around;
  `;

    return (
    <main>
      <h2 className="title-main">
        SERVICIOS ADMINISTRADOR
      </h2>
      <ContainerSection className="flex-conteiner">
      
        <Card 
        linkTo="/AddEvent"
        name="Crear Evento" 
        icon={faCalendar}
        iconSize="50px"
        color="#DD4B39" 
        colorFont="#ECF0F5" 
        secondColor="#C64333" />

        <Card
        linkTo="/ControlSubjects"
        name="Control de Materias" 
        icon={faClipboardList}
        iconSize="50px"
        color="#00A65A" 
        colorFont="#ECF0F5"
        secondColor="#009551" />

        <Card 
        linkTo="/UserRol"
        name="Control Usuarios" 
        icon={faUsersGear}
        iconSize="50px"
        color="#0073B7" 
        colorFont="#ECF0F5"
        secondColor="#0067A4" />
      </ContainerSection>
    </main>
  )
}
