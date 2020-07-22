import React from 'react';
import Slider from "react-slick";

const GlobalTestimonialSlider = ({ ...props }) =>  {
  const content = props.contentData;

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="testimonial__block">
      <div className="container">
        <header className="general__heading">
          <h2>testimonials</h2>
        </header>
        <Slider className="testimonial__slider" {...sliderSettings}>
          {content.map((testimonial, index) => (
            <div className="slide" key={index}>
              <blockquote className="quote">
                <q>{testimonial.client_quote}</q>
                <cite>- {testimonial.client_name}, {testimonial.client_titleposition}</cite>
              </blockquote>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default GlobalTestimonialSlider;