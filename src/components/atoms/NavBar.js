import React from "react";
import { Nav, Navbar } from "react-bootstrap";
// import { BiUserCircle } from 'react-icons/bi';
// import { AiOutlineLogout } from 'react-icons/ai';
// import PropTypes from "prop-types";

import { ProfileContext } from "../../context";

function NavBar() {
  const UserConsumer = React.useContext(ProfileContext)

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create/recipe">Add Recipe</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Log in
            {/* {UserConsumer?.name} */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default NavBar;