import React from 'react';
import Img from 'gatsby-image';
import Slider from "react-slick";

const ProductApplication = ({ ...props }) =>  {
  const content = props.data;

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="application__wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="application__text">
              <div className="application__textbox" dangerouslySetInnerHTML={{ __html: content.application_content }} />
              <div className="application__iconbox">
                <ul className="list">
                  {content.application_gallery_image.map((list, index) => (
                    <li key={index}>
                      <div className="icon">
                        {(() => {
                          if(list.image_application_tag === "exterior") { 
                            return (
                              <div dangerouslySetInnerHTML={{ __html: content.exterior_svg }} />
                            ) 
                          } else if(list.image_application_tag === "interior") {
                            return (
                              <div dangerouslySetInnerHTML={{ __html: content.interior_svg }} />
                            ) 
                          } else if(list.image_application_tag === "structural") {
                            return (
                              <div dangerouslySetInnerHTML={{ __html: content.structural_svg }} />
                            )
                          }
                        })()}
                      </div>
                      <span className="text">{list.image_application_tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-7">
            <Slider className="gallery__wrapper" {...sliderSettings}>
              {content.application_gallery_image.map((slide, index) => (
                <div className="slide" key={index}>
                  <div className="gallery__image">
                    <Img fluid={slide.gallery_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
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