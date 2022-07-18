import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import FormDetailRecipe from '../../components/organisms/FormRecipe/FormDetailRecipe'

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <FormDetailRecipe />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;