import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { validationListenForm } from "../utils";

const FormListen = () => {
  const [manage, setManage] = useState({ isOlder: false });
  const initialValues = {
    name: "",
    age: "",
  };

  const onSubmit = (values) => console.log(values);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: validationListenForm,
  });

  useEffect(() => {
    const isValidAge = formik.errors.age;
    console.log(formik.values.age, JSON.stringify(isValidAge));
  }, [formik.values.age]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <label>Age</label>
          <input
            type="text"
            name="age"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />
          {formik.touched.age && formik.errors.age ? (
            <div>{formik.errors.age}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
      {manage.isOlder && <div>Logic for more than 18</div>}
    </div>
  );
};

export default FormListen;
