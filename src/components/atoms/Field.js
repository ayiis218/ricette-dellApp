/* eslint-disable no-useless-rename */
import React from 'react';
import { Form } from 'react-bootstrap';

function Field(props) {
   const {
      placeholder: placeholder,
      label: label,
      type: type,
      onchange: onChange,
   } = props;

   return (
      <>
         <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
               type={type}
               placeholder={placeholder}
               onChange={onChange}
            />
         </Form.Group>
      </>
   );
}

export default Field;
