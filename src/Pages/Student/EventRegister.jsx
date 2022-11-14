import { QuestionConsult, LabelText, DropDrownList, Consultar, ContainerRegister, TitleCupo, Cupo, Parragraph, Question, TextField, Send } from "../Components/Styless";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

export const EventRegister = () => {

  const navigate = useNavigate()

  const { register, formState: { errors } , handleSubmit } = useForm();
  const onSubmit = (data) => {
   console.log(data);
   navigate('/Inscription')
 };
 const left = { paddingLeft: "20px" };



  return (
    <>
    <h1>Registro de Eventos Masivos para Materias Extracurriculares</h1>
    <form onSubmit={handleSubmit(onSubmit)} style={left}>
      {/* Seleccion de Grupo */}
      <QuestionConsult>
        <LabelText>Seleccione un evento a consultar</LabelText>
        <br />
        <DropDrownList {...register("evento")}>
          <option placeholder="Seleccion">Seleccione un evento</option>
          <option value="op1">Carrera por un corazon de Metal</option>
          <option value="opt2">Yoga para mejorar mentalmente</option>
          <option value="opt3">Guitarra para todos</option>
          <option value="opt4">Ajedrez y su historia</option>
        </DropDrownList>
        <Consultar>Seleccionar</Consultar>
      </QuestionConsult>
    </form>

    <ContainerRegister>
    <TitleCupo>Cupo:</TitleCupo>
    <Cupo>Quedan 45 Lugares</Cupo>

    <Question>
          <LabelText>¿Tienes alguna incapacidad que deba saberse?</LabelText>
          <br />
          <div>
            <label htmlFor="si">
              <input
                {...register("incapacidad", { required: true })}
                type="radio"
                name="incapacidad"
                value="si"
                className="form-check-input"
                id="si"
              />{" "}
              Si
            </label>
          </div>
          <div>
            <label htmlFor="no">
              <input
                {...register("incapacidad", { required: true })}
                type="radio"
                name="incapacidad"
                value="no"
                className="form-check-input"
                id="no"
              />{" "}
              No
            </label>
          </div>
          <Parragraph>
            {errors.incapacidad?.type === "required" &&
              "Seleccione el tipo de evento"}
          </Parragraph>
        </Question>

        <Question>
          <LabelText>Mencione la discapacidad y indisposiciones referentes</LabelText>
          <TextField 
            type="text"
            {...register("descricion", {
              required: true,
              maxLength: 255,
            })}
          />
          {errors.descricion?.type === "required" && (
            <Parragraph>El campo descricion es requerido</Parragraph>
          )}
          {errors.descricion?.type === "maxLength" && (
            <Parragraph>
              El campo descricion debe tener menos de 255 caracteres
            </Parragraph>
          )}
        </Question>

        <Question>
            <Send type="submit" value="Enviar" onClick={onSubmit}></Send>
          </Question>

    </ContainerRegister>
    
 
    </>
  )
}
