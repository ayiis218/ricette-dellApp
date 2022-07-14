import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import FormLanding from '../components/organisms/FormLanding'

function App() {
  return (
    <div>
          <Container fluid>
            <Row>
              <Col lg={12}>
                <FormLanding />
              </Col>
            </Row>
          </Container>
    </div>
  );
}

export default App;