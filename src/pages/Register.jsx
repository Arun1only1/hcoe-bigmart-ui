import { Formik } from "formik";
import React from "react";
import registerUserSchema from "../schemas/register.user.schema";
import {
  Button,
  FormControl,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={registerUserSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: "1rem",
                width: "400px",
              }}
            >
              <Typography variant="h4" sx={{ color: "grey" }}>
                Sign up
              </Typography>

              {/* first name */}
              <FormControl fullWidth>
                <TextField
                  label="First name"
                  {...formik.getFieldProps("firstName")}
                />

                {formik.touched.firstName && formik.errors.firstName ? (
                  <FormHelperText error>
                    {formik.errors.firstName}
                  </FormHelperText>
                ) : null}
              </FormControl>

              {/* last name */}

              <FormControl fullWidth>
                <TextField
                  label="Last name"
                  {...formik.getFieldProps("lastName")}
                />

                {formik.touched.lastName && formik.errors.lastName ? (
                  <FormHelperText error>
                    {formik.errors.lastName}
                  </FormHelperText>
                ) : null}
              </FormControl>

              {/*email */}

              <FormControl fullWidth>
                <TextField label="Email" {...formik.getFieldProps("email")} />

                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              {/*password */}

              <FormControl fullWidth>
                <TextField
                  label="Password"
                  {...formik.getFieldProps("password")}
                />

                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <Stack sx={{ width: "100%", alignItems: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  fullWidth
                  sx={{ marginBottom: "10px" }}
                >
                  register
                </Button>

                <Link to="/login">Already registered? Login</Link>
              </Stack>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Register;
