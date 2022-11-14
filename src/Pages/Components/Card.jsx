import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Selection } from './Styless'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const Card = (props) => {

  return (
    <Container color={props.color} colorFont={props.colorFont}> 
          <Link to={props.linkTo} style={{ textDecoration: 'none', color: props.colorFont }}>
            <div>
            <Title colorFont={props.colorFont}>{props.name}</Title>
            <div style={{fontSize:`${props.iconSize}`, color:`${props.colorFont}`}}>
              <FontAwesomeIcon icon={props.icon} />
            </div>
            <Selection secondColor={props.secondColor} colorFont={props.colorFont} >
                <p style={{'malignSelf': 'auto'}}>Seleccionar</p>
            </Selection>
            </div>
          </Link>
        </Container>
  )
}
