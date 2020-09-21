import React from 'react';
import { Link } from "gatsby";
import Slider from "react-slick";

const GlobalTestimonialSlider = ({ ...props }) =>  {
  const content = props.contentData;
  const customSlider = React.createRef();

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        }
      }
    ]
  };

  const gotoNext = () => {
    customSlider.current.slickNext()
  }

  const gotoPrev = () => {
    customSlider.current.slickPrev()
  }

  return (
    <div className="testimonial__block" id="testimonial">
      <div className="container" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5">
        {(props.button === "true") && <div className="aside__text">Testimonials</div> }
        <header className="general__heading">
          <h2>{content.testimonialHeading}</h2>
          <div className="control_wrapper">
            <button className="slick-arrow slick-prev" onClick={()=>gotoPrev()}><span className="text">Prev</span><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100"><path d="m87.5 45.832h-58.75l17.918-17.914-5.8359-5.8359-27.914 27.918 27.914 27.918 5.8359-5.8359-17.918-17.914h58.75z"/></svg></button>
            <button className="slick-arrow slick-next" onClick={()=>gotoNext()}><span className="text">Next</span><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100"><path d="m12.5 45.832h64.582v8.332h-64.582z"/><path d="m59.168 77.918l-5.8359-5.8359 22.086-22.082-22.086-22.082 5.8359-5.8359 27.914 27.918z"/></svg></button>
          </div>
        </header>
        <Slider className="testimonial__slider" ref={customSlider} {...sliderSettings}>
          {content.allTestimonials.map((testimonial, index) => (
            <div className="slide" key={index}>
              <blockquote className="quote">
                <q>{testimonial.client_quote}</q>
                <cite>- {testimonial.client_name} {testimonial.client_titleposition ? `, ${testimonial.client_titleposition}` : null }</cite>
              </blockquote>
            </div>
          ))}
        </Slider>
        {(props.button === "true") && <div className="button_wrapper"><Link to='/request-a-quote/' className="button-learn">Request a quote <span className="btnArrow"><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"/></svg></span></Link></div> }
      </div>
    </div>
  )
}

export default GlobalTestimonialSlider;