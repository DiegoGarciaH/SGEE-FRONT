import { useMemo } from "react";

export default function useColumns() {
 const columns = useMemo(
   () => [
     {
       Header: "No.",
       accessor: "no"
     },
     {
       Header: "Matricula",
       accessor: "matricula"
     },
     {
       Header: "Estudiente",
       accessor: "estudiante"
     },
     {
        Header: "Asistencia",
        accessor: "asistencia"
      },
      ],
   []
 );

 return columns;
}
