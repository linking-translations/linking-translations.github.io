import React from 'react'
import logo from '../Assets/linking-logo.png'
import './style.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { ArrowRightCircleFill } from 'react-bootstrap-icons'

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className='main-block-logo-wrapper' xl={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }} xs={12}>
            <Image src={logo} alt="Logo" className='main-block-logo' fluid={true}/>
          </Col>
        </Row>
        <Row>
          <Col className='main-block-text' lg={{ span: 8, offset: 2 }} xs={12}>
            <h2>
              We specialise in <span><b>technical translations</b></span> and <span><b>interpreting</b></span> for the
              <span><b> pharmaceutical</b></span> and <span><b>life sciences industries</b></span>.
              <br/>
              <br/>
              Do you want to know more?
              <br/>
              visit our site <a href="https://linkingtranslations.com/" rel="noreferrer" target="_blank"><ArrowRightCircleFill/></a>
            </h2>
          </Col>
        </Row>
        {/*<Row>*/}
        {/*  <Col className='example-column-2' md={6} xs={12}>foo</Col>*/}
        {/*  <Col className='example-column-3' md={6} xs={12}>bar</Col>*/}
        {/*</Row>*/}
      </Container>
    </div>
  )
}

export default App
