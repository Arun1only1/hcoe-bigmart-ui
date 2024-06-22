import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import productSchema from "../schemas/product.schema";
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../components/Header";
import axiosInstance from "../lib/axios.instance";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  useEffect(() => {
    const getProductDetail = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`/product/detail/${params.id}`);

        setLoading(false);
        setProduct(res.data.productDetail);
      } catch (error) {
        setLoading(false);
        console.log("error aayo");
      }
    };

    getProductDetail();
  }, []);

  const editProduct = async (values) => {
    try {
      setEditLoading(true);
      await axiosInstance.put(`/product/edit/${params.id}`, values);
      navigate("/");
      setEditLoading(false);
    } catch (error) {
      setEditLoading(false);
      console.log("error happens");
    }
  };
  if (loading) {
    return <CircularProgress />;
  }
  return (
    <div>
      <Header />
      {editLoading && <LinearProgress />}
      <Formik
        enableReinitialize
        initialValues={{
          name: product.name,
          brand: product.brand,
          price: product.price,
          quantity: product.quantity,
          description: product.description,
        }}
        validationSchema={productSchema}
        onSubmit={(values) => {
          editProduct(values);
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
