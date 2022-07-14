import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import FormProfile from '../../components/organisms/FormProfile'

function App() {
  return (
    <div className="App">
      <Card>
        <Card.Body className="pb-2">
          <Container>
            <Row>
              <Col lg={12}>
                <FormProfile />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;