import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import FormLogin from '../../components/organisms/FormAuth/FormLogin';

function App() {
  return (
    <div className="App">
      <Card>
        <Card.Body className="mt-0 mb-0">
          <Container>
            <Row>
              <Col lg={12}>
                <FormLogin />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;