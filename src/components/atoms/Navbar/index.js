import React, { useState } from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { Container, NavbarBrand, Collapse } from 'reactstrap';
import { Link } from "react-router-dom"
/* import Main from './Main';
import Auth from './Auth';
import '../../../utils/navbar'; */

function Navigation() {
  // Collapse isOpen State
/*   const isLogin = Boolean(localStorage.getItem('token'));
  const [isOpen, setIsOpen] = useState(false);

  console.log(isLogin); */

  return (
    <>
    <Navbar expand="lg" className="fixed-top">
      <Container>
        <NavbarBrand href="/" className="d-md-none">
          <img src="" alt="" width="" height="" />
          <span> Ricette</span>
        </NavbarBrand>
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <Nav.Item>
                <Link to="/" style={{ textDecorationColor: 'black' }} > Home </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/createRecipe" > Add Recipe </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/profile" > Profile </Link>
              </Nav.Item>
            </Nav>

            <Nav>
              <Nav.Item >
                <Link to="/login"> Log in </Link>
              {/* {UserConsumer?.name} */}
              </Nav.Item>
            </Nav>
          </Collapse>
      </Container>
        
      </Navbar>
    </>
    
  );
}

export default Navigation;
