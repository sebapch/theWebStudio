import React from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import "./Contact.css";


const Contact = () => {
  return (
    <Container style={{marginBottom: '2rem'}}>
      <div className="contact-box">
        <div className="contact-content-box">
          <Row >
            <Col className='d-flex flex-column align-items-center' >
              <h1 className="contact-title">DISCUSS A PROJECT</h1>
              <label classname="contact-label">
                Request a development cost assessoment for your IT product
              </label>
            </Col>
          </Row>
          <Row style={{marginTop: '3rem', marginBottom: '3rem'}} className='d-flex flex-row align-items-center'>
            <Col >
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Name" className='contact-inputForm'/>
     
      <Form.Control type="text" placeholder="Phone" className='contact-inputForm'/>
      <Form.Control type="text" placeholder="Email" className='contact-inputForm last'/>
      </Form.Group>
      </Form>

            </Col>
            <Col>
            <Form.Control as="textarea" className='contact-textArea' rows={5} placeholder="Send us your request"/>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              <button className="button-contact">Send Message</button>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
