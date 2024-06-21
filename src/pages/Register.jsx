import { Formik } from "formik";
import React, { useState } from "react";
import registerUserSchema from "../schemas/register.user.schema";
import {
  Button,
  FormControl,
  FormHelperText,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../lib/axios.instance";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const registerUser = async (values) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post("/user/register", values);

      setIsLoading(false);
      navigate("/login");
    } catch (error) {
      setIsLoading(false);
      console.log(error.response.data.message);
    }
  };
  return (
    <div>
      {isLoading && <LinearProgress color="success" />}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={registerUserSchema}
        onSubmit={(values) => {
          registerUser(values);
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
