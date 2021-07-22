import { useFormikContext } from "formik";
import React from "react";

const SubmitBtn = ({ disabled }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <button onClick={handleSubmit} disabled={disabled}>
      Submit
    </button>
  );
};

export default SubmitBtn;
