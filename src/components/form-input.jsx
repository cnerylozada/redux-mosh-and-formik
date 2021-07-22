import React, { useEffect, useRef } from "react";
import { useFormikContext } from "formik";

const FormInput = ({ name, isDisabled, ...rest }) => {
  const field = useRef(null);
  const { touched, errors, handleBlur, handleChange, values } =
    useFormikContext();

  useEffect(() => {
    field.current.addEventListener("onChange", handleChange);
    field.current.addEventListener("onBlur", handleBlur);
  }, []);

  return (
    <>
      <form-input
        ref={field}
        name={name}
        value={values[name]}
        is-disabled={isDisabled}
        have-errors={touched[name] && errors[name]}
        error-message={errors[name]}
        {...rest}
      />
    </>
  );
};

export default FormInput;
