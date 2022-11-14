import styled from "styled-components";

// Cards

export const Container = styled.div`
  width: 300px;
  height: 190px;
  background-color: ${(props) => props.color || "#DD4B39"};
  color: ${(props) => props.colorFont || "#ECF0F5"};
  border-radius: 25px;
  position: relative;
  text-align: center;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    margin: 10px;
  }
`;

export const Title = styled.p`
    font-size: 25px;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    color: ${(props) => props.colorFont || "#ECF0F5"}
    font-weight: bold;
    text-decoration: none;
    
  `;

export const Selection = styled.div`
  width: 300px;
  height: 40px;
  background-color: ${(props) => props.secondColor || "#C64333"};
  color: ${(props) => props.colorFont || "#ECF0F5"};
  border-radius: 0px 0 25px 25px;
  position: relative;
  text-align: center;
  padding: 0;
  margin: 0;
  text-decoration: none;
  bottom: 0;
  width: 100%;
  position: absolute;
`;

export const ContainerSection = styled.section`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    
  }
`;

// Componentes Del Formulario

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
  margin: 50px;
`;
export const QuestionConsult = styled.div`
  margin: 15px;
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
`;

// Pase de Lsita


export const Consultar = styled.button`
background-color: #9109B4;
color: #ECF0F5;
font-size: 18px;
width: 180px;
height: 38px;
border-radius: 10px;
margin-left: 30px;
`
export const DropDrownList = styled.select`
background-color: #fafafa;
width: 65%;
height: 38px;
border-radius: 15px;
color: #21232a;
`;

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
export const ButtonMail = styled.button`
position: relative;
text-align: center;
background-color: blue;
border-radius: 15px;
width: 300px;
height: 40px;
align-items: center;
color: #fafafa;
font-size: 20px;
font-weight: bold;
display: flex;
justify-content: center;
left: 40%;
margin-top: 20px;
`

// Estilos De Registro de eventos
export const ContainerRegister = styled.div`
width: 500px;
height: 650px;
padding: 15px;
background-color: #fafafa;
margin: 0px auto;
border-radius: 25px;
`

export const TitleCupo = styled.p`
font-size: 30px;
font-weight: bold;
color: #555C63;
text-align: center;
`

export const Cupo = styled.p`
font-size: 30px;
font-weight: bold;
color: #3DA53B;
text-align: center;
`
