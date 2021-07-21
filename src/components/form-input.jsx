import React, { useEffect, useRef } from "react";

const FormInput = ({ label, name, value, isDisabled, handleChange }) => {
  const field = useRef(null);

  useEffect(() => {
    field.current.addEventListener("onChange", handleChange);
  }, []);
  return (
    <div>
      <form-input
        ref={field}
        is-disabled={isDisabled}
        label={label}
        name={name}
        value={value}
      />
    </div>
  );
};

export default FormInput;
