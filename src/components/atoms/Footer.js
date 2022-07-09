import React from 'react';
import { Container } from 'react-bootstrap';
import { FooterS, Title, Description, Item, Copyright, List } from '../../assets/style/FooterStyles'

function Footer() {
  return (
    <FooterS>
      <Container>
        <div className="mx-auto">
          <Title>Eat, Cook, Repeat</Title>
          <Description>Share your best Recipe by uploading here !</Description>
        </div>
        <List className="mx-auto">
          <Item>Product</Item>
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


/* import React from 'react';
// import styled from 'styled-components';
// import { Container } from "react-bootstrap";
import style from '../atoms/style'

const Footer = () => {
  return (
    <>
      <footer style={style.Footer}>
        <div style={style.FooterTitle}>
            <h1 style={style.FooterTitleH1}>Eat, Cook, Repeat</h1>
        </div>
        <div style={style.FooterDesc}>
            <h3 style={style.FooterDescH3}>Share your best recipe by uploading here !</h3>
        </div>
        <div style={style.FooterLink}>
            <small style={style.FooterLinkSmall}>Product</small>
            <small style={style.FooterLinkSmall}>Company</small>
            <small style={style.FooterLinkSmall}>Learn More</small>
            <small style={style.FooterLinkSmall}>Get In Touch</small>
        </div>
      </footer>
    </>
  )
}

export default Footer; */