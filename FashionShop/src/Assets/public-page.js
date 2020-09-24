import React from 'react';
import '../Header/header.css';
import Header from '../Header/header';
import Body from '../Body/body';
import Footer from '../Footer/footer';
import ResHeader from '../Responsive/res-header';
import Carousel from '../Carousel/carousel';
import Basket from '../Header/Basket';
import signal from '../Header/header';

const Public = () => {
  return (
    <>
      <Basket signal={signal} />
      <Header />
      <ResHeader />
      <Carousel />
      <Body />
      <Footer />
    </>
  );
};

export default Public;
