import * as Yup from "yup";

const loginUserSchema = Yup.object({
  email: Yup.string()
    .email("Must be a valid email.")
    .required("Email is required.")
    .trim()
    .lowercase(),

  password: Yup.string().required("Password is required.").trim(),
});

export default loginUserSchema;
