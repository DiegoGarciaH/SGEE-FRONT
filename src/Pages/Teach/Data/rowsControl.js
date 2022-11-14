import { useMemo } from "react";

export default function useRows() {
 const rows = useMemo(
   () => [
     {
       no: "1",
       matricula: "2031118456",
       estudiante: "Brayan Diego Garcia Hernandez",
       cuatrimestre: "8",
       carrera: "Mecanica Automotriz",
       extracurricular: "Club de Lectura",
       eventos: 2
     },
     {
        no: "2",
        matricula: "2031118695",
        estudiante: "Juanito Perez Ruiz",
        cuatrimestre: "6",
        carrera: "Mecatronica",
        extracurricular: "Club de Lectura",
        eventos: 2
      },
      {
        no: "3",
        matricula: "2031118466",
        estudiante: "Kevin Emmanuel Jaramillo Lievano",
        cuatrimestre: "5",
        carrera: "Software",
        extracurricular: "Club de Lectura",
        eventos: 2
      },
      {
        no: "4",
        matricula: "2031118226",
        estudiante: "Berenice Herrera Vanoye",
        cuatrimestre: "6",
        carrera: "Redes y Telecomunicaciones",
        extracurricular: "Club de Lectura",
        eventos: 1
      },
      {
        no: "5",
        matricula: "2031117436",
        estudiante: "Yahir Lazcano Dominguez",
        cuatrimestre: "2",
        carrera: "Mecanica Automotriz",
        extracurricular: "Club de Lectura",
        eventos: 0
      },
      {
        no: "6",
        matricula: "203111835",
        estudiante: "Alumno 6",
        cuatrimestre: "3",
        carrera: "Terapia Fisica",
        extracurricular: "Club de Lectura",
        eventos: 1
      },
      {
        no: "7",
        matricula: "2031118422",
        estudiante: "Alumno 7",
        cuatrimestre: "6",
        carrera: "Software",
        extracurricular: "Club de Lectura",
        eventos: 2
      },
      {
        no: "8",
        matricula: "2031118489",
        estudiante: "Alumno 8",
        cuatrimestre: "3",
        carrera: "Biomedica",
        extracurricular: "Club de Lectura",
        eventos: 2
      },
      {
        no: "9",
        matricula: "2031112656",
        estudiante: "Alumno 9",
        cuatrimestre: "1",
        carrera: "Biomedica",
        extracurricular: "Club de Lectura",
        eventos: 2
      }, 
      {
        no: "10",
        matricula: "1931112656",
        estudiante: "Alumno 10",
        cuatrimestre: "7",
        carrera: "Terapia Fisica",
        extracurricular: "Club de Lectura",
        eventos: 0
      }
   ],
   []
 );

 return rows;
}
