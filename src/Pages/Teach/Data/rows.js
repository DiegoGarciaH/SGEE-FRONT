import { useMemo } from "react";

export default function useRows() {
 const rows = useMemo(
   () => [
     {
       no: "1",
       matricula: "2031118456",
       estudiante: "Brayan Diego Garcia Hernandez",
     },
     {
        no: "2",
        matricula: "2031118695",
        estudiante: "Juanito Perez Ruiz",
        cuatrimestre: "8",
      },
      {
        no: "3",
        matricula: "2031118466",
        estudiante: "Kevin Emmanuel Jaramillo Lievano",
      },
      {
        no: "4",
        matricula: "2031118226",
        estudiante: "Berenice Herrera Vanoye",
      },
      {
        no: "5",
        matricula: "2031117436",
        estudiante: "Yahir Lazcano Dominguez",
      },
      {
        no: "6",
        matricula: "203111835",
        estudiante: "Alumno 6",
      },
      {
        no: "7",
        matricula: "2031118422",
        estudiante: "Alumno 7",
      },
      {
        no: "8",
        matricula: "2031118489",
        estudiante: "Alumno 8",
      },
      {
        no: "9",
        matricula: "2031112656",
        estudiante: "Alumno 9",
        cuatrimestre: "9",
      }, 
      {
        no: "10",
        matricula: "1931112656",
        estudiante: "Alumno 10",
      }
   ],
   []
 );

 return rows;
}
