import React from "react";
import { Container, Row } from "react-bootstrap";
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

import AuthStyles from '../../assets/style/AuthStyles';

import NavBar from '../atoms/NavBar'
import Profile from '../molecules/Profile'
/* import Slider from '../molecules/Slider'
import Popular from '../molecules/Popular'
import Latest from "../molecules/Latest"
import ListPopular from '../molecules/ListPopular' */
import Footer from '../Footer'
// import Pagination from "../atoms/Pagination";


function FormProfile() {
  return (
    <>
        <AuthStyles />
          <Container>
            <Row>
                <NavBar />
                <Profile />
                <Footer />
            </Row>
          </Container>
    </>
  );
}

export default FormProfile;