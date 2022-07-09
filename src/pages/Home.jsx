import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import FormLanding from '../components/organisms/FormLanding'

function App() {
  return (
    <div className="App">
      <Card>
        <Card.Body className="pb-2">
          <Container>
            <Row>
              <Col lg={12}>
                <FormLanding />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;