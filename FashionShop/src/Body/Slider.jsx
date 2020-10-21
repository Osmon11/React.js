import React from "react";
import { Button, Grid } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import CustomRating from "./rating";
import useStyles from "./body";

export default function Slider({ slides }) {
  const classes = useStyles();

  return (
    <Carousel
      autoPlay={false}
      indicators={true}
      animation='fade'
      timeout={1000}
      timer={1000}
    >
      {slides.map((slide, index) => {
        return (
          <Grid key={slide.name + index} item xs={12} sm={12}>
            <div className='swipe-cart '>
              <div className='panel'>
                <div className='panel-cart'>
                  <img src={slide.cart1} alt='Printed Chiffon Dress' />
                </div>
                <div className='panel-cart'>
                  <img src={slide.cart2} alt='Printed Chiffon Dress' />
                </div>
              </div>
              <div className='swipe-text'>
                <div className='panel-cost'>
                  <div className='panel-cost-text tipical'>
                    Printed Chiffon Dress
                  </div>
                  <div className='cost-text'>
                    <div className='cost-text-cost'>
                      <span className='tipical'>£ 61.19</span>
                      <CustomRating />
                    </div>
                    <Button
                      className={classes.addToCardButton}
                      variant='contained'
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
                <div className='panel-cost'>
                  <div className='panel-cost-text tipical'>
                    Printed Chiffon Dress
                  </div>
                  <div className='cost-text'>
                    <div className='cost-text-cost'>
                      <span className='tipical'>£ 61.19</span>
                      <CustomRating />
                    </div>
                    <Button
                      className={classes.addToCardButton}
                      variant='contained'
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        );
      })}
    </Carousel>
  );
}
