import React from 'react';
import { QuestionConsult, LabelText, DropDrownList, Consultar} from "../Components/Styless";
import { useForm } from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export const QRList = () => {
  
 const { register, handleSubmit } = useForm();
 const onSubmit = (data) => {
  console.log(data);
};

const left = { paddingLeft: "20px" };



  return (
    <>
    <h1>Pase de lista</h1>
    <form onSubmit={handleSubmit(onSubmit)} style={left}>
      {/* Seleccion de Grupo */}
      <QuestionConsult>
        <LabelText>Seleccione un evento a consultar</LabelText>
        <br />
        <DropDrownList {...register("user")}>
          <option value="carrera">Carrera por un corazon de Metal</option>
          <option value="yogaMental">Yoga en la Mejora Mental</option>
          <option value="acondicionamientoSalud">Acondicionamiento Fisico para una mejor Salud</option>
          <option value="yogaInterno2022">Yoga evento interno 2022</option>
        </DropDrownList>
        <Consultar>Seleccionar</Consultar>
        <Link to={'/PassList'} style={{fontSize:`80px`, color:`#21232A`, margin:"80px"}} >
          <FontAwesomeIcon icon={faList} />
        </Link>
      </QuestionConsult>
    </form>
    
    </>
  )
}
