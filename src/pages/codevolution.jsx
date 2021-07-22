import React, { useState } from "react";
import { FormContainer, FormInput, SubmitBtn } from "../components";
import { validationSchema } from "../utils";

const Codevolution = () => {
  const [manage, setManage] = useState({ isLoading: false });
  const initialValues = {
    name: "cristh",
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

  return (
    <div style={{ margin: "0 auto", width: "70%" }}>
      <FormContainer
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <div style={{ marginBottom: "1rem" }}>
          <FormInput
            label="name"
            name="name"
            placeholder="Enter your name"
            isDisabled={manage.isLoading}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <FormInput label="email" name="email" isDisabled={manage.isLoading} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <FormInput
            label="channel"
            name="channel"
            placeholder="Enter your youtube channel"
            isDisabled={manage.isLoading}
          />
        </div>
        <SubmitBtn disabled={manage.isLoading} />
      </FormContainer>
    </div>
  );
};

export default Codevolution;
