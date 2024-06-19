import { Formik } from "formik";
import React from "react";
import loginUserSchema from "../schemas/login.user.schema";
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";

const Login = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginUserSchema}
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
                Sign in
              </Typography>

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
                  login
                </Button>

                <Link to="/register">New here? Register</Link>
              </Stack>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
