import { Formik } from "formik";
import React, { useState } from "react";
import loginUserSchema from "../schemas/login.user.schema";
import {
  Button,
  FormControl,
  FormHelperText,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import axiosInstance from "../lib/axios.instance";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const loginUser = async (values) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post("/user/login", values);

      setIsLoading(false);

      const token = res?.data?.token;
      localStorage.setItem("token", token);

      navigate("/");
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
          email: "",
          password: "",
        }}
        validationSchema={loginUserSchema}
        onSubmit={(values) => {
          loginUser(values);
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
