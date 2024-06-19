import { Formik } from "formik";
import React from "react";
import productSchema from "../schemas/product.schema";
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";

const AddProduct = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          brand: "",
          price: 0,
          quantity: 1,
          description: "",
        }}
        validationSchema={productSchema}
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
                Add product
              </Typography>

              {/* name */}

              <FormControl fullWidth>
                <TextField label="Name" {...formik.getFieldProps("name")} />

                {formik.touched.name && formik.errors.name ? (
                  <FormHelperText error>{formik.errors.name}</FormHelperText>
                ) : null}
              </FormControl>

              {/* brand */}

              <FormControl fullWidth>
                <TextField label="Brand" {...formik.getFieldProps("brand")} />

                {formik.touched.brand && formik.errors.brand ? (
                  <FormHelperText error>{formik.errors.brand}</FormHelperText>
                ) : null}
              </FormControl>

              {/* price */}

              <FormControl fullWidth>
                <TextField
                  label="Price"
                  type="number"
                  {...formik.getFieldProps("price")}
                />

                {formik.touched.price && formik.errors.price ? (
                  <FormHelperText error>{formik.errors.price}</FormHelperText>
                ) : null}
              </FormControl>

              {/* quantity */}

              <FormControl fullWidth>
                <TextField
                  label="Quantity"
                  type="number"
                  {...formik.getFieldProps("quantity")}
                />

                {formik.touched.quantity && formik.errors.quantity ? (
                  <FormHelperText error>
                    {formik.errors.quantity}
                  </FormHelperText>
                ) : null}
              </FormControl>

              {/* description */}

              <FormControl fullWidth>
                <TextField
                  label="Description"
                  multiline
                  minRows={4}
                  {...formik.getFieldProps("description")}
                />

                {formik.touched.description && formik.errors.description ? (
                  <FormHelperText error>
                    {formik.errors.description}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
              >
                submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddProduct;
