import React from 'react'
import styled from "styled-components"

const FooterComponents = styled.p`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    color: #555C63;
    text-align: center;
`

export const Footer = () => {
  return (
    <FooterComponents>UNIVERSIDAD POLITÉCNICA DE PACHUCA. Carretera Pachuca-Cd. Sahagún km 20, Ex-Hacienda de Santa Bárbara, Municipio de Zempoala, Hidalgo. Tel. 52+ (771) 547 7510</FooterComponents>
  )
}
