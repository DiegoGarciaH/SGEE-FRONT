
import { QuestionConsult, LabelText, DropDrownList, Consultar} from "../Components/Styless";
import { useForm } from "react-hook-form";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { Link } from 'react-router-dom';
import { TableControl } from '../Components/TableControl';


export const ControlSubjectsTeach = () => {

    
 const { register, handleSubmit } = useForm();
 const onSubmit = (data) => {
  console.log(data);
};

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
    
    <TableControl />
    </>
  )
}
