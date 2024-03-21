import React from "react";
import { Form } from "react-hook-form";

const Input: React.FC<InputProps> = ({ label, ...props }) => {
    return (
      <Form.Group className="form-group">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...props} />
      </Form.Group>
    );
  };
  
  export default Input;