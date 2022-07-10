import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

import AuthStyles from '../../assets/style/AuthStyles';

import NavBar from '../atoms/NavBar'
import Slider from '../molecules/Slider'
import Footer from '../Footer'
// import Pagination from "../atoms/Pagination";


function FormLanding() {
  return (
    <>
        <AuthStyles />
          <Container>
            <Row>
              <Col lg="12" className="">
                <NavBar />
              </Col>
              
              <Col lg="12" className="">
                <div>
                  {/* <RightBar /> */}
                  <Slider />
                </div>
                
              </Col>

              <Col lg={12}>
                {/* <Pagination /> */}
                {/* <Latest /> */}
              </Col> 

              <Col lg={12}>
                {/* <Pagination /> */}
                <Footer />
              </Col> 
            </Row>
          </Container>
    </>
  );
}

export default FormLanding;