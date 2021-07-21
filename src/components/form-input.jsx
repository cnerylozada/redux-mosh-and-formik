import React, { useEffect, useRef } from "react";

const FormInput = ({ name, value, handleChange }) => {
  const field = useRef(null);

  useEffect(() => {
    field.current.addEventListener("onChange", handleChange);
  }, []);
  return (
    <div>
      <form-input ref={field} name={name} value={value} />
    </div>
  );
};

export default FormInput;
