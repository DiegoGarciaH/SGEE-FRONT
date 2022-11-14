import React from 'react'
import { TableTickets } from '../Components/TableTickets'
import { QuestionConsult, LabelText, DropDrownList, Consultar, ButtonMail } from "../Components/Styless";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export const Tickets = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
   console.log(data);
 };

 const navigate = useNavigate()
 const SubmitData = () => {
 const resultado = window.confirm('Se enviaran los boletos, estas seguro de continuar?');
  if (resultado === true) {
    window.alert('Se enviaron los boletos correctamente');
  } else { 
      window.alert('No se enviaron los boletos');
      console.log("No se enviaron los boletos")
  }
        
 }
 
 const left = { paddingLeft: "20px" };
 
 

  return (
    <>
    <h1>Control de Materias Extracurriculares</h1>
    <form onSubmit={handleSubmit(onSubmit)} style={left}>
      {/* Seleccion de Grupo */}
      <QuestionConsult>
        <LabelText>Seleccione un periodo a consultar</LabelText>
        <br />
        <DropDrownList {...register("periodo")}>
          <option value="sep-dec22">Septiembre - Diciembre 2022</option>
          <option value="opt2">Enero - Abril 2023</option>
          <option value="opt3">Periodo 3</option>
          <option value="opt4">Periodo 4</option>
        </DropDrownList>
        <Consultar>Seleccionar</Consultar>
      </QuestionConsult>
      <QuestionConsult>
        <LabelText>Seleccione una materia a consultar</LabelText>
        <br />
        <DropDrownList {...register("materia")}>
          <option value="yoga">Yoga</option>
          <option value="oratoria">Oratoria</option>
          <option value="atletismo">Atletismo</option>
          <option value="lectura">Club de lectura</option>
        </DropDrownList>
        <Consultar>Seleccionar</Consultar>
      </QuestionConsult>
      <QuestionConsult>
        <LabelText>Seleccione un grupo a consultar</LabelText>
        <br />
        <DropDrownList {...register("grupo")}>
          <option value="opt1">Oratoria 1</option>
          <option value="opt2">Oratoria 2</option>
          <option value="opt3">Oratoria 3</option>
        </DropDrownList>
        <Consultar>Consultar</Consultar>
      </QuestionConsult>
    </form>
    
    <TableTickets />
    <ButtonMail onClick={SubmitData} >Enviar</ButtonMail>
    
    </>

  )
}
