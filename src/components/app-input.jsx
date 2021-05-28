import { useFormikContext } from "formik";
import React from "react";

const AppInput = ({ name, ...rest }) => {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
  return (
    <>
      <input
        type="text"
        name={name}
        onChange={(_) => handleChange(_)}
        onBlur={(_) => setFieldTouched(name)}
        style={{ display: "block", width: "100%" }}
        {...rest}
      />
      {touched[name] && errors[name] && (
        <p style={{ color: "red" }}>{errors[name]}</p>
      )}
    </>
  );
};

export default AppInput;
