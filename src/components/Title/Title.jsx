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



  return (
    <div className="title-container">
    <Container className="d-flex flex-column align-items-center justify-content-evenly"  >
      <Row style={{marginBottom: '4rem', marginTop: '3rem'}}>
        <Col>
        <h1 className="title">THE WEB STUDIO</h1>
        </Col>
      </Row>
      <Row>
        <Col style={{marginBottom: '4rem'}}>
          <h4 style={{textAlign: 'center'}}>{language === 'es' ? <>Construye el proceto de tus sueños. <br/>En semanas, no meses. </>:<>Build your dream project.<br/> In weeks, not months.</>}</h4>
        </Col>
      </Row>
      <Row style={{marginBottom: '4rem'}}>
        <Col>
          <Button variant='outlined' color='info'>{language === 'es' ?<>Contactanos</>: <>DISCUSS PROJECT</>}</Button>
        </Col>
      </Row>
      <Row style={{marginBottom: '4rem'}}>
        <Col>
          <img src={ReactLogo} alt='React' width='100px' className='logos'/>
        </Col>
        <Col>
        <img src={NodeLogo} alt='Node' width='100px' className='logos'/>
        </Col>
        <Col>
        <img src={JavascriptLogo} alt='Javascript' width='100px' className='logos'/>
        </Col>
        <Col style={{textAlign: 'center'}}>
        <img src={SolidityLogo} alt='Solidity' width='100px' className='lastLogo'/>
        </Col>
        <Col style={{textAlign: 'center'}}>
        <img src={HTML5Logo} alt='Html5' width='100px' className='logos'/>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Title;
