import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";

const ProductCard = ({ image, name, title, bid }) => {
  return (
    <Card
      sx={{
        border: "1px solid #D0D5DD",
        borderRadius: "12px",
        padding: "12px",
        boxShadow: "none",
      }}
    >
      <div style={{width:'100%'}}>
        <img style={{width:'100%'}} src="/assets/laptop.svg" />
      </div>
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          mt: "16px",
          mb: "12px",
        }}
      >
        <Box
          sx={{
            height: "32px",
            width: "32px",
            background: "#F2F4F7",
            borderRadius: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography variant="sm" xs={{ fontWeight: 500 }}>
            KO
          </Typography>
        </Box>
        <Typography variant="xs" component={"p"} sx={{ fontWeight: 600 }}>
          Koray Okumus{" "}
          <Typography variant="xs" sx={{ fontWeight: 400, color: "#98A2B3" }}>
            (Highest Bidder)
          </Typography>
        </Typography>
      </Box>
      <Typography variant="sm" component="p" fontWeight={600}>
        Apple MacBook Air 13" M1 Chip 8GB 256GB 2020 Model - Rose Gold
      </Typography>
      <Typography my={'8px'}
        variant="sm"
        component={"p"}
        sx={{ fontWeight: 400, color: "#98A2B3" }}
      >
        Current Bid:{" "}
        <Typography variant="sm" sx={{ fontWeight: 600, color:'#344054' }}>
          ₦795,000
        </Typography>
      </Typography>
      <Box sx={{paddingTop:'12px', borderTop:'1px solid #EAECF0'}}>
        <Button variant="contained" fullWidth sx={{boxShadow:'none', borderRadius:'8px', textTransform:'none', fontWeight:600}} color="primary">
        Add to wishlist
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
