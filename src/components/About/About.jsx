import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { MdOutlineLabel } from 'react-icons/md';

const About = () => {
  return (
    
      <Container
        className="d-flex flex-column align-items-center justify-content-evenly mb-5"
      >
        <Row>
          <Col>
            <h1>WHAT IS THE WEB STUDIO</h1>
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col className="d-flex flex-column align-items-center ">
            <p style={{ color: "#777C9A", width: "60%", textAlign: "center" }}>
              The Web Studio is a team of top-notch IT and Communication
              professionals with rich product experience from Buenos Aires. A
              Country famous for high-quality and affordable software solutions.
              Since 2021 we are bringing to you the solution you need with the
              latest software available.
            </p>
          </Col>
        </Row>
        <Row style={{ textAlign: "center", width: "75%" }}>
          <Col className='d-flex align-items-center justify-content-center'>
            <MdOutlineLabel style={{ color: "#E94560"}}/>
            <label>Planning</label>
          </Col>
          <Col className='d-flex align-items-center justify-content-center'>
            <MdOutlineLabel style={{ color: "#E94560"}}/>
            <label>Developing</label>
          </Col>
          <Col className='d-flex align-items-center justify-content-center'>
          <MdOutlineLabel style={{ color: "#E94560"}}/>
            <label>Testing</label>
          </Col>
          <Col className='d-flex align-items-center justify-content-center'>
          <MdOutlineLabel style={{ color: "#E94560"}}/>
            <label>Deploy</label>
          </Col>
          <Col className='d-flex align-items-center justify-content-center'>
          <MdOutlineLabel style={{ color: "#E94560"}}/>
            <label>Support</label>
          </Col>
        </Row>
      </Container>
    
  );
};

export default About;
