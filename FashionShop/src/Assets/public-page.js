import React from "react";
import "../Header/header.css";
import Header from "../Header/header";
import Body from "../Body/body";
import Footer from "../Footer/footer";
import ResHeader from "../Responsive/res-header";
import Carousel from "../Carousel/carousel";
import Basket from "../Header/Basket";
import signal from "../Header/header";
import { Container, IconButton } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "../index.css";

const Public = () => {
  return (
    <Container>
      <a href='#' className='arrowUpward'>
        <IconButton color='secondary' aria-label='arrowUpward'>
          <ArrowUpwardIcon fontSize='inherit' />
        </IconButton>
      </a>
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
