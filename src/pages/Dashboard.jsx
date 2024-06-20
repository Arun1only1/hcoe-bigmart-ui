import { Box, Button, Stack } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        marginTop: "7rem",
        marginBottom: "4rem",
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Stack>
    </Box>
  );
};

export default Dashboard;
