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

export const PlaningEvent = () => {
    const {
        register,
        formState: { errors },
        watch,
        handleSubmit,
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    

  return (
    <>
      <h1>CREACION DE EVENTOS</h1>
      <h2>Planeacion del Evento</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Question>
          <LabelText>Lugar del Evento</LabelText>
          <TextField
            type="text"
            {...register("lugar", {
              required: true,
              maxLength: 255,
            })}
          />
          {errors.lugar?.type === "required" && (
            <Parragraph>El campo lugar es requerido</Parragraph>
          )}
          {errors.lugar?.type === "maxLength" && (
            <Parragraph>
              El campo lugar debe tener menos de 255 caracteres
            </Parragraph>
          )}
        </Question>
        <Question>
          <LabelText>Fecha del Evento</LabelText>
          <TextField
            type="date"
            {...register("fecha", {
              required: true,
            })}
          />
          {errors.fecha?.type === "required" && (
            <Parragraph>El campo fecha es requerido</Parragraph>
          )}
        </Question>
        <Question>
          <LabelText>Hora del Evento</LabelText>
          <TextField
            type="time"
            {...register("hora", {
              required: true,
            })}
          />
          {errors.hora?.type === "required" && (
            <Parragraph>La hora es requerido</Parragraph>
          )}
        </Question>

        <Question>
          <LabelText>Fecha de abrir registro</LabelText>
          <TextField
            type="date"
            {...register("fechaRegistro", {
              required: true,
            })}
          />
          {errors.fechaRegistro?.type === "required" && (
            <Parragraph>El campo fecha de registro es requerido</Parragraph>
          )}
        </Question>
        <Question>
          <LabelText>Hora de Abrir el Registro</LabelText>
          <TextField
            type="time"
            {...register("horaRegistro", {
              required: true,
            })}
          />
          {errors.horaRegistro?.type === "required" && (
            <Parragraph>La hora de registro es requerida</Parragraph>
          )}
        </Question>

       {/* Solucionar el route con el React hook */}
          <Question>
            <Send type="submit" value="Crear"></Send>
          </Question>
        {/* <Link to="/PlaningEvent">
          <Question>
            <Send type="submit" value="Enviar"></Send>
          </Question>
        </Link> */}
      </Form>
    </>
  )
}
