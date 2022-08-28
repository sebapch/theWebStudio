import React, {useContext} from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Box } from "@mui/material";
import { FaBitcoin } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import {LangContext} from '../../context/langContext'

import "./Specialize.css";

const Specialize = () => {

  const { language } = useContext(LangContext);


  return (
    <div style={{ backgroundColor: "#091127", paddingTop: '4rem', paddingBottom: '2rem' }}> 
      <Container
        className="d-flex flex-column align-items-center justify-content-evenly"
        
      >
        <Row>
          <Col >
            <h1 style={{ marginBottom: '6rem', fontSize: '2.5rem'}} className='title-special'>{language === 'es' ? <>NOS ESPECIALIZAMOS EN</> : <>THE WEB STUDIO SPECIALIZES IN</>} </h1>
          </Col>
        </Row>
        <Row>
          <Col className='col-cards'>
            <Box 
              sx={{
                width: 300,
                height: 300,
                backgroundColor: "primary.dark",
                
              }}
            >
              <div className="circle-green">
                <div className="circle-container">
                  <FaBitcoin className="circle-logo-green" />
                </div>
              </div>
              <h1 style={{textAlign: 'center', color: '#7682A4', fontSize: '1.5rem'}}>{language === 'es' ? <>Soluciones para Empresas</> : <>Enterprise Solutions</>}</h1>
              <h4 style={{textAlign: 'center', color: '#E94560', fontSize: '0.8rem'}}>{language === 'es' ? <>CRM, ERP, E-Commerce</> : <>CRM, ERP, E-Commerce</>}</h4>
              <p style={{textAlign: 'center', color: 'white', fontSize: '0.8rem', margin:'0px 2rem'}}>
              {language === 'es' ? <>Tenemos una experiencia solida con soluciones complejas para empresas, incluidos productos de alto nivel en arquitectura y microservicios</> : <>We have solid experience with complex enterprise solutions</>}
                including high-level product architecture and microservices.
              </p>
            </Box>
          </Col>
          <Col className='col-cards'>
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: "primary.dark",
                
              }}
            >
              <div className="circle-blue">
                <div className="circle-container">
                  <BsLaptop className="circle-logo-blue" />
                </div>
              </div>
              <h1 style={{textAlign: 'center', color: '#7682A4',  fontSize: '1.5rem'}}>{language === 'es' ? <>Sitios Web</> : <>Websites</>}</h1>
              <h4  style={{textAlign: 'center', color: '#E94560', fontSize: '0.8rem'}}>{language === 'es' ? <>Corporativos, Comerciales, Sitios de Información</> : <>Corporate, Commercial, Info sites</>}</h4>
              <p style={{textAlign: 'center', color: 'white', fontSize: '0.8rem', margin:'0px 2rem'}}>
              {language === 'es' ? <>Construimos sitios de cualquier complejidad. Desde páginas de bienvenida sencillas hasta E-Commerces de alta calidad</> : <>We build websites of any complexity. From simple landing pages
                to high-quality profitable E-commerce projects.</>}
              </p>
            </Box>
          </Col>
          <Col className='col-cards'>
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: "primary.dark",
                
              }}
            >
              <div className="circle-orange">
                <div className="circle-container">
                  <FaMobileAlt className="circle-logo-orange" />
                </div>
              </div>
              <h1 style={{textAlign: 'center', color: '#7682A4', fontSize: '1.5rem'}}>{language === 'es' ? <>Community Management</> : <>Community Management</>}</h1>
              <h4  style={{textAlign: 'center', color: '#E94560', fontSize: '0.9rem'}}>{language === 'es' ? <>E-Commerce, Redes sociales, Marketing</> : <>E-Commerce, Social Media, Marketing</>}</h4>
              <p style={{textAlign: 'center', color: 'white', fontSize: '0.8rem', margin:'0px 2rem'}}>
              {language === 'es' ? <>Trabajamos con todas las plataformas y redes sociales. Nuestro equipo puede ayudarte a que tu empresa crezca</> : <>We perfectly work with all the social medias and platforms. Our
                team can support you to your enterprise growth.</>}
              </p>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Specialize;
