import React from 'react';
import { useTable, useSortBy } from "react-table";
import useRows from "../Teach/Data/rowsControl";
import useColumns from "../Teach/Data/columnsControl";
import { Table, HeaderTable, HeaderShape, TableRows, TableData } from './Styless';



export const TableControl = () => {
    
        // Tabla  
        const columns = useColumns();
        const data = useRows();
        const table = useTable({ columns, data }, useSortBy);
        const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        table;
    

    return (
    <div style={{textAlign: 'center'}}>
    <Table {...getTableProps()}>
      <HeaderTable>
        {
          // Recorremos las columnas que previamente definimos
          headerGroups.map((headerGroup) => (
            // Añadimos las propiedades al conjunto de columnas
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Recorremos cada columna del conjunto para acceder a su información
                headerGroup.headers.map((column) => (
                  // Añadimos las propiedades a cada celda de la cabecera
                  <HeaderShape {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={
                     column.isSorted
                       ? column.isSortedDesc
                         ? "desc"
                         : "asc"
                       : ""
                   }
                 >
                  
                   {
                     // Pintamos el título de nuestra columna (propiedad "Header")
                   column.render("Header")
                   }
                 </HeaderShape>

                ))
              }
              <HeaderShape >Editar Evento</HeaderShape>
            </tr>
          ))
        }
      </HeaderTable>

      {/* Añadimos las propiedades al cuerpo de la tabla */}
      <tbody {...getTableBodyProps()}>
        {
          // Recorremos las filas
          rows.map((row) => {
            // Llamamos a la función que prepara la fila previo renderizado
            prepareRow(row);
            return (
              // Añadimos las propiedades a la fila
              <TableRows {...row.getRowProps()}>
                {
                  // Recorremos cada celda de la fila
                  row.cells.map((cell) => {
                    // Añadimos las propiedades a cada celda de la fila
                    return (
                      <TableData {...cell.getCellProps()}>
                        {
                          // Pintamos el contenido de la celda
                          cell.render("Cell")
                        }
                      </TableData>
                      
                    );
                    
                  })
                }
                <td>
                        <button >Editar</button>
                </td>
              </TableRows>
            );
          })
        }
      </tbody>
    </Table>
          
    </div>
  )
}
