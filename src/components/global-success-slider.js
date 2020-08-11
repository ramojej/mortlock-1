import React from 'react';
import Slider from "react-slick";

const GlobalSuccessStory = ({ ...props }) =>  {
  const content = props.contentData;
  const customSlider = React.createRef();

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const gotoNext = () => {
    customSlider.current.slickNext()
  }

  const gotoPrev = () => {
    customSlider.current.slickPrev()
  }

  return (
    <div className="success__block">
      <Slider className="success__slider" ref={customSlider} {...sliderSettings}>
        {content.successStories.map((success, index) => (
          <div className="slide" key={index}>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div className="videoWrapper">
                    Video
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="successText">
                    <h2>{content.successTitle}</h2>
                    <blockquote className="quote">
                      <q>{success.success_client_quote}</q>
                      <cite>- {success.success_client_name}, {success.success_client_position__title}</cite>
                    </blockquote>
                    <div className="control_wrapper">
                      <button className="slick-arrow slick-prev" onClick={()=>gotoPrev()}><span className="text">Prev</span><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100"><path d="m87.5 45.832h-58.75l17.918-17.914-5.8359-5.8359-27.914 27.918 27.914 27.918 5.8359-5.8359-17.918-17.914h58.75z"/></svg></button>
                      <button className="slick-arrow slick-next" onClick={()=>gotoNext()}><span className="text">Next</span><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100"><path d="m12.5 45.832h64.582v8.332h-64.582z"/><path d="m59.168 77.918l-5.8359-5.8359 22.086-22.082-22.086-22.082 5.8359-5.8359 27.914 27.918z"/></svg></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default GlobalSuccessStory;


{/* <div className="embedWrapper" dangerouslySetInnerHTML={{ __html: success.video_link }} /> */}