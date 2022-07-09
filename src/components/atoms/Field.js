import React from "react";
import { Form } from "react-bootstrap";

function Field(props) {
  const {
    type: Type,
    id: Id,
    placeholder: Placeholder,
    label: Label } = props;

  return (
    <>
        <Form.Group className="mb-3">
            <Form.Label>{Label}</Form.Label>
            <Form.Control type={Type} id={Id} placeholder={Placeholder} />
        </Form.Group>
    </>
  );
}

export default Field;