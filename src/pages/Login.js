import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import FormLogin from "../components/organisms/FormLogin";

function App() {
  return (
    <div className="App">
      <Card>
        <Card.Body className="pb-1">
          <Container className="mt-1">
            <Row>
              <Col lg={12}>
                <FormLogin />
              </Col>
              
              <Col lg={4} className="border-left">
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;