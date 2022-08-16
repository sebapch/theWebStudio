import React, { useState, useRef } from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  var templateParams = {
    name: name,
    phone: phone,
    email: email,
    message: message,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        "p8n1Q-4cCah7VERpp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  console.log("nombre " + name);
  console.log("email " + email);
  console.log("phone " + phone);
  console.log("message " + message);

  return (
    <Container style={{ marginBottom: "2rem" }}>
      <div className="contact-box">
        <div className="contact-content-box">
            <form ref={form} onSubmit={sendEmail}>
          <Row>
            <Col className="d-flex flex-column align-items-center">
              <h1 className="contact-title">DISCUSS A PROJECT</h1>
              <label classname="contact-label">
                Request a development cost assessoment for your IT product
              </label>
            </Col>
          </Row>
          <Row
            style={{ marginTop: "3rem", marginBottom: "3rem" }}
            className="d-flex flex-row align-items-center"
          >
            <Col>
              <input
                type="text"
                name="name"
                className="contact-inputForm"
                placeholder="name"
              />
              <input
                type="text"
                name="email"
                className="contact-inputForm"
                placeholder="Email"
              />
              <input
                type="text"
                name="phone"
                className="contact-inputForm"
                placeholder="Phone"
              />
            </Col>
            <Col>
              <textarea name="message" className="contact-inputForm" placeholder="Message"/>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <input
                className="button-contact"
                type="submit"
                value="Send Message"
              />
            </Col>
          </Row>
          </form>
        </div>
      </div>

    </Container>
  );
};

export default Contact;
