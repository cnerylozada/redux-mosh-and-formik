import React, { useState } from "react";
import { useFormik } from "formik";
import { FormInput } from "../components";

const Codevolution = () => {
  const [manage, setManage] = useState({ isLoading: false });
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };

  const onSubmit = (values) => {
    setManage((_) => ({ ..._, isLoading: true }));
    setTimeout(() => {
      setManage((_) => ({ ..._, isLoading: false }));
      console.log(values);
    }, 2000);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <FormInput
          label="name"
          name="name"
          value={formik.values.name}
          isDisabled={manage.isLoading}
          handleChange={formik.handleChange}
        />
        <input
          type="text"
          name="email"
          value={formik.values.email}
          disabled={manage.isLoading}
          onChange={formik.handleChange}
        />
        <FormInput
          label="channel"
          name="channel"
          value={formik.values.channel}
          isDisabled={manage.isLoading}
          handleChange={formik.handleChange}
        />
        <button type="submit" disabled={manage.isLoading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Codevolution;
