import React, { Component } from 'react';
import './body.css';
import toright from '../img/toright-mini.png';
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

class Body extends Component {
  render() {
    let descrip = ['clothes', 'footwear', 'hand bags'];
    let img = [women1, women2, women3];
    return (
      <div className="body">
        <div className="body_nav tipical">
          <div>Go qickly to</div>
          <span className="toright">
            <img src={toright} alt="toright icon" />
          </span>
          <span>Women</span>:<span>Men</span>:<span>Accessories</span>:
          <span>Fashion</span>:<span>Features</span>:<span>Clothings</span>:
          <span>Bags & Wallets</span>:<span>Fragrances</span>:
          <span>Caps & Hats</span>
        </div>
        <ActiveLastBreadcrumb />
        <Grid container spacing={2}>
          {descrip.map(( item, i) => {
            return (
              <Grid item xs={4} key={item + i}>
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
              </Grid>
            );
          })}
        </Grid>
        <div className="men">
          <div className="for-men">
            <div className="men-header tipical">men</div>
            <div className="men-img">
              <span className="descrip">
								<div className="descrip-text">
                <p className="tipicalL">for men</p>
                <NavLink to="" className="descr-btn tipicalL">
                  More
                </NavLink>
								</div>
              </span>
              <img src={formen} alt="women" />
            </div>
          </div>
          <MenSlider slides={menSlides} />
        </div>
        <div className="women">
          <WomenSlider slides={womenSlides} />
        </div>
        <OverSlider carts={overCarts} />
        <FromBlog />
      </div>
    );
  }
}

export default Body;
