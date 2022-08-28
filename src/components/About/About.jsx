import React, {useContext} from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { MdOutlineLabel } from 'react-icons/md';
import {LangContext} from '../../context/langContext'
import './About.css'

const About = () => {
  const { language } = useContext(LangContext);

  return (
    
      <Container
        className="d-flex flex-column align-items-center justify-content-evenly" style={{marginBottom: '3rem', marginTop: '4rem'}}
      >
        <Row style={{marginBottom: '3rem'}}>
          <Col>
            <h1 className='title-about'>{language === 'es' ? <>¿QUÉ ES THE WEB STUDIO?</>: <>WHAT IS THE WEB STUDIO ?</>}</h1>
          </Col>
        </Row>
        <Row style={{marginBottom: '2rem' }}>
          <Col className="d-flex flex-column align-items-center ">
            <p className='p-about'>
              {language === 'es' ? <>The Web Studio es un equipo de profesionales en IT y comunicaciones de Buenos Aires. Argentina.
              Un país famoso por soluciones digitales de altisima calidad a buen precio. Desde 2021 estamos brindandole las soluciones que necesita con las últimas técnologias.
              </> 
              : <>The Web Studio is a team of top-notch IT and Communication
              professionals with rich product experience from Buenos Aires. A
              Country famous for high-quality and affordable software solutions.
              Since 2021 we are bringing to you the solution you need with the
              latest software available.</>}
              
            </p>
          </Col>
        </Row>
        <Row style={{ textAlign: "center"}}>
          <Col className='d-flex align-items-center justify-content-center mb-3'>
            <MdOutlineLabel style={{ color: "#E94560", marginRight: '0.5rem'}}/>
            <label>{language === 'es' ? <>Planeamiento</>: <>Planning</>}</label>
          </Col>
          <Col className='d-flex align-items-center justify-content-center mb-3'>
            <MdOutlineLabel style={{ color: "#E94560", marginRight: '0.5rem'}}/>
            <label>{language === 'es' ? <>Desarrollo</>: <>Developing</>}</label>
          </Col>
          <Col className='d-flex align-items-center justify-content-center mb-3'>
          <MdOutlineLabel style={{ color: "#E94560", marginRight: '0.5rem'}}/>
            <label>{language === 'es' ? <>Testeo</>: <>Testing</>}</label>
          </Col>
          <Col className='d-flex align-items-center justify-content-center mb-3'>
          <MdOutlineLabel style={{ color: "#E94560", marginRight: '0.5rem'}}/>
            <label>{language === 'es' ? <>Producción</>: <>Deploy</>}</label>
          </Col>
          <Col className='d-flex align-items-center justify-content-center mb-3'>
          <MdOutlineLabel style={{ color: "#E94560", marginRight: '0.5rem'}}/>
            <label>{language === 'es' ? <>Soporte</>: <>Support</>}</label>
          </Col>
        </Row>
      </Container>
    
  );
};

export default About;
