import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import { FormInput } from "../components";
import * as Yup from "yup";

const Codevolution = () => {
  const [manage, setManage] = useState({ isLoading: false });
  const initialValues = {
    name: "",
    channel: "",
    email: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required().label("Name"),
    email: Yup.string()
      .email("Invalid email address")
      .required()
      .label("Email"),
    channel: Yup.string().required().label("Channel"),
  });

  const onSubmit = (values) => {
    setManage((_) => ({ ..._, isLoading: true }));
    setTimeout(() => {
      setManage((_) => ({ ..._, isLoading: false }));
      console.log(values);
    }, 2000);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          onSubmit(values);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          handleBlur,
          handleChange,
          errors,
          handleSubmit,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <FormInput
                label="name"
                name="name"
                value={values.name}
                isDisabled={manage.isLoading}
              />
            </div>

            <div>
              <input
                type="text"
                name="email"
                value={values.email}
                disabled={manage.isLoading}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.email && <div>{errors.email}</div>}
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <FormInput
                label="channel"
                name="channel"
                value={values.channel}
                isDisabled={manage.isLoading}
              />
            </div>

            <button type="submit" disabled={manage.isLoading || !isValid}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Codevolution;
