import React from "react";
import { Formik } from "formik";

const FormContainer = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        onSubmit(values);
      }}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default FormContainer;
