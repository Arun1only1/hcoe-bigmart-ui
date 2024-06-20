import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#1A2130",
        height: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ color: "#fff" }}>
        Copyright @ HCOE 2024
      </Typography>
    </Box>
  );
};

export default Footer;
