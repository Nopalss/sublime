import React from "react";
import Container from "../../components/Container";
import Started from "./Started";
import Counter from "./Counter";
import { Products } from "./Products";
import Overview from "./Overview";
import Overview2 from "./Overview2";
import CustomerSupport from "./CustomerSupport";
import BannerBottom from "./BannerBottom";
const Home = () => {
  return (
    <Container>
      <Started />
      <Counter />
      <Products />
      <Overview />
      <Overview2 />
      <CustomerSupport />
      <BannerBottom />
    </Container>
  );
};

export default Home;
