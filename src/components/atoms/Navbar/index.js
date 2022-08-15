import React, { useState } from 'react';
import { Navbar, Image } from 'react-bootstrap';
import { Container, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import Main from './Main';
import Auth from './Auth';
import '../../../utils/navbar';

function Navigation() {
   // Collapse isOpen State
   const isLogin = Boolean(localStorage.getItem('token'));
   const [isOpen, setIsOpen] = useState(false);

   console.log(isLogin);

   return (
      <>
         <Navbar expand="lg" className="fixed-top">
            <Container>
               <NavbarBrand href="/" className="d-md-none">
                  <Image src="" alt="" width="" height="" />
               </NavbarBrand>
               <NavbarToggler
                  onClick={() => {
                     setIsOpen(!isOpen);
                  }}
               >
                  <i className="fas fa-bars" />
               </NavbarToggler>
               <Collapse isOpen={isOpen} navbar>
                  <Main isLogin={isLogin} />
                  <Auth isLogin={isLogin} />
               </Collapse>
            </Container>
         </Navbar>
      </>
   );
}

export default Navigation;
