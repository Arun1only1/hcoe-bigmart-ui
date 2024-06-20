import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "400px",
        padding: "1rem",

        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <img
        src="https://imgs.search.brave.com/uh5sZTxl_vfnwUq08bRICrPAA7EYyhapQDYhqu5n3qU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxZ3dtdTBVdGJM/LmpwZw"
        alt="Whey protein"
        style={{
          height: "200px",
          width: "200px",
          objectFit: "cover",
        }}
      />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Typography variant="h6">Whey Protein</Typography>
        <Chip label="Nutralein" color="secondary" />
        <Typography>$200</Typography>
      </Stack>

      <Typography sx={{ textAlign: "justify" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iure
        sint laboriosam mollitia nihil, officia perspiciatis, commodi
        voluptatibus cumque facere corrupti! Officia quod eum amet distinctio
        temporibus praesentium beatae nulla...
      </Typography>

      <Button
        variant="contained"
        fullWidth
        onClick={() => {
          navigate("/product-detail/1");
        }}
      >
        Explore
      </Button>
    </Box>
  );
};

export default ProductCard;
