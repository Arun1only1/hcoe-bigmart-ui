import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { fallBackImage } from "../constants/fallbackImage";

const ProductCard = (props) => {
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
        onClick={() => {
          navigate(`/product-detail/${props?._id}`);
        }}
        src={props.image || fallBackImage}
        alt={props.name}
        style={{
          height: "400px",
          width: "100%",
          cursor: "pointer",
          objectFit: "cover",
        }}
      />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Typography variant="h6">{props.name}</Typography>
        <Chip label={props.brand} color="secondary" />
        <Typography>${props.price}</Typography>
      </Stack>

      <Typography sx={{ textAlign: "justify" }}>
        {props.description.substring(0, 200)}...
      </Typography>

      <Button
        variant="contained"
        fullWidth
        onClick={() => {
          navigate(`/product-detail/${props?._id}`);
        }}
      >
        Explore
      </Button>
    </Box>
  );
};

export default ProductCard;
