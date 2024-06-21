import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axiosInstance from "../lib/axios.instance";
import { useParams } from "react-router-dom";
import { fallBackImage } from "../constants/fallbackImage";
import DeleteProductDialog from "../components/DeleteProduct";

const ProductDetail = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    const getProductDetail = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(`/product/detail/${params.id}`);
        setProductDetail(res?.data?.productDetail);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    getProductDetail();
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Box
      sx={{
        padding: "2rem",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <Header />
      <Grid container spacing={2} sx={{ gap: "3rem", flexDirection: "row" }}>
        <Grid item xs={4} sx={{}}>
          <img
            src={productDetail.image || fallBackImage}
            alt={productDetail.name}
            style={{
              height: "500px",
              width: "500px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Typography variant="h5">{productDetail.name}</Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Price: ${productDetail.price}</Typography>
            <Chip label={productDetail.brand} color="secondary" />
          </Stack>
          <Typography>Quantity: {productDetail.quantity}</Typography>

          <Typography sx={{ textAlign: "justify" }}>
            {productDetail.description}
          </Typography>
          <Stack direction="row" spacing={5}>
            <Button variant="contained" color="success">
              Edit
            </Button>

            <DeleteProductDialog />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
