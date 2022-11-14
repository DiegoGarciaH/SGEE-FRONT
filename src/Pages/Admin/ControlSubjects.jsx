import React from "react";
import { useForm } from "react-hook-form";
import { Question, LabelText, DropDrownList, Consultar, HeaderTable, HeaderShape, Table, TableRows, TableData} from "./styless";
import { useTable, useSortBy } from "react-table";
import useRows from "./Data/rows";
import useColumns from "./Data/columns";


export const ControlSubjects = () => {
  // formulario
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const left = { paddingLeft: "20px" };
// Tabla
  const columns = useColumns();
  const data = useRows();
  const table = useTable({ columns, data }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  table;

  
  return (
    <>
      <h1 style={left}>CONTROL DE MATERIAS EXTRACURRICULARES</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={left}>
        {/* Seleccion de Grupo */}
        <Question>
          <LabelText>Seleccione el periodo a consultar</LabelText>
          <br />
          <DropDrownList {...register("periodo")}>
            <option value="sep-dic">Septiembre-Diciembre 2022</option>
            <option value="ene-abr">Enero-Abril 2023</option>
            <option value="jun-ago">Junio-Agosto 2023</option>
          </DropDrownList>
          <Consultar>Seleccionar</Consultar>
        </Question>

        <Question>
          <LabelText>Seleccione un Grupo a consultar</LabelText>
          <br />
          <DropDrownList {...register("Grupo")}>
            <option value="yoga-01">Yoga 01 </option>
            <option value="yoga-02">Yoga 02</option>
            <option value="oratoria-01">Oratoria 01</option>
            <option value="oratoria-02">Oratoria 02</option>
            <option value="oratoria-03">Oratoria 03</option>
          </DropDrownList>
          <Consultar>Consultar</Consultar>
        </Question>
      </form>
      {/* Tabla */}

      {/* Añadimos las propiedades a nuestra tabla nativa */}
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
                </TableRows>
              );
            })
          }
        </tbody>
      </Table>
    </>
  );
};
