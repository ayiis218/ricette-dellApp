import React from "react";
import { Form, Card } from "react-bootstrap";

function Search(props) {
  const {placeholder: Placeholder} = props;

  return (
    <>
    <Card className="text-center">
      <Card.Body >
        <Card.Title>Discover Recipe
          & Delicious Food</Card.Title>
        <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="search restaurant, food"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      </Card.Body>
    </Card>
    </>
  );
}

export default Search;