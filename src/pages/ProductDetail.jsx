import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";

const ProductDetail = () => {
  return (
    <Box sx={{ width: "60vw" }}>
      <Header />
      <Grid
        container
        spacing={2}
        sx={{ border: "1px solid black", gap: "3rem", flexDirection: "row" }}
      >
        <Grid item xs={4} sx={{}}>
          <img
            src="https://imgs.search.brave.com/uh5sZTxl_vfnwUq08bRICrPAA7EYyhapQDYhqu5n3qU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxZ3dtdTBVdGJM/LmpwZw"
            alt="Whey protein"
            style={{
              height: "500px",
              width: "500px",
            }}
          />
        </Grid>
        <Grid item xs={8} sx={{}}>
          <Typography variant="h5">Whey Protein</Typography>
          <Chip label="Nutralein" color="secondary" />

          <Typography>Quantity: 10</Typography>
          <Typography>Price: $200</Typography>

          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            nesciunt aperiam quod sapiente quos necessitatibus autem odio
            veritatis nobis. Aspernatur sapiente corporis quos, ducimus placeat
            repudiandae rem corrupti fugiat laudantium accusamus minima deleniti
            consequatur iste? Molestiae nobis quae, molestias cumque quos ipsa
            delectus nemo unde, ducimus obcaecati natus saepe. Maiores?
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
