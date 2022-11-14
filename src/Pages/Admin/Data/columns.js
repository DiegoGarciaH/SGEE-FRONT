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
      Header: "Carrera (PE)",
      accessor: "carrera"
    },
    {
      Header: "Primer Evento",
      accessor: "unoevento"
    },
    {
      Header: "Segundo Evento",
      accessor: "dosevento"
    },
    {
      Header: "Extracurricular",
      accessor: "extracurricular"
    },
   ],
   []
 );

 return columns;
}
