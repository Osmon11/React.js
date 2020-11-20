import React from "react";
import { Container, IconButton } from "@material-ui/core";
import Header from "../Components/Header/header";
import Body from "../Components/Body/body";
import Footer from "../Components/Footer/footer";
import ResHeader from "../Components/Responsive/res-header";
import Carousel from "../Components/Carousel/carousel";
import Basket from "../Components/Header/Basket";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const Public = () => {
  return (
    <Container>
      <a href='#' className='arrowUpward'>
        <IconButton color='secondary' aria-label='arrowUpward'>
          <ArrowUpwardIcon fontSize='inherit' />
        </IconButton>
      </a>
      <Basket />
      <Header />
      <ResHeader />
      <Carousel />
      <Body />
      <Footer />
    </Container>
  );
};

export default Public;
