import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container style={{paddingTop: '2rem'}}>
    <Row>
        <Col md={3}>
            Logo
        </Col>
        <Col md={6} className='d-flex justify-content-between'>
            <a href="https://github.com/">About Us</a>
            <a href="https://github.com/">Team</a>
            <a href="https://github.com/">Services</a>
            <a href="https://github.com/">Benefits</a>
            <a href="https://github.com/">Cases</a>
        </Col>
        <Col md={3} className='d-flex justify-content-end'>
            <Button variant="primary">Discuss Project</Button>
        </Col>
    </Row>
</Container>
  )
}

export default Footer