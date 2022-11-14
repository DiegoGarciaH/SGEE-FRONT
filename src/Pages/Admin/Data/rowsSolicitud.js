import { useMemo } from "react";

export default function useRows() {
 const rows = useMemo(
   () => [
     {
       no: "1",
       matricula: "2031118456",
       usuario: "Brayan Diego Garcia Hernandez",
       rol: "Maestro",
     },
     {
      no: "2",
      matricula: "20356",
      usuario: "Daniel López Juarez",
      rol: "Administrador",
    },
    {
      no: "3",
      matricula: "2037718236",
      usuario: "Ed Sheran",
      rol: "Maestro",
    },
    {
      no: "4",
      matricula: "2031118456",
      usuario: "Jaimito Hernandez",
      rol: "Maestro",
    },
   ],
   []
 );

 return rows;
}
