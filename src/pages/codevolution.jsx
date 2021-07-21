import React from "react";
import { useFormik } from "formik";
import { FormInput } from "../components";

const Codevolution = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
  });
  console.log(formik.values);
  return (
    <div>
      <form>
        <FormInput
          name="name"
          value={formik.values.name}
          handleChange={formik.handleChange}
        />
        <input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <FormInput
          name="channel"
          value={formik.values.channel}
          handleChange={formik.handleChange}
        />
      </form>
    </div>
  );
};

export default Codevolution;
