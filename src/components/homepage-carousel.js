import React, { Component } from 'react'
import Slider from 'react-slick'
import { FormattedMessage } from "gatsby-plugin-intl"

import testimonial1 from '../images/testimonial-1.png'
import testimonial2 from '../images/testimonial-2.png'
import testimonial3 from '../images/testimonial-3.png'
import testimonial4 from '../images/testimonial-4.png'
import testimonial5 from '../images/testimonial-5.png'
import testimonial6 from '../images/testimonial-6.png'
import testimonial7 from '../images/testimonial-7.png'

class HomepageSlider extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      render: false
    };
  }

  componentDidMount() {
    this.setState({
      render: true
    });
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {

    const { render } = this.state;
    const settings = {
      centerMode: true,
      centerPadding: "0px",
      infinite: true,
      slidesToShow: 5,
      arrows: false,
      responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 750,
        settings: {
          slidesToShow: 1
        }
      }]
    };

    if (render) {
      return (
        <div className="testimonials__slider">
          <div className="slider__button slider__button--prev" onClick={this.previous}></div>
          <Slider {...settings} className="js-testimonials-slider" ref={c => (this.slider = c)}>
            <div className="testimonial">
              <div className="testimonial__content">
                <img src={testimonial1} alt="Testimonial 1" />
                <h3 className="testimonial__name">Fang H. <span className="flag flag-ch"></span></h3>
                <p className="testimonial__quote"><FormattedMessage id="testimonial1" /></p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__content">
                <img src={testimonial2} alt="Testimonial 2" />
                <h3 className="testimonial__name">Wang W. <span className="flag flag-ch"></span></h3>
                <p className="testimonial__quote"><FormattedMessage id="testimonial2" /></p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__content">
                <img src={testimonial3} alt="Testimonial 3" />
                <h3 className="testimonial__name">Fernanda F. <span className="flag flag-br"></span></h3>
                <p className="testimonial__quote"><FormattedMessage id="testimonial3" /></p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__content">
                <img src={testimonial4} alt="Testimonial 4" />
                <h3 className="testimonial__name">Fatima A. <span className="flag flag-uae"></span></h3>
                <p className="testimonial__quote"><FormattedMessage id="testimonial4" /></p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__content">
                <img src={testimonial5} alt="Testimonial 5" />
                <h3 className="testimonial__name">Olivia S. <span className="flag flag-us"></span></h3>
                <p className="testimonial__quote"><FormattedMessage id="testimonial5" /></p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__content">
                <img src={testimonial6} alt="Testimonial 6" />
                <h3 className="testimonial__name">Grace Y. <span className="flag flag-can"></span></h3>
                <p className="testimonial__quote"><FormattedMessage id="testimonial6" /></p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__content">
                <img src={testimonial7} alt="Testimonial 7" />
                <h3 className="testimonial__name">Yulia B. <span className="flag flag-rus"></span></h3>
                <p className="testimonial__quote"><FormattedMessage id="testimonial7" /></p>
              </div>
            </div>
          </Slider>
          <div className="slider__button slider__button--next" onClick={this.next}></div>
        </div>
      );
    }
    return null;
  }
}

export default HomepageSlider