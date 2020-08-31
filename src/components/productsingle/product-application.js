import React from 'react';
import Img from 'gatsby-image';
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}><span className="text">Next</span><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100"><path d="m12.5 45.832h64.582v8.332h-64.582z"/><path d="m59.168 77.918l-5.8359-5.8359 22.086-22.082-22.086-22.082 5.8359-5.8359 27.914 27.918z"/></svg></button>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}><span className="text">Prev</span><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100"><path d="m87.5 45.832h-58.75l17.918-17.914-5.8359-5.8359-27.914 27.918 27.914 27.918 5.8359-5.8359-17.918-17.914h58.75z"/></svg></button>
  );
}

const ProductApplication = ({ ...props }) =>  {
  const content = props.data;
  const customSlider = React.createRef();

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const slideToGo = (index) => {
    customSlider.current.slickGoTo(parseInt(index));
  }

  return (
    <div className="application__wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="application__text">
              <div className="application__textbox" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5" dangerouslySetInnerHTML={{ __html: content.application_content }} />
              <div className="application__iconbox">
                <div className="app__list">
                  {content.application_gallery_image.map((list, index) => (
                    <div className="app_list" key={index} role="button" tabIndex={0} onKeyDown={() => slideToGo(index)} onClick={() => slideToGo(index)}>
                      {(() => {
                        if(list.image_application_tag === "exterior") { 
                          return (
                            <div className="icon_wrap" dangerouslySetInnerHTML={{ __html: content.exterior_svg }} />
                          ) 
                        } else if(list.image_application_tag === "interior") {
                          return (
                            <div className="icon_wrap" dangerouslySetInnerHTML={{ __html: content.interior_svg }} />
                          ) 
                        } else if(list.image_application_tag === "structural") {
                          return (
                            <div className="icon_wrap" dangerouslySetInnerHTML={{ __html: content.structural_svg }} />
                          )
                        }
                      })()}
                      <span className="text">{list.image_application_tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-7">
            <Slider className="gallery__wrapper" ref={customSlider} {...sliderSettings}>
              {content.application_gallery_image.map((slide, index) => (
                <div className="slide" key={index}>
                  <div className="gallery__image">
                    {slide.gallery_image && <Img fluid={slide.gallery_image.localFile.childImageSharp.fluid} alt="Alternative Text" />}
                  </div>
                  <span className="gallery__text">{ slide.image_title }</span>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductApplication;