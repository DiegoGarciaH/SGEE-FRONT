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
        Header: "Cuatrimestre",
        accessor: "cuatrimestre"
      },
      {
        Header: "Carrera",
        accessor: "carrera"
      },
      {
        Header: "Extracurricular",
        accessor: "extracurricular"
      },
      {
        Header: "Eventos Realizados",
        accessor: "eventos"
      },
      ],
   []
 );

 return columns;
}