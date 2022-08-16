import React, { useState } from "react";
import { Container, Col, Row, Stack } from "react-bootstrap";
import "./Questions.css";
import { AiOutlineDown } from "react-icons/ai";
import Fade from "react-reveal/Fade";

const Questions = () => {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  const [question6, setQuestion6] = useState(false);


  return (
    <>
     
        <Container style={{marginBottom: '4rem'}}>
          <h1 style={{ height: "4rem", textAlign: "center" }}>FREQUENTLY ASKED QUESTIONS</h1>

          <div className="div-container">
            <Row>
              <Col>
                <div className="faq-container">
                  <div className="faq-question">
                    <label>
                      Can we hire BroCode with a design concept already
                      developed or business analysis conducted?A Are you ready
                      to take on a project at any stage of development ?{" "}
                    </label>
                    <AiOutlineDown
                      onClick={() => setQuestion1(!question1)}
                      className="dropdown-icon"
                    />
                  </div>

                  {question1 === true ? (
                    
                      <div>
                        <Fade top>
                        <p
                          className={
                            question1
                              ? "answer-faq-enabled"
                              : "answer-faq-disabled"
                          }
                        >
                          Yes of course, we develop everything you want as fast
                          as you need with our team of full stack developers
                          based all around the world ready to respond to your
                          queries.
                        </p>{" "}
                        </Fade>
                      </div>
                   
                  ) : null}
                </div>
              </Col>
              <Col>
                <div className="faq-container">
                  <div className="faq-question">
                    <label>
                      Can we hire BroCode with a design concept already
                      developed or business analysis conducted?A Are you ready
                      to take on a project at any stage of development ?{" "}
                    </label>
                    <AiOutlineDown
                      onClick={() => setQuestion2(!question2)}
                      className="dropdown-icon"
                    />
                  </div>

                  {question2 === true ? (
                    <Fade top>
                      <div>
                        <p
                          className={
                            question2
                              ? "answer-faq-enabled"
                              : "answer-faq-disabled"
                          }
                        >
                          Yes of course, we develop everything you want as fast
                          as you need with our team of full stack developers
                          based all around the world ready to respond to your
                          queries.
                        </p>
                      </div>
                    </Fade>
                  ) : null}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="faq-container">
                  <div className="faq-question">
                    <label>
                      Can we hire BroCode with a design concept already
                      developed or business analysis conducted?A Are you ready
                      to take on a project at any stage of development ?{" "}
                    </label>
                    <AiOutlineDown
                      onClick={() => setQuestion3(!question3)}
                      className="dropdown-icon"
                    />
                  </div>

                  {question3 === true ? (
                    <Fade top>
                      <div>
                        <p
                          className={
                            question3
                              ? "answer-faq-enabled"
                              : "answer-faq-disabled"
                          }
                        >
                          Yes of course, we develop everything you want as fast
                          as you need with our team of full stack developers
                          based all around the world ready to respond to your
                          queries.
                        </p>{" "}
                      </div>
                    </Fade>
                  ) : null}
                </div>
              </Col>
              <Col>
                <div className="faq-container">
                  <div className="faq-question">
                    <label>
                      Can we hire BroCode with a design concept already
                      developed or business analysis conducted?A Are you ready
                      to take on a project at any stage of development ?{" "}
                    </label>
                    <AiOutlineDown
                      onClick={() => setQuestion4(!question4)}
                      className="dropdown-icon"
                    />
                  </div>

                  {question4 === true ? (
                    <Fade top>
                      <div>
                        <p
                          className={
                            question4
                              ? "answer-faq-enabled"
                              : "answer-faq-disabled"
                          }
                        >
                          Yes of course, we develop everything you want as fast
                          as you need with our team of full stack developers
                          based all around the world ready to respond to your
                          queries.
                        </p>{" "}
                      </div>
                    </Fade>
                  ) : null}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="faq-container">
                  <div className="faq-question">
                    <label>
                      Can we hire BroCode with a design concept already
                      developed or business analysis conducted?A Are you ready
                      to take on a project at any stage of development ?{" "}
                    </label>
                    <AiOutlineDown
                      onClick={() => setQuestion5(!question5)}
                      className="dropdown-icon"
                    />
                  </div>

                  {question5 === true ? (
                    <Fade top>
                      <div>
                        <p
                          className={
                            question5
                              ? "answer-faq-enabled"
                              : "answer-faq-disabled"
                          }
                        >
                          Yes of course, we develop everything you want as fast
                          as you need with our team of full stack developers
                          based all around the world ready to respond to your
                          queries.
                        </p>{" "}
                      </div>
                    </Fade>
                  ) : null}
                </div>
              </Col>
              <Col>
                <div className="faq-container">
                  <div className="faq-question">
                    <label>
                      Can we hire BroCode with a design concept already
                      developed or business analysis conducted?A Are you ready
                      to take on a project at any stage of development ?{" "}
                    </label>
                    <AiOutlineDown
                      onClick={() => setQuestion6(!question6)}
                      className="dropdown-icon"
                    />
                  </div>

                  {question6 === true ? (
                    <Fade top>
                      <div>
                        <p
                          className={
                            question6
                              ? "answer-faq-enabled"
                              : "answer-faq-disabled"
                          }
                        >
                          Yes of course, we develop everything you want as fast
                          as you need with our team of full stack developers
                          based all around the world ready to respond to your
                          queries.
                        </p>{" "}
                      </div>
                    </Fade>
                  ) : null}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      
    </>
  );
};

export default Questions;
