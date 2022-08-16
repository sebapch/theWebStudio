import React from 'react'
import { Container, Col, Row, Button, } from 'react-bootstrap'
import MinterFactory from '../../assets/minterFactory.png';
import DappsFactory  from '../../assets/dappsfactory.png';
import './Products.css'

const Products = () => {
  return (
    <div style={{marginTop: '4rem', marginBottom:'6rem'}}>
    <Container>
        <Row>
            <Col>
                <h1 className='title-products'>Our Products</h1>
            </Col>
        </Row>
        <Row >
            <Col>
                <img src={MinterFactory} alt='' width="100%"/>
            
                <h1 className='dev-title'>WEB DEVELOPMENT</h1>
                <p className='dev-text'>We came up with a system of collecting content by collections, channels. 
                    The result was a site similar to a social network wotj a small set of features for eachstructurin content indodiffreten
                    categories, the ability to customize similar content. According to the idea itself, a small article was published.
                </p>
                <label className='dev-link'>www.minterfactory.io</label>
            </Col>
            <Col>
                <img src={DappsFactory} alt='' width="100%"/>
                <h1 className='dev-title'>BLOCKCHAIN</h1>
                <p className='dev-text'>TWS developed CRM on a turnkey basis for the largest Ukranian retail chain. Due to the specifics
                    of operational processes and a large number os users, unique modules for the 
                    interaction of contact centers, customers, accounting, warehouses and logistics centers were created.
                </p>
                <label className='dev-link'>www.perceptionface.com</label>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Products