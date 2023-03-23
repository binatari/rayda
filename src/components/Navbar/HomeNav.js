import { Box, Container, Typography } from "@mui/material";
import React from "react";

const HomeNav = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between", pt:'32px', pb:'20px' }}>
        <Typography variant="xl" component={'p'} fontWeight={600}>
          Welcome
          <Typography variant="md" component={'p'} fontWeight={400}>
            Your current sales auction and activity.
          </Typography>
        </Typography>
        <div>
        <img src="/assets/bell-02.png" />
        </div>

      </Box>
    </Container>
  );
};

export default HomeNav;
