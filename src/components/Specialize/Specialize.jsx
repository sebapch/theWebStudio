import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Box } from "@mui/material";
import { FaBitcoin } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";

import "./Specialize.css";

const Specialize = () => {
  return (
    <div style={{ backgroundColor: "#091127", paddingTop: '2rem', paddingBottom: '2rem' }}> 
      <Container
        className="d-flex flex-column align-items-center justify-content-evenly"
        
      >
        <Row>
          <Col >
            <h1 style={{ marginBottom: '4rem'}} className='title-special'> THE WEB STUDIO SPECIALIZES IN</h1>
          </Col>
        </Row>
        <Row>
          <Col className='col-cards'>
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: "primary.dark",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <div className="circle">
                <div className="circle-container">
                  <FaBitcoin className="circle-logo" />
                </div>
              </div>
              <h1 style={{textAlign: 'center', color: '#7682A4', fontSize: '1.5rem'}}>Enterprise Solutions</h1>
              <h4 style={{textAlign: 'center', color: '#E94560', fontSize: '0.8rem'}}>CRM, ERP, E-Commerce</h4>
              <p style={{textAlign: 'center', color: 'white', fontSize: '0.8rem', margin:'0px 2rem'}}>
                We have solid experience with complex enterprise solutions
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
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <div className="circle">
                <div className="circle-container">
                  <BsLaptop className="circle-logo" />
                </div>
              </div>
              <h1 style={{textAlign: 'center', color: '#7682A4',  fontSize: '1.5rem'}}>Websites</h1>
              <h4  style={{textAlign: 'center', color: '#E94560', fontSize: '0.8rem'}}>Corporate, Commercial, Info sites</h4>
              <p style={{textAlign: 'center', color: 'white', fontSize: '0.8rem', margin:'0px 2rem'}}>
                We build websites of any complexity. From simple landing pages
                to high-quality profitable E-commerce projects.
              </p>
            </Box>
          </Col>
          <Col className='col-cards'>
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: "primary.dark",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <div className="circle">
                <div className="circle-container">
                  <FaMobileAlt className="circle-logo" />
                </div>
              </div>
              <h1 style={{textAlign: 'center', color: '#7682A4', fontSize: '1.5rem'}}>Community Management</h1>
              <h4  style={{textAlign: 'center', color: '#E94560', fontSize: '0.9rem'}}>E-Commerce, Social Media, Marketing</h4>
              <p style={{textAlign: 'center', color: 'white', fontSize: '0.8rem', margin:'0px 2rem'}}>
                We perfectly work with all the social medias and platforms. Our
                team can support you to your enterprise growth.
              </p>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Specialize;
