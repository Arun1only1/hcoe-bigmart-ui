import React from "react";
import { Formik } from "formik";
import productSchema from "../schemas/product.schema";
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../components/Header";

const EditProduct = () => {
  return (
    <div>
      <Header />
      <Formik
        initialValues={{
          name: "A51",
          brand: "Samsung",
          price: 500,
          quantity: 5,
          description:
            "Experience the sleek and powerful Samsung A30, designed to meet all your smartphone needs. Featuring a vibrant 6.4-inch Super AMOLED display, it delivers stunning visuals and an immersive viewing experience. Powered by an efficient Exynos 7904 processor and 4GB RAM, the A30 ensures smooth performance whether you're multitasking or gaming. Capture life's moments with the dual rear cameras, including a 16MP main sensor and a 5MP ultra-wide lens, while the 16MP front camera is perfect for selfies. The 4000mAh battery provides long-lasting power, and with 64GB of internal storage expandable via microSD, you'll never run out of space. The Samsung A30 also boasts a sleek design, fingerprint sensor, and facial recognition for enhanced security. Stay connected and enjoy the best of technology with the Samsung A30, a perfect blend of performance.",
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
                Edit product
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
                  rows={7}
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

export default EditProduct;
