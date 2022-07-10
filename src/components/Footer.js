import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FooterS, Title, Description, Item, Copyright, List } from '../assets/style/FooterStyles'

function Footer() {
  return (
    <FooterS>
      <Container>
        <div className="mx-auto">
          <Title>Eat, Cook, Repeat</Title>
          <Description>Share your best Recipe by uploading here !</Description>
        </div>
        <List className="mx-auto">
          <Item>
            <Link to= '/product' /> product
          </Item>
          <Item>Company</Item>
          <Item>Learn More</Item>
          <Item>Get In Touch</Item>
          <Copyright>
            <span>&copy; pijarcamp</span>
          </Copyright>
        </List>
      </Container>
    </FooterS>
  );
}

export default Footer;