import React from "react";
import "../Header/header.css";
import Header from "../Header/header";
import Body from "../Body/body";
import Footer from "../Footer/footer";
import ResHeader from "../Responsive/res-header";
import Carousel from "../Carousel/carousel";
import Basket from "../Header/Basket";
import signal from "../Header/header";
import { Container } from "@material-ui/core";

const Public = () => {
  return (
    <Container>
      <Basket signal={signal} />
      <Header />
      <ResHeader />
      <Carousel />
      <Body />
      <Footer />
    </Container>
  );
};

export default Public;
