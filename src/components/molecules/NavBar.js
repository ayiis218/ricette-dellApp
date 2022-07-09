import React from "react";
import { Nav, Navbar } from "react-bootstrap";
// import PropTypes from "prop-types";

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/create/recipe">Add Recipe</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/login">
              Log in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default NavBar;