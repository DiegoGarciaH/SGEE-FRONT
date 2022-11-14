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
       Header: "Usuario",
       accessor: "usuario"
     },
     {
       Header: "Rol",
       accessor: "rol"
     },
     {
      Header: "Materia",
      accessor: "materia"
    },
    {
      Header: "Status",
      accessor: "status"
    }
   ],
   []
 );

 return columns;
}
