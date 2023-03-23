import logo from "./logo.svg";
import "./App.css";
import ProductCard from "./components/Card/ProductCard";
import { Container, Divider, Grid, Paper, Typography } from "@mui/material";
import CounterHeader from "./components/Header/CounterHeader";

function App() {
  const arr = ["", "", ""];
  return (
    <Container>
      <CounterHeader/>
      <Paper
        sx={{
          py: "28px",
          px: "24px",
          borderRadius: "12px",
          boxShadow:
            "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
          border: "1px solid #EAECF0",
        }}
      >
        <Typography component={'p'} variant="lg" color={'#101828'} fontWeight={600}>
        Featured Items
        </Typography>
        <Divider sx={{background:'#EAECF0', my:'24px'}}/>
        <Grid container spacing={"24px"}>
          {arr.map((item) => (
            <Grid item xs={12} md={6} lg={3}>
              <ProductCard />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
