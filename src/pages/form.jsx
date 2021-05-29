import React, { useEffect } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import AppInput from "../components/app-input";

const FormPage = () => {
  const formik = useFormik({
    initialValues: {
      amount: "",
      quota: "",
    },
    validationSchema: Yup.object({
      amount: Yup.string().min(5).required("Required"),
      quota: Yup.number().min(2).required("Required"),
    }),
  });

  useEffect(() => {
    console.log(formik.values, formik.isValid);
  }, [formik.values, formik.isValid]);

  return (
    <form>
      <div style={{ marginBottom: "15px" }}>
        <AppInput
          name="amount"
          placeholder="Enter amount"
          {...formik.getFieldProps("amount")}
        />
      </div>

      <input name="quota" type="number" {...formik.getFieldProps("quota")} />
      {formik.touched.quota && formik.errors.quota ? (
        <div>{formik.errors.quota}</div>
      ) : null}

      <span>
        {JSON.stringify(formik.values)} {JSON.stringify(formik.isValid)}
      </span>
    </form>
  );
};

export default FormPage;
