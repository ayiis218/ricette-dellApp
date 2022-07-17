import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
// import { Section, Title, Description, Item, Copyright, List } from '../assets/style/FooterStyles'

const Section = styled.footer`
  height: auto;
  background-color: var(--secondary-color);
  color: var(--color-3);
  padding-top: 50px;
  font-family: 'Airbnb Cereal App';
  margin-top: 40px;
  position: relative;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 70px;
  font-weight: 600;

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  font-size: 22px;
  color: #707070;
  text-transform: capitalize;

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

const List = styled.div`
  margin-top: 150px;
  padding-left: 6vw;
`;

const Item = styled.a`
  display: inline-block;
  color: #707070;
  margin-right: 15px;
  font-size: 16px;
  margin-bottom: 20px;
  text-decoration: none;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const Copyright = styled.div`
  font-size: 14px;
  color: var(--color-5);
  float: right;

  @media screen and (max-width: 500px) {
    text-align: center;
    float: none;
  }
`;

function Footer() {
  return (
    <Section>
      <Container>
        <div className="mx-auto">
          <Title>Eat, Cook, Repeat</Title>
          <Description>Share your best Recipe by uploading here !</Description>
        </div>
        <List className="mx-auto">
          <Item>product</Item>
          <Item>Company</Item>
          <Item>Learn More</Item>
          <Item>Get In Touch</Item>
          <Copyright>
            <span>&copy; pijarcamp</span>
          </Copyright>
        </List>
      </Container>
    </Section>
  );
}

export default Footer;