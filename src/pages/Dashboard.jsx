import { Box, Button, CircularProgress, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../lib/axios.instance";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("/product/list");
        setIsLoading(false);
        const products = res?.data?.productList;
        setProducts(products);
      } catch (error) {
        setIsLoading(false);
        console.log(error.response.data.message);
      }
    };

    getProductData();
  }, []);

  const navigate = useNavigate();

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Box
      sx={{
        marginTop: "7rem",
        marginBottom: "4rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Header />

      <Button
        variant="contained"
        color="success"
        onClick={() => {
          navigate("/add-product");
        }}
      >
        Add product
      </Button>
      <Stack
        direction="row"
        sx={{
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {products.map((item) => {
          console.log(item);
          return (
            <ProductCard
              key={item._id}
              _id={item._id}
              name={item.name}
              brand={item.brand}
              price={item.price}
              image={item.image}
              description={item.description}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default Dashboard;
