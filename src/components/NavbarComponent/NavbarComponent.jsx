import React, {useContext, useState} from 'react'
import { Container, Col, Row, Button, Nav, Navbar , NavDropdown } from 'react-bootstrap'
import {LangContext} from '../../context/langContext'
import './NavbarComponent.css'
import Argentina from '../../assets/argentina.svg'
import EEUU from '../../assets/EEUU.png'


const NavbarComponent = () => {

  const {language, setLanguage} = useContext(LangContext);



  return (
    <>
<Navbar collapseOnSelect expand="lg" >
      <Container > 
        <Navbar.Brand href="#home" className='navbarLogo'>TWS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-start">
          <Nav className="me-auto d-flex justify-content-evenly" style={{width: '85%'}}>
            <Nav.Link href="#features" className='navbarText'>{language === 'es' ? "Sobre Nosotros" : "About us"}</Nav.Link>
            <Nav.Link href="#pricing" className='navbarText'>{language === 'es' ? "Equipo" : "Team"}</Nav.Link>
            <Nav.Link href="#pricing" className='navbarText'>{language === 'es' ? "Servicios" : "Services"}</Nav.Link>
            <Nav.Link href="#pricing" className='navbarText'>{language === 'es' ? "Beneficios" : "Benefits"}</Nav.Link>
            <Nav.Link href="#pricing" className='navbarText'>{language === 'es' ? "Casos" : "Cases"}</Nav.Link>
            <Nav.Link >
            <img src={Argentina} width="32px" onClick={ ()=> setLanguage('es')} alt='arg' />
            &nbsp;&nbsp;
            <img src={EEUU} width="32px" onClick={()=>setLanguage('en')} alt='EEUU'/>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='navbarButton'>{language === 'es' ? "Contactanos" : "Get Consultation"}</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
  )
}

export default NavbarComponent