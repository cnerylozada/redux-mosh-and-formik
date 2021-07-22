import React, { useState } from "react";
import { Formik } from "formik";
import { FormInput, SubmitBtn } from "../components";
import * as Yup from "yup";

const Codevolution = () => {
  const [manage, setManage] = useState({ isLoading: false });
  const initialValues = {
    name: "cristh",
    email: "",
    channel: "",
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
    <div style={{ margin: "0 auto", width: "70%" }}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
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
          <>
            <div style={{ marginBottom: "1rem" }}>
              <FormInput
                label="name"
                name="name"
                placeholder="Enter your name"
                isDisabled={manage.isLoading}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label>Email</label>
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
                placeholder="Enter your youtube channel"
                isDisabled={manage.isLoading}
              />
            </div>

            <SubmitBtn disabled={manage.isLoading || !isValid} />
          </>
        )}
      </Formik>
    </div>
  );
};

export default Codevolution;
