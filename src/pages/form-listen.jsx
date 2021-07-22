import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

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
  });

  useEffect(() => {
    const age = formik.values.age;
    setManage((_) => ({ isOlder: age > 18 }));
  }, [formik.values.age]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label>Age</label>
        <input
          type="text"
          name="age"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        <button type="submit">Submit</button>
      </form>
      {manage.isOlder && <div>More than 18</div>}
      {!!formik.values.age && !manage.isOlder && <div>Less than 18</div>}
    </div>
  );
};

export default FormListen;
