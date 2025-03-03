import React from "react";
import Container from "../../components/Container";
import Started from "./Started";
import Counter from "./Counter";
import { Products } from "./Products";
import Overview from "./Overview";
import Overview2 from "./Overview2";
import CustomerSupport from "./CustomerSupport";
import BannerBottom from "./BannerBottom";
import Benefit from "./Benefit";
import Marquee from "./Marquee";
import Testimonial from "./Testimonial";
const Home = () => {
  return (
    <Container>
      <Started />
      <Counter />
      <Products />
      <Overview />
      <Overview2 />
      <CustomerSupport />
      <Benefit />
      <Marquee />
      <Testimonial />
      <BannerBottom />
    </Container>
  );
};

export default Home;
