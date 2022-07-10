import React from "react";
import { Container, Row } from "react-bootstrap";
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

import AuthStyles from '../../assets/style/AuthStyles';

// import Latest from '../molecules/Latest'
// import Popular from '../molecules/Populer'
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
                <NavBar />
                <Slider />
                {/* <Popular />
                <Latest /> */}
                <Footer />
            </Row>
          </Container>
    </>
  );
}

export default FormLanding;