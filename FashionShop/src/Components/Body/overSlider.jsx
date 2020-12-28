import React from "react";
import "./body.css";
import Rating from "@material-ui/lab/Rating";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import cart1 from "../../Assets/img/Layer_423.webp";
import cart2 from "../../Assets/img/Layer_425.webp";
import cart3 from "../../Assets/img/Layer_424.webp";
import cart4 from "../../Assets/img/Layer_426.webp";
import { Button, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  themeSpasing: {
    padding: theme.spacing(1),
  },
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
  gridOverflowHidden: {
    overflow: "hidden",
  },
}));

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