import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import AppInput from "../components/app-input";

const FormPage = () => {
  const formValues = {
    name: "cristh",
    age: "19",
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(5, "Must be 5 characters or more").required(),
    age: Yup.number().min(18).required(),
  });

  const onEmit = (values, isValid) => {
    console.log(values, isValid);
  };

  return (
    <div>
      <h4>Formik</h4>
      <Formik initialValues={formValues} validationSchema={validationSchema}>
        {({ values }) => (
          <>
            <AppInput
              name={"name"}
              placeholder={"Enter name"}
              value={values.name}
              onEmit={onEmit}
            />
            <AppInput
              name={"age"}
              placeholder={"Enter age"}
              value={values.age}
              onEmit={onEmit}
            />
            <span>{JSON.stringify(values)}</span>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormPage;
