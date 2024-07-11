import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Divider,
} from "@mui/material";
export default function HeroSection() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "background.default",
        marginTop: "2rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="h1">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </Typography>
            <Typography variant="h6" sx={{ py: "2rem" }}>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "text.main",
                color: "white",
                "&:hover": {
                  backgroundColor: "text.primary",
                },
                borderRadius: "99px",
                padding: "0.5rem 2rem",
              }}
            >
              <Typography variant="h6">Shop Now</Typography>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: "2rem",
            }}
          >
            <Typography variant="h2">
              200+
              <br />
              <Typography variant="h6">International Brands</Typography>
            </Typography>
            <Divider orientation="vertical" flexItem />

            <Typography variant="h2">
              2,000+
              <br />
              <Typography variant="h6">High-Quality Products</Typography>
            </Typography>
            <Divider orientation="vertical" flexItem />

            <Typography variant="h2">
              30,000+
              <br />
              <Typography variant="h6">Happy Customer</Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <img
              src="/Hero.png"
              alt="Fashion"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
