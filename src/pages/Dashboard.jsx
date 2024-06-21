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
        <ProductCard
          name="Whey Protein"
          brand="Nutralein"
          price={200}
          image="https://imgs.search.brave.com/uh5sZTxl_vfnwUq08bRICrPAA7EYyhapQDYhqu5n3qU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxZ3dtdTBVdGJM/LmpwZw"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iure sint laboriosam mollitia nihil, officia perspiciatis, commodi voluptatibus cumque facere corrupti! Officia quod eum amet distinctio temporibus praesentium beatae nulla"
        />

        <ProductCard
          name="Mouse"
          brand="Logitech"
          price={30}
          image="https://imgs.search.brave.com/xx739Bk_nXjb9u6qXNxcXXKGBBYUxOsrNp04rBFBoGQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF6dVR0YTdCaUwu/anBn"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iure sint laboriosam mollitia nihil, officia perspiciatis, commodi voluptatibus cumque facere corrupti! Officia quod eum amet distinctio temporibus praesentium beatae nulla"
        />
      </Stack>
    </Box>
  );
};

export default Dashboard;
