import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import FormRegister from "../components/organisms/FormRegister";

function App() {
  return (
    <div className="App">
      <Card>
        <Card.Body className="pb-2">
          <Container className="mt-2">
            <Row>
              <Col lg={12}>
                <FormRegister />
              </Col>
              <Col lg={4} className="border-left">
                {/* <SelectProfile /> */}
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;