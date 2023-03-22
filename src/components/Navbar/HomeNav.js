import { Box, Container, Typography } from "@mui/material";
import React from "react";

const HomeNav = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="xl">
          Welcome
          <Typography variant="md">
            Your current sales auction and activity.
          </Typography>
        </Typography>
        <img src="/assets/bell.png" />
      </Box>
    </Container>
  );
};

export default HomeNav;
