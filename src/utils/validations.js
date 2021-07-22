import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email("Invalid email address").required().label("Email"),
  channel: Yup.string().required().label("Channel"),
});
