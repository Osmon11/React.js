import React from 'react';
import './body.css';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';
import cart1 from '../img/Layer_423.png';
import cart2 from '../img/Layer_425.png';
import cart3 from '../img/Layer_424.png';
import cart4 from '../img/Layer_426.png';

const OverSlider = props => {
  let arrG = ['id1', 'id2', 'id3'];
  let carts = props.carts;

  return (
    <div className="slider-over">
      <div className="over-header">
        <span>New arrivals</span>
        <span>Best Sellers</span>
        <span>Popular</span>
      </div>
      <div className="slide--o">
        <Carousel autoPlay={false} indicators={true} animation='slide'>
          {arrG.map(function (x) {
            return (
              <Grid key={x} container spacing={2}>
                {carts.map((slide, index) => {
                  return (
                    <Grid item xs={3} key={index}>
                      <div className="panel-cart">
                        <img src={slide} alt="Printed Chiffon Dress" />
                      </div>
                      <div>
                        <div className="panel-cost-text tipical">
                          Printed Chiffon Dress
                        </div>
                        <div className="cost-text">
                          <div className="cost-text-cost">
                            <span className="tipical">£ 61.19</span>
                            <Rating
                              name="half-rating"
                              placeholder="Моя оценка"
                              defaultValue={2.5}
                              precision={0.5}
                            />
                          </div>
                          <div className="cost-btn tipicalL">Add to cart</div>
                        </div>
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default OverSlider;
export let overCarts = [cart1, cart2, cart3, cart4];
