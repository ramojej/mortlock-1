import React from 'react';
import Img from 'gatsby-image';


const AboutMission = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;
  
  return (
    <div className="about__contentblock" id={id}>
      <div className="aside__text" dangerouslySetInnerHTML={{ __html: content.mission_aside_text }} />
      <div className="container">
        <div className="mission__block">
          <div className="row">
            <div className="col-sm-5">
              <div className="mission__textbox" dangerouslySetInnerHTML={{ __html: content.our_mission_text }} />
            </div>
            <div className="col-sm-6">
              <div className="mission__image">
                <Img fluid={content.our_mission_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
              </div>
            </div>
          </div>
        </div>
        <div className="vision__block">
          <div className="row">
            <div className="col-sm-7">
              <div className="vision__image">
                <Img fluid={content.our_vision_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
              </div>
            </div>
            <div className="col-sm-5">
              <div className="vision__text" dangerouslySetInnerHTML={{ __html: content.our_vision_content }} />
            </div>
          </div>
        </div>
      </div>
      <div className="container container__small">
        <div className="values__block">
            <h2>{content.our_value_heading}</h2>
            <div className="row">
              {content.our_value_boxes.map((box, index) => (
                <div className="col-sm-3" key={index}>
                  <div className="article__box">
                    <div className="icon_box">
                      <div dangerouslySetInnerHTML={{ __html: box.icon_svg_code }} />
                    </div>
                    <h4>{box.article_title}</h4>
                    <p>{box.article_content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutMission;