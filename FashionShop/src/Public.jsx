import React from "react";
import { Container, IconButton } from "@material-ui/core";
import Header from "./Header/header";
import Body from "./Body/body";
import Footer from "./Footer/footer";
import ResHeader from "./Responsive/res-header";
import Carousel from "./Carousel/carousel";
import Basket from "./Header/Basket";
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
