import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import CustomRating from "./rating";

const useStyles = makeStyles((theme) => ({
  addToCardButton: {
    backgroundColor: "#db3838",
    color: "#ffffff",
    cursor: "pointer",
    zIndex: 100,
    "&:hover": {
      backgroundColor: "#05c005",
      transform: "scale(1.1)",
    },
    "&:focus": {
      backgroundColor: "#db3830",
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
      padding: "6px 10px",
    },
    [theme.breakpoints.down("870")]: {
      fontSize: "12px",
      padding: "5",
    },
  },
}));

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
