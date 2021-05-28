import { useFormikContext } from "formik";
import React from "react";

const AppInput = ({ name, ...rest }) => {
  const { handleChange } = useFormikContext();
  return (
    <input
      type="text"
      name={name}
      onChange={(_) => handleChange(_)}
      style={{ display: "block", width: "100%" }}
      {...rest}
    />
  );
};

export default AppInput;
