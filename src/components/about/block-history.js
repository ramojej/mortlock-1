import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const AboutHistory = ({ ...props }) =>  {
  const content = props.data;
  console.log(content);
  return (
    <div className="history__text">
      <div className="aside__text" dangerouslySetInnerHTML={{ __html: content.history_aside_text }} />
      <div className="container container__small">
        <h2 dangerouslySetInnerHTML={{ __html: content.history_title }} />
        <div className="row">
          <div className="col-sm-5">
            <span className="historyYear">{content.history_year}</span>
          </div>
          <div className="col-sm-7">
            <div dangerouslySetInnerHTML={{ __html: content.history_info }} />
          </div>
        </div>
        <div className="history__image">
          <Img fluid={content.history_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
        </div>
        <div className="history__content">
          <h2 dangerouslySetInnerHTML={{ __html: content.history_second_heading }} />
          <div className="history__contentbox">
            {content.history_text_block.map((textbox, index) => (
              <div className="row" key={index}>
                <div className="col-sm-5">
                  <Img fluid={textbox.history_sub_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
                </div>
                <div className="col-sm-7">
                  <div className="textbox" dangerouslySetInnerHTML={{ __html: textbox.history_text_box }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHistory;