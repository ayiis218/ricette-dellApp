import React from "react";
import { Form } from "react-bootstrap";

function InputText() {
  return (
    <>
      <Form>
      <Form.Group className="mb-4 mt-12" controlId="formBasicName">
        <Form.Label >Name</Form.Label>
        <Form.Control type="name" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address*</Form.Label>
        <Form.Control type="email" placeholder="Enter email address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="08xxxxxx" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Create New Password</Form.Label>
        <Form.Control type="password" placeholder="Create New Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNewPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="newpassword" placeholder="New Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      </Form>
    </>
  )
}

export default InputText;