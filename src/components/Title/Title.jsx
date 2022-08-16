import React, {useContext} from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Button } from '@mui/material';
import NodeLogo from '../../assets/nodejs.png'
import ReactLogo from '../../assets/react2.png'
import JavascriptLogo from '../../assets/javascript.png'
import SolidityLogo from '../../assets/solidity.png'
import HTML5Logo from '../../assets/html5.png'
import './Title.css'
import {LangContext} from '../../context/langContext'




const Title = () => {
  const { language } = useContext(LangContext);

  console.log(language)

  return (
    <div className="title-container">
    <Container className="d-flex flex-column align-items-center justify-content-evenly" style={{height: '60vh'}} >
      <Row>
        <Col>
        <h1 className="title">THE WEB STUDIO</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Build your dream project. In weeks, not months.</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant='outlined' color='info'>DISCUSS PROJECT</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={ReactLogo} alt='React' width='100px' className='logos'/>
        </Col>
        <Col>
        <img src={NodeLogo} alt='Node' width='100px' className='logos'/>
        </Col>
        <Col>
        <img src={JavascriptLogo} alt='Javascript' width='100px' className='logos'/>
        </Col>
        <Col>
        <img src={SolidityLogo} alt='Solidity' width='100px' className='logos'/>
        </Col>
        <Col>
        <img src={HTML5Logo} alt='Html5' width='100px' className='logos'/>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Title;
