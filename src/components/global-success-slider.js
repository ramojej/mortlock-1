import React from 'react';
import Slider from "react-slick";

const GlobalSuccessStory = ({ ...props }) =>  {
  const content = props.contentData;

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  console.log(content);

  return (
    <div className="success__block">
      <div className="container">
        <Slider className="success__slider" {...sliderSettings}>
          {content.map((success, index) => (
            <div className="slide" key={index}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="videoWrapper">
                    <div dangerouslySetInnerHTML={{ __html: success.video_link }} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="successText">
                    <blockquote className="quote">
                      <q>{success.success_client_quote}</q>
                      <cite>{success.success_client_name}, {success.success_client_position__title}</cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default GlobalSuccessStory;