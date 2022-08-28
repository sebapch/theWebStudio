import React, {useContext} from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Button } from '@mui/material';
import Dev from "../../assets/devImg.png";
import { BsChevronDoubleRight } from "react-icons/bs";
import {LangContext} from '../../context/langContext'

import './Offers.css'

const Offers = () => {
  const { language } = useContext(LangContext);

  return (
    <div style={{marginTop: '3rem', marginBottom: '3rem'}}>
    <Container style={{padding: '1rem'}}>
      <Row>
        <Col className='d-flex align-items-center justify-content-center' xs={18} md={6}>
          <div className='image-container'>
          <img src={Dev} alt="" className='offers-image' />
          </div>
        </Col >
        <Col md={6} className='d-flex flex-column align-content-start justify-content-evenly'>
          <h1 className='title-offers'>{language === 'es' ? <>THE WEB STUDIO OFRECE</> : <>THE WEB STUDIO OFFERS</>}</h1>
         
          <p>
          <BsChevronDoubleRight style={{color: '#E94560'}}/> &nbsp;
            {language === 'es' ? <>Nuestra oferta principal es un servicio perfecto y un equipo de profesionales que 
            trabaja en la industria del conocimiento hace mas de 5 años. Apuntamos a ser los mejores en lo nuestro y proveer a los clientes con productos de alta calidad
            </> : 
            <>Our main offer is a perfect service and team of professionals who
            works in tech industry more than ten years. We strive to be the best
            in our niche and provide our clients with high end products.</>}
          </p>
        
          <p>
          <BsChevronDoubleRight style={{color: '#E94560'}}/> &nbsp;
          {language === 'es' ? <>Desarrollamos tus productos como una solución final. Nuestro equipo cubre todas las áreas del desarrollo.</> 
          : <>Development of your products as an end-to-end solution. Our team covers all the development areas</>}
          </p>
          <p>
          <BsChevronDoubleRight style={{color: '#E94560'}}/> &nbsp;
          {language === 'es' ? <>Diseño eficiente y ciclo de desarrollo adaptable</> : <>Efficient design that sells and full custom development cycle.</>}
          </p>
          <p>
          <BsChevronDoubleRight style={{color: '#E94560'}}/> &nbsp;
          {language === 'es' ? <>Tecnicas modernas para asegurar la Calidad</> : <>Modern approach to Quality Assurance</>}
          </p>
          <p>
          <BsChevronDoubleRight style={{color: '#E94560'}}/> &nbsp;
          {language === 'es' ? <>Lanzamiento del producto, integración y soporte</> : <>Product release, integration, and support</>}
          </p>
          <Button variant='outlined' color='info'>{language === 'es' ? <>CUENTANOS TU PROYECTO</> : <>DISCUSS PROJECT</>}</Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Offers;
