import React from "react";
import { Container, Row } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

// import Latest from '../molecules/Latest'
// import Popular from '../molecules/Populer'
import NavBar from '../atoms/NavBar'
import Slider from '../molecules/Slider'
import Popular from '../molecules/Popular'
import Latest from "../molecules/Latest"
import ListPopular from '../molecules/ListPopular'
import Footer from '../Footer'
// import Pagination from "../atoms/Pagination";

const RightBar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  height: 740px;
  width: 350px;
  background-color: var(--secondary-color);
  z-index: -1;

  @media screen and (max-width: 991px) {
    width: 250px;
  }

  @media screen and (max-width: 767px) {
    width: 150px;
  }

  @media screen and (max-width: 450px) {
    width: 50px;
  }
`;

function FormLanding() {
  return (
    <>
      <NavBar />
      <RightBar />
      <Slider />
      <Popular />
      <Latest  />
      <ListPopular />
      <Footer />
    </>
  );
}

export default FormLanding;