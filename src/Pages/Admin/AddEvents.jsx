import React from "react";
import { useForm } from "react-hook-form";
import {
  Question,
  Form,
  LabelText,
  Parragraph,
  SelectionField,
  Send,
  TextField,
} from "./styless";

import { Link } from 'react-router-dom';

export const AddEvents = () => {
  // formulario con hooks
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onClickSubmit = () => <Link to="/PlaningEvent"></Link>

  return (
    <>
      <h1>CREACION DE EVENTOS</h1>
      <h2>Datos Basicos del Evento</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Question>
          <LabelText>Nombre de Evento</LabelText>
          <TextField
            type="text"
            {...register("nombre", {
              required: true,
              maxLength: 255,
            })}
          />
          {errors.nombre?.type === "required" && (
            <Parragraph>El campo nombre es requerido</Parragraph>
          )}
          {errors.nombre?.type === "maxLength" && (
            <Parragraph>
              El campo nombre debe tener menos de 255 caracteres
            </Parragraph>
          )}
        </Question>

        <Question>
          <LabelText>Academico a Impartir</LabelText>
          <SelectionField {...register("academico")}>
            <option value="rocio">Rocio Shalashala</option>
            <option value="saul">Saul Shalashala</option>
            <option value="otro">Otro</option>
          </SelectionField>
        </Question>

        <Question>
          <LabelText>Materia Extrarricular Organizadora</LabelText>
          <SelectionField {...register("subject")}>
            <option value="yoga">Yoga</option>
            <option value="atletismo">Atletismo</option>
            <option value="oratoria">Oratoria</option>
            <option value="lectura">Club de Lectura</option>
          </SelectionField>
        </Question>

        <Question>
          <LabelText>Tipo de Evento</LabelText>
          <br />
          <div>
            <label htmlFor="interno">
              <input
                {...register("typeEvent", { required: true })}
                type="radio"
                name="typeEvent"
                value="Interno"
                className="form-check-input"
                id="interno"
              />{" "}
              Interno
            </label>
          </div>
          <div>
            <label htmlFor="externo">
              <input
                {...register("typeEvent", { required: true })}
                type="radio"
                name="typeEvent"
                value="Externo"
                className="form-check-input"
                id="externo"
              />{" "}
              Externo
            </label>
          </div>
          <Parragraph>
            {errors.typeEvent?.type === "required" &&
              "Seleccione el tipo de evento"}
          </Parragraph>
        </Question>
        <Question>
          <LabelText>Cupo del Evento</LabelText>
          <TextField
            type="number"
            {...register("cupo", {
              required: true,
            })}
          />
          {errors.cupo?.type === "required" && (
            <Parragraph>El campo cupo es requerido</Parragraph>
          )}
        </Question>
       {/* Solucionar el route con el React hook */}
          <Question>
            <Send type="submit" value="Enviar" onClick={onClickSubmit}></Send>
          </Question>
        {/* <Link to="/PlaningEvent">
          <Question>
            <Send type="submit" value="Enviar"></Send>
          </Question>
        </Link> */}
      </Form>
    </>
  );
};
