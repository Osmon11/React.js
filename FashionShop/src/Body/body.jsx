import React from 'react';
import './body.css';
import women1 from '../img/Layer_430.png';
import women2 from '../img/Layer_428.png';
import women3 from '../img/Layer_429.png';
import formen from '../img/Layer_415.png';
import { NavLink } from 'react-router-dom';
import MenSlider from './menSlider';
import { menSlides } from './menSlider';
import WomenSlider from './womenSlider';
import { womenSlides } from './womenSlider';
import OverSlider from './overSlider';
import { overCarts } from './overSlider';
import FromBlog from './fromBlog';
import Grid from '@material-ui/core/Grid';
import ActiveLastBreadcrumb from '../Responsive/res-bread-crumbs';
import { Button, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  breadcrumbPaper: {
    padding: theme.spacing(1),
    width: 100 + '%',
    height: 100 + '%',
  },
  readMoreButton: {
    backgroundColor: '#db3838',
    color: '#ffffff',
    cursor: 'pointer',
    zIndex: 100,
    '&:hover': {
      backgroundColor: '#db3830',
      transform: 'scale(1.1)',
    },
    '&:focus': {
      backgroundColor: '#db3830',
      transform: 'scale(1.1)',
    }
  },
}));

const Body = () => {
  const classes = useStyles();
  let descrip = ['clothes', 'footwear', 'hand bags'];
  let img = [women1, women2, women3];
  return (
    <div className="body">
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.breadcrumbPaper} elevation={0} square >
            <ActiveLastBreadcrumb />
          </Paper>
        </Grid>
        <Grid container item xs={12} spacing={2}>
          {descrip.map(( item, i) => {
            return (
              <Grid item xs={4} sm={4} key={item + i}>
                <Paper className={classes.breadcrumbPaper}>
                  <div className="photos_cart">
                    <span className="descrip">
                      <div className="descrip-text">
                        <p className="tipicalL">{descrip[i]}</p>
                        <NavLink to="" className="descr-btn tipicalL">
                          Click here
                        </NavLink>
                      </div>
                    </span>
                    <img src={img[i]} alt="women" />
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Grid item container xs={12}>
          <div className="men">
            <Grid item xs={12} sm={6}>
              <div className="for-men">
                <div className="men-img">
                  <span className="descrip">
                    <div className="descrip-text">
                    <p className="tipicalL">for men</p>
                    <Button className={classes.readMoreButton} variant="contained">
                      <NavLink to="" style={{color: '#fff'}}>
                        More
                      </NavLink>
                    </Button>
                    </div>
                  </span>
                  <img src={formen} alt="women" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <MenSlider slides={menSlides} />
            </Grid>
          </div>
        </Grid>
        <Grid item container xs={12}>
          <div className="women">
            <WomenSlider slides={womenSlides} />
          </div>
        </Grid>
        <Grid item container xs={12}>
          <OverSlider carts={overCarts} />
        </Grid>
        <Grid item container xs={12}>
          <FromBlog />
        </Grid>
      </Grid>
    </div>
  );
}

export default Body;
