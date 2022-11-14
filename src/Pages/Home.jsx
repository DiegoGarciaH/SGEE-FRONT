import React from "react";
import styled from "styled-components";
import {Card} from './Components/Card'
import {faUserTie, faChalkboardUser, faGraduationCap} from '@fortawesome/free-solid-svg-icons'


export const Home = () => {
  const ContainerSection = styled.section`
    display: flex;
    justify-content: space-around;
  `
  
  return (
    <main>
      <h2 className="title-main">
        SISTEMA DE GESTION DE EVENTOS EXTRACURRICULARES
      </h2>
      <h3 className="subtitle-main">Seleccione su perfil</h3>
      <ContainerSection className="flex-conteiner">
       
        
        <Card 
        linkTo="/Login"
        name="Administrativos" 
        icon={ faUserTie }
        iconSize="50px"
        color="#DD4B39" 
        colorFont="#ECF0F5" 
        secondColor="#C64333" />

        <Card
        linkTo="/Login"
        name="Academicos" 
        icon={faChalkboardUser} 
        iconSize="50px"
        color="#00A65A" 
        colorFont="#ECF0F5"
        secondColor="#009551" />

        <Card 
        linkTo="/Login"
        name="Alumnos" 
        icon={faGraduationCap} 
        iconSize="50px"
        color="#0073B7" 
        colorFont="#ECF0F5"
        secondColor="#0067A4" />
      </ContainerSection>
    </main>
  );
};
