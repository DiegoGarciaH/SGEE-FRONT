import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Card = (props) => {

 // Estilos
  const Container = styled.div`
    width: 300px;
    height: 190px;
    background-color: ${props.color};
    color: ${props.colorFont};
    border-radius: 25px;
    position: relative;
    text-align: center;
    padding: 0;
    margin:0;
    
  `

  const Title = styled.p`
    font-size: 25px;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    color: ${props.colorFont}
    font-weight: bold;
    text-decoration: none;
  `


  const Selection = styled.div`
    width: 300px;
    height: 40px;
    background-color: ${props.secondColor};
    color: ${props.colorFont};
    border-radius: 0px 0 25px 25px;;
    text-align: center;
    padding: 0;
    margin: 0;
    text-decoration: none;
    bottom:0;
    width: 100%;
    position: absolute;
  `

  /* 
  Tarjetas de Seleccion de Usuario
  */
  return (
    <Container >
      <Link to={props.linkTo} style={{ textDecoration: 'none', color: props.colorFont }}>
        <div>
        <Title>{props.name}</Title>
        <div style={{fontSize:`${props.iconSize}`, color:`${props.colorFont}`}}>
          <FontAwesomeIcon icon={props.icon} />
        </div>
        <Selection>
            <p style={{'malign-self': 'auto'}}>Seleccionar</p>
        </Selection>
        </div>
      </Link>
    </Container>
  )
}
