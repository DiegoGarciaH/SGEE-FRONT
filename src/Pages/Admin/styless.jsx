import styled from "styled-components";

  // Componentes EStilizados
  // Componentes AddEvents 1
 export const Form = styled.form`
    width: 500px;
    height: 450px;
    padding: 15px;
    background-color: #fafafa;
    margin: 0px auto;
    border-radius: 25px;
  `;
  export const LabelText = styled.label`
  color: #21232A
  font-size: 40px;
  font-weight: bold;
  `;

  export const TextField = styled.input`
    background-color: #fafafa;
    width: 95%;
    height: 30px;
    border-radius: 15px;
    color: #21232a;
  `;

  export const Parragraph = styled.p`
    color: red;
    font-size: 10px;
    margin-top: 0;
  `;
  export const SelectionField = styled.select`
    background-color: #fafafa;
    width: 95%;
    height: 38px;
    border-radius: 15px;
    color: #21232a;
  `;

  export const Question = styled.div`
    margin-top: 15px;
  `;

  export const Send = styled.input`
    background-color: blue;
    width: 95%;
    height: 40px;
    border-radius: 15px;
    color: #fafafa;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  `

  // Create Event
  export const TitleCenter = styled.h3`
  color: #21232A;
  font-size: 50px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  `

  export const ButtonHome = styled.button`
  background-color: #19A13F;
  color: #ECF0F5;
  font-size: 20px;
  width: 180px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  `

// Control Subjects
export const DropDrownList = styled.select`
background-color: #fafafa;
width: 65%;
height: 38px;
border-radius: 15px;
color: #21232a;
`;

export const Consultar = styled.button`
background-color: #9109B4;
color: #ECF0F5;
font-size: 18px;
width: 180px;
height: 38px;
border-radius: 10px;
margin-left: 30px;
`

// Tabla

export const Table = styled.table`
border-collapse: collapse;
margin: 50px auto auto auto;
`
export const HeaderTable = styled.thead`
background-color: #9109B4;
color: #ECF0F5;
border: 1px;
`;

export const HeaderShape = styled.th`
background-color: #9109B4;
color: #ECF0F5;
border: 1px;
`;

export const TableRows = styled.tr`
  &:nth-child(even) {
	background: #FDFDFD;
}
&:nth-child(odd) {
	background: #E3E3E3;
}
`;

export const TableData = styled.td`
padding: 10px;
text-align: auto;
`

