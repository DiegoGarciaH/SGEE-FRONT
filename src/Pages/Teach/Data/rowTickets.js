import { useMemo } from "react";

export default function useRows() {
 const rows = useMemo(
   () => [
     {
       no: "1",
       matricula: "2031118456",
       estudiante: "Brayan Diego Garcia Hernandez",
       asistencia: 1
     },
     {
        no: "2",
        matricula: "2031118695",
        estudiante: "Juanito Perez Ruiz",
        cuatrimestre: "8",
        asistencia: 1
      },
      {
        no: "3",
        matricula: "2031118466",
        estudiante: "Kevin Emmanuel Jaramillo Lievano",
        asistencia: 1
      },
      {
        no: "4",
        matricula: "2031118226",
        estudiante: "Berenice Herrera Vanoye",
        asistencia: 0
      },
      {
        no: "5",
        matricula: "2031117436",
        estudiante: "Yahir Lazcano Dominguez",
        asistencia: 1
      },
      {
        no: "6",
        matricula: "203111835",
        estudiante: "Alumno 6",
        asistencia: 1
      },
      {
        no: "7",
        matricula: "2031118422",
        estudiante: "Alumno 7",
        asistencia: 1
      },
      {
        no: "8",
        matricula: "2031118489",
        estudiante: "Alumno 8",
        asistencia: 0
      },
      {
        no: "9",
        matricula: "2031112656",
        estudiante: "Alumno 9",
        cuatrimestre: "9",
        asistencia: 1
      }, 
      {
        no: "10",
        matricula: "1931112656",
        estudiante: "Alumno 10",
        asistencia: 1
      }
   ],
   []
 );

 return rows;
}
