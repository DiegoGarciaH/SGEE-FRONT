import React from 'react'
import { useForm } from "react-hook-form";
import {
  Question,
  Form,
  LabelText,
  Parragraph,
  Send,
  TextField,
} from "./Styless";

import { Link, useNavigate } from 'react-router-dom';



export const LoginCard = (props) => {

    const navigate = useNavigate()
     // formulario
     const {
        register,
        formState: { errors },
        watch,
        handleSubmit,
      } = useForm();
      
      let haveData = false;

      const onSubmit = (data) => {
        console.log(data);
        console.log(haveData);
        navigate('/admin')
      };




  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{margin: '50px',}}>Inicia Seccion como {props.user}</h3>
        <Question>
          <LabelText>Email</LabelText>
          <TextField
            type="mail"
            {...register("mail", {
              required: true,
              maxLength: 255,
            })}
            {...TextField === "" && errors.mail.root === undefined ? haveData=false : haveData=true }
          />
          {errors.mail?.type === "required" && (
            <Parragraph>El campo mail es requerido</Parragraph>
          )}
          {errors.mail?.type === "maxLength" && (
            <Parragraph>
              El campo mail debe tener menos de 255 caracteres
            </Parragraph>
          )}
        </Question>

        <Question>
          <LabelText>Contraseña</LabelText>
          <TextField
            type="password"
            {...register("pass", {
              required: true,
              maxLength: 50,
            })}
          />
          {errors.pass?.type === "required" && (
            <Parragraph>El campo password es requerido</Parragraph>
          )}
          {errors.pass?.type === "maxLength" && (
            <Parragraph>
              El campo password debe tener menos de 50 caracteres
            </Parragraph>
          )}
        </Question>

       {/* Solucionar el route con el React hook */}
          {/* <Question>
            <Send type="submit" value="Enviar"></Send>
          </Question> */}
        {/* <Link to={haveData == true ? '/login/#' : '/admin'}> */}
          <Question>
            <Send type="submit" value="Enviar"></Send>
          </Question>
        {/* </Link> */}

        <p style={{margin: '50px'}}>Aun no estas Registrado?
        <Link to="/Sign-up" style={{textDecoration: 'none', color: 'blue'}}> Registrate Aqui</Link>
         </p>
      </Form>
  )
}
