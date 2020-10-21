import React from "react";
import "./body.css";
import Rating from "@material-ui/lab/Rating";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import cart1 from "../img/Layer_423.png";
import cart2 from "../img/Layer_425.png";
import cart3 from "../img/Layer_424.png";
import cart4 from "../img/Layer_426.png";
import { Button, useMediaQuery, useTheme } from "@material-ui/core";
import useStyles from "./body";

const OverSlider = () => {
  const classes = useStyles();
  const theme = useTheme();
  let match = useMediaQuery(theme.breakpoints.down("xs"));
  let arrMd = [
    [cart1, cart2, cart3, cart4],
    [cart1, cart2, cart3, cart4],
    [cart1, cart2, cart3, cart4],
  ];
  let arrXs = [
    [cart1, cart2],
    [cart3, cart4],
  ];

  return (
    <Grid item container xs={12} spacing={2}>
      <Grid item container xs={12} spacing={3}>
        <Grid item xs={4} sm={4}>
          <span className='over-header'>New arrivals</span>
        </Grid>
        <Grid item xs={4} sm={4}>
          <span className='over-header'>Best Sellers</span>
        </Grid>
        <Grid item xs={4} sm={4}>
          <span className='over-header'>Popular</span>
        </Grid>
      </Grid>
      <Grid className={classes.gridOverflowHidden} item xs={12}>
        <Carousel
          timeout={600}
          timer={600}
          autoPlay={false}
          indicators={true}
          animation={match ? "fade" : "slide"}
          navButtonsAlwaysVisible={false}
        >
          {match
            ? arrXs.map(function (x, i) {
                return (
                  <Grid key={"arrSm" + i} item container xs={12} spacing={2}>
                    {x.map((slide, index) => {
                      return (
                        <Grid item xs={6} key={index}>
                          <div className='panel-cart'>
                            <img src={slide} alt='Printed Chiffon Dress' />
                          </div>
                          <div>
                            <div className='panel-cost-text tipical'>
                              Printed Chiffon Dress
                            </div>
                            <div className='cost-text'>
                              <div className='cost-text-cost'>
                                <span className='tipical'>£ 61.19</span>
                                <Rating
                                  className={classes.themeSpacing}
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
                        </Grid>
                      );
                    })}
                  </Grid>
                );
              })
            : arrMd.map(function (x, i) {
                return (
                  <Grid key={"arrMd" + x} item container xs={12} spacing={2}>
                    {x.map((slide, index) => {
                      return (
                        <Grid item xs={3} key={index}>
                          <div className='panel-cart'>
                            <img src={slide} alt='Printed Chiffon Dress' />
                          </div>
                          <div>
                            <div className='panel-cost-text tipical'>
                              Printed Chiffon Dress
                            </div>
                            <div className='cost-text'>
                              <div className='cost-text-cost'>
                                <span className='tipical'>£ 61.19</span>
                                <Rating
                                  className={classes.themeSpacing}
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
                        </Grid>
                      );
                    })}
                  </Grid>
                );
              })}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default OverSlider;
