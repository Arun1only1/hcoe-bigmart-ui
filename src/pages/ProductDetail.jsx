import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";

const ProductDetail = () => {
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
            src="https://imgs.search.brave.com/uh5sZTxl_vfnwUq08bRICrPAA7EYyhapQDYhqu5n3qU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxZ3dtdTBVdGJM/LmpwZw"
            alt="Whey protein"
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
          <Typography variant="h5">Whey Protein</Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Price: $200</Typography>
            <Chip label="Nutralein" color="secondary" />
          </Stack>
          <Typography>Quantity: 10</Typography>

          <Typography sx={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            nesciunt aperiam quod sapiente quos necessitatibus autem odio
            veritatis nobis. Aspernatur sapiente corporis quos, ducimus placeat
            repudiandae rem corrupti fugiat laudantium accusamus minima deleniti
            consequatur iste? Molestiae nobis quae, molestias cumque quos ipsa
            delectus nemo unde, ducimus obcaecati natus saepe. Maiores?
          </Typography>
          <Stack direction="row" spacing={5}>
            <Button variant="contained" color="success">
              Edit
            </Button>

            <Button variant="contained" color="error">
              Delete
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
