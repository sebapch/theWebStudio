import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container style={{paddingTop: '2rem'}}>
    <Row>
        <Col>
            <h2>TWS</h2>
        </Col>
        <Col >
            <label>2022 B1che</label>
        </Col>
    </Row>
</Container>
  )
}

export default Footer