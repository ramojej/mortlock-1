import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import Slider from "react-slick";

const GlobalProjectSlider = ({ ...props }) =>  {
  const content = props.contentData;

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="project__block">
      <div className="container">
        <h2>latest projects</h2>
        <Slider className="project__slider" {...sliderSettings}>
          {content.map((project, index) => (
            <div className="slide" key={project.node.wordpress_id}>
              <div className="project__box">
                <div className="project_image">
                <Img fluid={project.node.featured_media.localFile.childImageSharp.fluid} alt="Alternative Text" />
                </div>
                <div className="project_text">
                  <span className="project_title">{project.node.title}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="button_wrapper">
          <Link to="/projects" className="button-learn white">View all projects <span className="btnArrow"><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"/></svg></span></Link>
        </div>
      </div>
    </div>
  )
}

export default GlobalProjectSlider;