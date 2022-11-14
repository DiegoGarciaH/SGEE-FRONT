import { useMemo } from "react";

export default function useRows() {
 const rows = useMemo(
   () => [
     {
       no: "1",
       matricula: "2031118456",
       usuario: "Brayan Diego Garcia Hernandez",
       rol: "Estudiante",
       materia: "Yoga",
       status: "Activo",
     },
     {
      no: "2",
      matricula: "20356",
      usuario: "Daniel López Juarez",
      rol: "Administrador",
      materia: "",
      status: "Activo",
    },
    {
      no: "3",
      matricula: "2037718236",
      usuario: "Ed Sheran",
      rol: "Estudiante",
      materia: "Canto",
      status: "Activo",
    },
    {
      no: "4",
      matricula: "2031118456",
      usuario: "Jaimito Hernandez",
      rol: "Maestro",
      materia: "Atletismo",
      status: "Inactivo",
    },
   ],
   []
 );

 return rows;
}
