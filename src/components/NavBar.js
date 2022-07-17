import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"
// import { BiUserCircle } from 'react-icons/bi';
// import { AiOutlineLogout } from 'react-icons/ai';
// import PropTypes from "prop-types";

import { ProfileContext } from "../context";

function NavBar() {
  const UserConsumer = React.useContext(ProfileContext)

  return (
    <>
      <Navbar className="fixed-top" expand="lg" bg="light" variant="light">
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" navbar>
            <Nav.Item />
            <Nav.Item>
              <Link to="/" style={{ textDecorationColor: 'black' }} > Home </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/create/recipe" > Add Recipe </Link>
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
        </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default NavBar;