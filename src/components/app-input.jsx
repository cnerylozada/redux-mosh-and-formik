import { useFormikContext } from "formik";
import React from "react";

const AppInput = ({ name, ...rest }) => {
  return (
    <>
      <input
        name={name}
        style={{ display: "block", width: "100%", padding: "8px" }}
        {...rest}
      />
      <p style={{ color: "red", margin: 0 }}>Error</p>
    </>
  );
};

export default AppInput;
