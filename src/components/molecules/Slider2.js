import React from "react";
import { Card, Container, Row, Col, Nav, Navbar, Form } from "react-bootstrap";
import {  } from "react-bootstrap";
// import { Link } from 'react-router-dom';

import AuthStyles from '../../assets/style/AuthStyles';

import NavBar from '../molecules/NavBar'
import Search from '../atoms/Search'

function Slider() {
  return (
    <>
      <div className="App">
      <Card>
        <Card.Body className="pb-5">
          <Container>
            <Row>
              <Col lg={12}>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#addrecipe">Add Recipe</Nav.Link>
                    <Nav.Link href="#profile">Profile</Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link eventKey={2} href="#login">
                      Log in
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              </Col>

              <Col lg={12}>
              <Card className="text-center">
                <Card.Body >
                  <Card.Title>Discover Recipe
                    & Delicious Food</Card.Title>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="search restaurant, food"
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
                </Card.Body>
              </Card>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      </div>
    </>
  );
}

export default Slider;