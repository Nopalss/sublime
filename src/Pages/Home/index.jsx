import React from "react";
import Container from "../../components/Container";
import Started from "./Started";
import Counter from "./Counter";
import { Products } from "./Products";
const Home = () => {
  return (
    <Container>
      <Started />
      <Counter />
      <Products />
    </Container>
  );
};

export default Home;
