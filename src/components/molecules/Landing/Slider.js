import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../../style/TitleStyles';
import image from '../../../assets/img/riccete.png';
import Search from '../../atoms/Search';
import { Section, Image } from './style/sliderStyle';

function Slider() {
   return (
      <Section>
         <Container>
            <Row className="align-items-center">
               <Col lg="6" md="7">
                  <Title />
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
