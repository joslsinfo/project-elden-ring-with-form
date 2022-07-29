import React from "react";
import BsInput from "react-bootstrap/FormControl";

const Input = ({ value, onChange, id, type = "text", ...rest }) => {
  const handleChange = (event) => {
    const value = event.target.value;

    onChange(value, id);
  };

  return (
    <BsInput type={type} value={value} onChange={handleChange} {...rest} />
  );
};

export default Input;
