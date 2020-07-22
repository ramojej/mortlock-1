import React from 'react';
import Img from 'gatsby-image';
import Slider from "react-slick";

const Banner = ({ ...props }) =>  {
  const bannerContent = props.bannerData;
  
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  if(bannerContent != undefined && bannerContent.length >= 1) {
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
  } else {
    return null;
  }
}

export default Banner;