import React from 'react';
import Img from 'gatsby-image';
import Slider from "react-slick";

import Button from './button';

const Banner = ({ ...props }) =>  {
  const bannerContent = props.data;
  var bannerType = '';
  
  if(props.type === "homepage") {
    bannerType = 'homepage';
  }
  
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  if(bannerContent != undefined && bannerType === "homepage") {
    return (
      <div className="banner">
        <Slider className="banner__slider" {...sliderSettings}>
        {bannerContent.map((slide, index) => (
          <div className="slide" key={index}>
            <div className="bg__image">
              <Img fluid={slide.banner_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
            </div>
            <div className="container container__big">
              <div className="banner__text">
                <div className="bottomtext__top">
                  <h1 dangerouslySetInnerHTML={{ __html: slide.banner_heading }} />
                </div>
                <div className="bottomtext__bottom">
                  <span className="banner__smalltext" dangerouslySetInnerHTML={{ __html: slide.banner_sub_heading }} />
                </div>
              </div>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    )
  } else if(bannerContent !== undefined) {
      return (
        <div className="inner__banner">
          <div className="bg__image has-overlay">
            <Img fluid={bannerContent.banner_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
          </div>
          <div className="container">
            <div className="inner__bannerbox">
              <div className="box">
                <h1 dangerouslySetInnerHTML={{ __html: bannerContent.banner_heading }} />
                <span className="inner__bannertext" dangerouslySetInnerHTML={{ __html: bannerContent.banner_description }} />
                <div className="inner__bannerbuttons">
                  {bannerContent.banner_buttons.map((button, index) => (
                    (index === 1) ? 
                    <Button type="external" link={button.button_link} text={button.button_text} style={button.button_style} key={index} /> : 
                    <Button link={button.button_link} text={button.button_text} style={button.button_style} key={index} /> 
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  } else {
    return null;
  }
}

export default Banner;