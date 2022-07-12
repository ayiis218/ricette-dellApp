import React from "react";
import { Form } from "react-bootstrap";

function Field(props) {
  const {
    placeholder: Placeholder,
    label: Label,
    type: Type } = props;

  return (
    <>
        <Form.Group className="mb-3">
            <Form.Label>{Label}</Form.Label>
            <Form.Control type={Type} placeholder={Placeholder} />
        </Form.Group>
    </>
  );
}

export default Field;