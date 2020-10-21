import React from "react";
import "./body.css";
import women1 from "../img/Layer_430.png";
import women2 from "../img/Layer_428.png";
import women3 from "../img/Layer_429.png";
import formen from "../img/Layer_415.png";
import { NavLink } from "react-router-dom";
import OverSlider from "./overSlider";
import FromBlog from "./fromBlog";
import Grid from "@material-ui/core/Grid";
import ActiveLastBreadcrumb from "../Responsive/res-bread-crumbs";
import { Button, makeStyles, Paper } from "@material-ui/core";
import Slider from "./Slider";
import Mcart1 from "../img/Layer_413.png";
import Mcart2 from "../img/Layer_414.png";
import Wcart1 from "../img/Layer_418.png";
import Wcart2 from "../img/Layer_417.png";
import forwomen from "../img/Layer_416.png";

export const useStyles = makeStyles((theme) => ({
  themeSpasing: {
    padding: theme.spacing(1),
  },
  breadcrumbPaper: {
    padding: theme.spacing(1),
    width: 100 + "%",
    height: 100 + "%",
  },
  readMoreButton: {
    backgroundColor: "#db3838",
    color: "#ffffff",
    cursor: "pointer",
    zIndex: 100,
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
      padding: "6px 10px",
    },
    [theme.breakpoints.down("870")]: {
      fontSize: "11px",
      padding: "5",
      textTransform: "capitalize",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
      padding: "6px 10px",
      textTransform: "uppercase",
    },
  },
}));

const Body = () => {
  const classes = useStyles();
  let descrip = ["clothes", "footwear", "hand bags"];
  let img = [women1, women2, women3];
  return (
    <div className='body'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.breadcrumbPaper} elevation={0} square>
            <ActiveLastBreadcrumb />
          </Paper>
        </Grid>
        <Grid container item xs={12} spacing={2}>
          {descrip.map((item, i) => {
            return (
              <Grid item xs={12} sm={4} key={item + i}>
                <Paper className={classes.breadcrumbPaper}>
                  <div className='photos_cart'>
                    <span className='descrip'>
                      <div className='descrip-text'>
                        <p className='tipicalL'>{descrip[i]}</p>
                        <Button
                          className={classes.readMoreButton}
                          variant='contained'
                        >
                          <NavLink to='' style={{ color: "#fff" }}>
                            Click here
                          </NavLink>
                        </Button>
                      </div>
                    </span>
                    <img src={img[i]} alt='women' />
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Grid item container xs={12} spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className='for-men'>
              <div className='men-img'>
                <span className='descrip'>
                  <div className='descrip-text'>
                    <p className='tipicalL'>for men</p>
                    <Button
                      className={classes.readMoreButton}
                      variant='contained'
                    >
                      <NavLink to='' style={{ color: "#fff" }}>
                        More
                      </NavLink>
                    </Button>
                  </div>
                </span>
                <img src={formen} alt='women' />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className='slider-men'>
              <Slider slides={forMenslides} />
            </div>
          </Grid>
        </Grid>
        <Grid item container xs={12} spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className='slider-women'>
              <Slider slides={forWomenslides} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className='for-men'>
              <div className='women-img'>
                <span className='descrip'>
                  <span className='descrip-text'>
                    <p className='tipicalL'>for women</p>
                    <Button
                      className={classes.readMoreButton}
                      variant='contained'
                    >
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
        <OverSlider />
        <Grid item container xs={12} spacing={2}>
          <FromBlog />
        </Grid>
      </Grid>
    </div>
  );
};

export default Body;

let forMenslides = [
  {
    name: "fMslide",
    cart1: Mcart1,
    cart2: Mcart2,
  },
  {
    name: "sMslide",
    cart1: Mcart1,
    cart2: Mcart2,
  },
];

let forWomenslides = [
  {
    name: "fWslide",
    cart1: Wcart1,
    cart2: Wcart2,
  },
  {
    name: "sWslide",
    cart1: Wcart1,
    cart2: Wcart2,
  },
];
