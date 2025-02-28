import React from "react";
import Container from "../../components/Container";
import Started from "./Started";
import Counter from "./Counter";
import { Products } from "./Products";
import Overview from "./Overview";
const Home = () => {
  return (
    <Container>
      <Started />
      <Counter />
      <Products />
      <Overview />
    </Container>
  );
};

export default Home;
