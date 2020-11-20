import React, { Component } from 'react';
import './carousel.css';
import classNames from 'classnames';
import { connect } from 'react-redux';

class Carousel extends Component {
  state = {};
  slider() {
    this.setState({ IMAGE_PARTS: 4 });
    this.setState({ changeTO: null });
    this.setState({ AUTOCHANGE_TIME: 10000 });
    this.setState({ activeSlide: -1, prevSlide: -1, sliderReady: false });
  }

  componentWillUnmount() {
    window.clearTimeout(this.state.changeTO);
  }

  componentDidMount() {
    let _this2 = this;
    this.slider();
    this.runAutochangeTO();
    setTimeout(function () {
      _this2.setState({ activeSlide: 0, sliderReady: true });
    }, 10000);
  }

  runAutochangeTO() {
    let _this3 = this;
    this.setState({
      changeTO: setTimeout(function () {
        _this3.changeSlides(1);
        _this3.runAutochangeTO();
      }, this.state.AUTOCHANGE_TIME),
    });
  }

  changeSlides(change) {
    window.clearTimeout(this.state.changeTO);
    let length = this.props.slides.length;
    let prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide: activeSlide, prevSlide: prevSlide });
  }

  render() {
    let _this4 = this;
    let _state = this.state;
    let activeSlide = _state.activeSlide;
    let prevSlide = _state.prevSlide;
    let sliderReady = _state.sliderReady;

    return (
      <div className={classNames({ 's--ready': sliderReady }, 'slider')}>
        <div className="slider__slides">
          {this.props.slides.map(function (slide, index) {
            return (
              <div
                className={classNames('slider__slide', {
                  's--active': activeSlide === index,
                  's--prev': prevSlide === index,
                })}
                key={slide.city}
              >
                <div className="slider__slide-content">
                  <h3 className="slider__slide-subheading">
                    {' '}
                    {slide.country || slide.city}
                  </h3>
                  <h2 className="slider__slide-heading">
                    {slide.city.split('').map(function (l, i) {
                      return <span key={l + i}> {l} </span>;
                    })}
                  </h2>
                  <p className="slider__slide-readmore">Men & women</p>
                </div>
                <div className="slider__slide-parts">
                  {[]
                    .concat(Array(_state.IMAGE_PARTS).fill())
                    .map(function (x, i) {
                      return (
                        <div className="slider__slide-part" key={i}>
                          <div
                            className="slider__slide-part-inner"
                            style={{
                              backgroundImage: 'url(' + slide.img + ')',
                            }}
                          ></div>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
          <div
            className="slider__control"
            onClick={function onClick() {
              return _this4.changeSlides(-1);
            }}
          />
          <div
            className="slider__control slider__control--right"
            onClick={function onClick() {
              return _this4.changeSlides(1);
            }}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    slides: state.CarouselReducer.slides,
  };
};

export default connect(mapStateToProps)(Carousel);
