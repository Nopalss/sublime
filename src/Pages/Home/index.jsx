import React from "react";
import Container from "../../components/Container";
import Started from "./Started";
import Counter from "./Counter";
import { Products } from "./Products";
import Overview from "./Overview";
import Overview2 from "./Overview2";
const Home = () => {
  return (
    <Container>
      <Started />
      <Counter />
      <Products />
      <Overview />
      <Overview2 />
    </Container>
  );
};

export default Home;
