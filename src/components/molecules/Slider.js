import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import image from '../../assets/img/riccete.png';

import Search from '../atoms/Search';

const Section = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 100px 0;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow-black-100);
  border-radius: 15px;
  animation: bounceTop_01 3s ease infinite;
  @media screen and (max-width: 1110px) {
    width: 350px;
    height: 350px;
  }
  @media screen and (max-width: 991px) {
    margin-left: 55px;
  }
  @media screen and (max-width: 845px) {
    margin: 0 20px;
  }
  @media screen and (max-width: 772px) {
    margin-top: 70px;
    width: 300px;
    height: 300px;
  }
`;

function Slider() {

  return (
    <Section>
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="7">
            <Search />
          </Col>
          <Col lg="6" md="5" className="text-center">
            <Image src={image} alt="Mama Recipe" />
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default Slider;