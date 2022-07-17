import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import FormRegister from "../../components/organisms/FormAuth/FormRegister";

function App() {
  return (
    <div className="App">
      <Card>
        <Card.Body >
          <Container className="mt-0 mb-0">
            <Row>
              <Col lg={12}>
                <FormRegister />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;