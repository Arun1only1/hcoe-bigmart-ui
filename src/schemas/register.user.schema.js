import * as Yup from "yup";

const registerUserSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required.")
    .trim()
    .max(20, "First name must be at max 20 characters."),

  lastName: Yup.string()
    .required("Last name is required.")
    .trim()
    .max(20, "Last name must be at max 20 characters."),

  email: Yup.string()
    .email("Must be a valid email.")
    .required("Email is required.")
    .trim()
    .lowercase()
    .max(55, "Email must be at max 55 characters.")
    .min(6, "Email must be at least 6 characters."),

  password: Yup.string().required("Password is required.").trim(), //TODO: regex add
});

export default registerUserSchema;
