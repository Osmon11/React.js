import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './body.css';
import Rating from '@material-ui/lab/Rating';
import cart1 from '../img/Layer_418.png';
import cart2 from '../img/Layer_417.png';
import forwomen from '../img/Layer_416.png';
import toLeft from '../img/_Left.png';
import toRight from '../img/_Right.png';

const WomenSlider = (props) => {
  let prop = props.slides;
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (prop.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (prop.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <Fragment>
      <div className="slider-women">
        <div className="men-header tipical">women</div>
        <div className="swipe-women">
          {prop.map((slide, index) => {
            return (
              <div
                className="swipe-cart"
                key={slide.name + index}
                style={{ transform: `translateX(${x}%)` }}
              >
                <div className="panel">
                  <div className="panel-cart">
                    <img src={slide.cart1} alt="Printed Chiffon Dress" />
                  </div>
                  <div className="panel-cart">
                    <img src={slide.cart2} alt="Printed Chiffon Dress" />
                  </div>
                </div>
                <div className="swipe-text">
                  <div className="panel-cost">
                    <div className="panel-cost-text tipical">
                      Printed Chiffon Dress
                    </div>
                    <div className="cost-text">
                      <div className="cost-text-cost">
                        <span className="tipical">£ 61.19</span>
                        <Rating
                          name="half-rating"
                          defaultValue={2.5}
                          precision={0.5}
                        />
                      </div>
                      <div className="cost-btn tipicalL">Add to cart</div>
                    </div>
                  </div>
                  <div className="panel-cost">
                    <div className="panel-cost-text">Printed Chiffon Dress</div>
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="for-men">
        <div className="buttons">
          <div className="btn-prev" data-direction="left" onClick={goRight}>
            <img src={toLeft} alt="toleft" />
          </div>
          <div className="btn-next" data-direction="right" onClick={goLeft}>
            <img src={toRight} alt="toright" />
          </div>
        </div>
        <div className="women-img">
          <span className="descrip">
						<span className="descrip-text">
            <p className="tipicalL">for women</p>
            <NavLink to="" className="descr-btn tipicalL">
              More
            </NavLink>
						</span>
          </span>
          <img src={forwomen} alt="women" />
        </div>
      </div>
    </Fragment>
  );
};

export default WomenSlider;
export let womenSlides = [
  {
    name: 'fWslide',
    cart1: cart1,
    cart2: cart2,
  },
  {
    name: 'sWslide',
    cart1: cart1,
    cart2: cart2,
  },
];
