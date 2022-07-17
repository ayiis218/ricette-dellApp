import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import FormProfile from '../../components/organisms/FormProfile'

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <FormProfile />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;