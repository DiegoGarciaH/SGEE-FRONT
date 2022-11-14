import React from 'react'
import { Title, ButtonMail } from '../Components/Styless'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQrcode} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export const Inscription = () => {


 
  const handleSubmit = () => {
    const resultado = window.confirm('Se descargara el archivo pdf');
    if (resultado === true) {
      window.alert('Comenzo descarga');
    } else { 
        window.alert('No se descargo nada');
    }
  }
  return (
    <>
    <Title style={{textAlign: 'center', fontSize: '50px', fontWeight: 'bold' }} >Registro Correcto</Title>
    <br />
    <div style={{fontSize:`80px`, color:`#21232A`, margin:"80px", textAlign: 'center'}}>

    <FontAwesomeIcon icon={faQrcode}   />
    </div>
    <br />
    <ButtonMail onClick={handleSubmit} style={{backgroundColor: '#19A13F'}}>Descargar Codigo QR</ButtonMail>

<div style={{ textAlign: 'center', weight: '40px', marginTop: '20px', }}>
    <Link to={'/student'} style={{backgroundColor: 'blue', fontSize:`20px`, color:`#fafafa`, padding:"5px",  borderRadius: '15px', textDecoration: 'none',}} >Regresar a menu</Link>

</div>
    
    </>
  )
}
