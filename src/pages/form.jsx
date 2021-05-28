import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AppInput from "../components/app-input";

const FormPage = () => {
  const formValues = {
    name: "",
  };
  const onSubmit = (values) => console.log(values);

  return (
    <div>
      <h4>Formik</h4>
      <Formik initialValues={formValues} onSubmit={onSubmit}>
        {({ handleSubmit, values }) => (
          <>
            <AppInput
              name={"name"}
              placeholder={"Enter name"}
              value={values.name}
            />
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormPage;
