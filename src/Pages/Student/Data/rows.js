import { useMemo } from "react";

export default function useRows() {
 const rows = useMemo(
   () => [
     {
       no: "1",
       matricula: "2031118456",
       estudiante: "Brayan Diego Garcia Hernandez",
       evento: "evento 1"
     },
     {
        no: "2",
        matricula: "2031118456",
        estudiante: "Brayan Diego Garcia Hernandez",
        evento: "evento 2",
      },
      {
        no: "3",
        matricula: "2031118456",
        estudiante: "Brayan Diego Garcia Hernandez",
        evento: "evento 3"
      },
      {
        no: "4",
        matricula: "2031118456",
        estudiante: "Brayan Diego Garcia Hernandez",
        evento: "evento 4"
      },
      {
        no: "5",
        matricula: "2031118456",
        estudiante: "Brayan Diego Garcia Hernandez",
        evento: "evento 5"
      },
      {
        no: "6",
        matricula: "2031118456",
        estudiante: "Brayan Diego Garcia Hernandez",
        evento: "evento 6"
      },
   ],
   []
 );

 return rows;
}
