import { Box, Button, Chip, Typography } from "@mui/material";
import React from "react";

const ImgComp = ({url}) => (
  <>
    <img src={url} />
  </>
);

const CounterHeader = () => {
  return (
    <Box
      p={"24px"}
      sx={{
        borderRadius: "12px",
        boxShadow:
          "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
        border: "1px solid #EAECF0",
      }}
    >
      <Box
        className="gradient-background"
        sx={{ borderRadius: "12px", height: "192px" }}
      ></Box>
      <Box
        sx={{ display: "flex", py: "12px", justifyContent: "space-between" }}
      >
        <Box sx={{ display: "flex", maxHeight: "5rem" }}>
          <div style={{ position: "relative", bottom: "50px" }}>
            <img src="/assets/logo.png" />
          </div>
          <Box>
            <Typography component={"p"} fontSize={"24px"} fontWeight={600}>
              Starts in: 3 days : 2 hours : 24 minutes
            </Typography>
            <Box sx={{ display: "flex", gap: "8px", alignItems:'center', mt:"8px" }}>
              <Chip
                icon={<ImgComp url={'/assets/dot.png'} />}
                sx={{
                  background: "#FFFAEB",
                  color: "#B54708",
                  px: "11px",
                  fontWeight: 500,
                }}
                label="Not Live"
              />
              <Typography component={"p"} variant="md">
                Layers Auction
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="grey"
            startIcon={<ImgComp url={'/assets/thumb.png'} />}
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              border: "1px solid #D0D5DD",
              boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
              fontWeight:'600',
              fontSize:'14px'
            }}
          >
            Accept Invite
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CounterHeader;
