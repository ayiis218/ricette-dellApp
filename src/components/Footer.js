import React from 'react';
import { Container } from 'react-bootstrap';
import {
   Section,
   Title,
   Description,
   Item,
   Copyright,
   List,
} from './style/FooterStyles';

function Footer() {
   return (
      <Section>
         <Container>
            <div className="mx-auto">
               <Title>Eat, Cook, Repeat</Title>
               <Description>
                  Share your best Recipe by uploading here !
               </Description>
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
