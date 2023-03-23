import logo from "./logo.svg";
import "./App.css";
import ProductCard from "./components/Card/ProductCard";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import CounterHeader from "./components/Header/CounterHeader";
import { useGetProductsQuery } from "./utils/apiSlice";

function App() {

  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery();

  return (
    <Container>
      <Divider sx={{ background: "#EAECF0", mt: "20px", mb: "48px" }} />
      <CounterHeader />
      <Paper
        sx={{
          py: "28px",
          px: "24px",
          borderRadius: "12px",
          boxShadow:
            "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
          border: "1px solid #EAECF0",
          mt: "24px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" , flexWrap:'wrap', rowGap:'12px'}}>
          <Typography
            component={"p"}
            variant="lg"
            color={"#101828"}
            fontWeight={600}
          >
            Featured Items
          </Typography>
          <Button
            variant="outlined"
            color="grey"
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              border: "1px solid #D0D5DD",
              boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
           View Auction
          </Button>
        </Box>

        <Divider sx={{ background: "#EAECF0", my: "24px" }} />
        <Grid container spacing={"24px"}>
          {isLoading ? (
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              my={"1em"}
              sx={{ width: "100%" }}
            >
              <span className="dot-falling"></span>
            </Box>
          ) : data?.data?.length ? (
            data?.data.map(({ image, name, title, bid }, i) => (
              <Grid item xs={12} md={6} lg={3}>
                <ProductCard
                  image={image}
                  name={name}
                  title={title}
                  bid={bid}
                />
              </Grid>
            ))
          ) : (
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              my={"1em"}
              sx={{ width: "100%" }}
            >
              <Typography textAlign={"center"}>
                Sorry your request could not be processed at this time
              </Typography>
            </Box>
          )}
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
