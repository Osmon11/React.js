import React from "react";
import { NavLink } from "react-router-dom";
import "./body.css";
import Rating from "@material-ui/lab/Rating";
import cart1 from "../img/Layer_418.png";
import cart2 from "../img/Layer_417.png";
import forwomen from "../img/Layer_416.png";
import Carousel from "react-material-ui-carousel";
import { Button, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  themeSpasing: {
    padding: theme.spacing(1),
  },
  readMoreButton: {
    backgroundColor: "#db3838",
    color: "#ffffff",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#db3830",
      transform: "scale(1.1)",
    },
    "&:focus": {
      backgroundColor: "#db3830",
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
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
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
      padding: "6px 10px",
    },
    [theme.breakpoints.down("870")]: {
      fontSize: "12px",
      padding: "5px",
    },
  },
}));

const WomenSlider = () => {
  const classes = useStyles();
  let slides = [
    {
      name: "fWslide",
      cart1: cart1,
      cart2: cart2,
    },
    {
      name: "sWslide",
      cart1: cart1,
      cart2: cart2,
    },
  ];

  return (
    <Grid item container xs={12} spacing={2}>
      <Grid item xs={12} sm={6}>
        <div className='slider-women'>
          <Carousel
            timeout={1000}
            timer={1000}
            autoPlay={false}
            indicators={true}
            animation='fade'
          >
            {slides.map((slide, index) => {
              return (
                <Grid key={slide.name + index} item xs={12} sm={12}>
                  <div className='swipe-cart'>
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
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className='for-men'>
          <div className='women-img'>
            <span className='descrip'>
              <span className='descrip-text'>
                <p className='tipicalL'>for women</p>
                <Button className={classes.readMoreButton} variant='contained'>
                  <NavLink to='' style={{ color: "#fff" }}>
                    More
                  </NavLink>
                </Button>
              </span>
            </span>
            <img src={forwomen} alt='women' />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default WomenSlider;
