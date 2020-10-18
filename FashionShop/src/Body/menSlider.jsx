import React from "react";
import "./body.css";
import Rating from "@material-ui/lab/Rating";
import cart1 from "../img/Layer_413.png";
import cart2 from "../img/Layer_414.png";
import Carousel from "react-material-ui-carousel";
import { Button, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  themeSpasing: {
    padding: theme.spacing(1),
  },
  addToCardButton: {
    backgroundColor: "#db3838",
    color: "#ffffff",
    cursor: "pointer",
    zIndex: 100,
    fontSize: theme.typography.fontSize,
    "&:hover": {
      backgroundColor: "#05c005",
      transform: "scale(1.1)",
    },
    "&:focus": {
      backgroundColor: "#db3830",
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
      padding: "6px 10px",
    },
    [theme.breakpoints.down("870")]: {
      fontSize: "12px",
      padding: "5px",
    },
  },
}));

const MenSlider = () => {
  const classes = useStyles();
  let slides = [
    {
      name: "fslide",
      cart1: cart1,
      cart2: cart2,
    },
    {
      name: "sslide",
      cart1: cart1,
      cart2: cart2,
    },
  ];

  return (
    <div className='slider-men'>
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
                        <Rating
                          className={classes.themeSpasing}
                          name='half-rating'
                          placeholder='Моя оценка'
                          defaultValue={2.5}
                          precision={0.5}
                        />
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
                        <Rating
                          className={classes.themeSpasing}
                          placeholder='Моя оценка'
                          name='half-rating'
                          defaultValue={2.5}
                          precision={0.5}
                        />
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
    </div>
  );
};

export default MenSlider;
