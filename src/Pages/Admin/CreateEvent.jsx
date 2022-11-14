import React from 'react'
import {TitleCenter, ButtonHome} from './styless'
import { Link } from 'react-router-dom';

export const CreateEvent = () => {
  return (
    <>
    <TitleCenter>Evento Creado Correctamente🎉🏅</TitleCenter>
    <Link to="/Admin" >
    <ButtonHome>
        Regresar
    </ButtonHome>
    </Link>
    </>
  )
}
