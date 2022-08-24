import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import FormAddRecipe from '../../components/organisms/FormRecipe/FormAddRecipe'

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <FormAddRecipe />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;