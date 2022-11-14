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
       Header: "Rol Deseado",
       accessor: "rol"
     }
   ],
   []
 );

 return columns;
}
