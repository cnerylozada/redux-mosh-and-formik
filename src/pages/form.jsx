import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import AppInput from "../components/app-input";

const FormPage = () => {
  const formValues = {
    name: "",
    age: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(5, "Must be 5 characters or more").required(),
    age: Yup.number().min(18).required(),
  });

  const onEmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h4>Formik</h4>
      <Formik initialValues={formValues} validationSchema={validationSchema}>
        {({ values, isValid }) => {
          if (!!Object.values(values).every((_) => _ != "") && isValid) {
            onEmit(values);
          }
          return (
            <>
              <div style={{ marginBottom: "10px" }}>
                <AppInput
                  name={"name"}
                  placeholder={"Enter name"}
                  value={values.name}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <AppInput
                  name={"age"}
                  placeholder={"Enter age"}
                  value={values.age}
                />
              </div>
              <span>
                {JSON.stringify(values)} {JSON.stringify(isValid)}
              </span>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormPage;
