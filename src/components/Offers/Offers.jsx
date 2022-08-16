import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Button } from '@mui/material';
import Dev from "../../assets/devImg.png";
import { BsChevronDoubleRight } from "react-icons/bs";

import './Offers.css'

const Offers = () => {
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
          <h1 className='title-offers'>THE WEB STUDIO OFFERS</h1>
         
          <p>
          <BsChevronDoubleRight style={{color: '#E94560'}}/> &nbsp;
            Our main offer is a perfect service and team of professionals who
            works in tech industry more than ten years. We strive to be the best
            in our niche and provide our clients with high end products.
          </p>
        
          <p>
          <BsChevronDoubleRight style={{color: '#E94560'}}/> &nbsp;
            Development of your products as an end-to-end solution, outsurce /
            outstaff / in-house cooperation.
          </p>
          <p>
          <BsChevronDoubleRight style={{color: '#E94560'}}/> &nbsp;
            Efficient design that sells and full custom development cycle.
          </p>
          <p>
          <BsChevronDoubleRight style={{color: '#E94560'}}/> &nbsp;
            Modern approach to QA.
          </p>
          <p>
          <BsChevronDoubleRight style={{color: '#E94560'}}/> &nbsp;
            Product release, integration, and support.
          </p>
          <Button variant='outlined' color='info'>DISCUSS PROJECT</Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Offers;
