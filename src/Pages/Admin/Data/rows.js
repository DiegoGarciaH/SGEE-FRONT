import { useMemo } from "react";

export default function useRows() {
 const rows = useMemo(
   () => [
     {
       no: "1",
       matricula: "2031118456",
       estudiante: "Brayan Diego Garcia Hernandez",
       cuatrimestre: "7",
       carrera: "Software",
       unoevento: "Catrina",
       dosevento: "Carrera",
       extracurricular: "Oratoria"
     },
     {
        no: "2",
        matricula: "2031118695",
        estudiante: "Juanito Perez Ruiz",
        cuatrimestre: "8",
        carrera: "Terapia Fisica",
        unoevento: "Yoga para la salud",
        dosevento: "Sin evento",
        extracurricular: "Canto"
      },
      {
        no: "3",
        matricula: "2031118466",
        estudiante: "Kevin Emmanuel Jaramillo Lievano",
        cuatrimestre: "6",
        carrera: "Software",
        unoevento: "Altares",
        dosevento: "Aprendamos a hablar frente a todos",
        extracurricular: "Oratoria"
      },
      {
        no: "4",
        matricula: "2031118226",
        estudiante: "Berenice Herrera Vanoye",
        cuatrimestre: "4",
        carrera: "Biomedica",
        unoevento: "Sin evento",
        dosevento: "Sin evento",
        extracurricular: "Club de Lectura"
      },
      {
        no: "5",
        matricula: "2031117436",
        estudiante: "Yahir Lazcano Dominguez",
        cuatrimestre: "1",
        carrera: "Mecatronica",
        unoevento: "Carrera",
        dosevento: "Leamos para el mundo",
        extracurricular: "Atletismo"
      },
      {
        no: "6",
        matricula: "203111835",
        estudiante: "Alumno 6",
        cuatrimestre: "7",
        carrera: "Software",
        unoevento: "Catrina",
        dosevento: "Carrera",
        extracurricular: "Oratoria"
      },
      {
        no: "7",
        matricula: "2031118422",
        estudiante: "Alumno 7",
        cuatrimestre: "7",
        carrera: "Software",
        unoevento: "Catrina",
        dosevento: "Carrera",
        extracurricular: "Oratoria"
      },
      {
        no: "8",
        matricula: "2031118489",
        estudiante: "Alumno 8",
        cuatrimestre: "7",
        carrera: "Software",
        unoevento: "Catrina",
        dosevento: "Carrera",
        extracurricular: "Oratoria"
      },
      {
        no: "9",
        matricula: "2031112656",
        estudiante: "Alumno 9",
        cuatrimestre: "9",
        carrera: "Biomedica",
        unoevento: "Catrina",
        dosevento: "Carrera",
        extracurricular: "Oratoria"
      }, 
      {
        no: "10",
        matricula: "1931112656",
        estudiante: "Alumno 10",
        cuatrimestre: "10",
        carrera: "Mecanica",
        unoevento: "Catrina",
        dosevento: "Carrera",
        extracurricular: "Oratoria"
      }
   ],
   []
 );

 return rows;
}
