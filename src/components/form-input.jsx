import React, { useEffect, useRef } from "react";
import { useFormikContext } from "formik";

const FormInput = ({ label, name, value, isDisabled }) => {
  const field = useRef(null);
  const { touched, errors, handleBlur, handleChange } = useFormikContext();

  useEffect(() => {
    field.current.addEventListener("onChange", handleChange);
    field.current.addEventListener("onBlur", handleBlur);
  }, []);

  return (
    <>
      <form-input
        ref={field}
        is-disabled={isDisabled}
        label={label}
        name={name}
        value={value}
      />
      {touched[name] && errors[name] ? <div>{errors[name]}</div> : null}
    </>
  );
};

export default FormInput;
