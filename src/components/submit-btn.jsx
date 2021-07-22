import { useFormikContext } from "formik";
import React from "react";

const SubmitBtn = ({ disabled }) => {
  const { handleSubmit, isValid } = useFormikContext();
  return (
    <button onClick={handleSubmit} disabled={disabled || !isValid}>
      Submit
    </button>
  );
};

export default SubmitBtn;
