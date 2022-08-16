import React from 'react'
import { Container, Col, Row, Button, Nav, Navbar , NavDropdown } from 'react-bootstrap'
import './NavbarComponent.css'


const NavbarComponent = () => {
  return (
    <>
<Navbar collapseOnSelect expand="lg" >
      <Container >
        <Navbar.Brand href="#home" className='navbarLogo'>TWS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-start">
          <Nav className="me-auto d-flex justify-content-evenly" style={{width: '85%'}}>
            <Nav.Link href="#features" className='navbarText'>About us</Nav.Link>
            <Nav.Link href="#pricing" className='navbarText'>Team</Nav.Link>
            <Nav.Link href="#pricing" className='navbarText'>Services</Nav.Link>
            <Nav.Link href="#pricing" className='navbarText'>Benefits</Nav.Link>
            <Nav.Link href="#pricing" className='navbarText'>Cases</Nav.Link>
          </Nav>
          <Nav>
          
            <Nav.Link href="#deets" className='navbarButton'>Get Consultation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
  )
}

export default NavbarComponent