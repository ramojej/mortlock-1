import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import Button from '@src/components/global/button';

const AboutArchitects = ({ ...props }) =>  {
  const content = props.data;

  return (
    <div className="sustainability__block">
      <div className="aside__text" dangerouslySetInnerHTML={{ __html: content.sustainability_aside_heading }} />
      <div className="container container__small">
        <h2 className="main_heading" dangerouslySetInnerHTML={{ __html: content.section_main_heading }} />
        <div className="sustainability__image">
          <Img fluid={content.sustainability_main_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
        </div>
        <div className="sustainability__contentbox">
          <div dangerouslySetInnerHTML={{ __html: content.sustainability_main_content }} />
          <Button
                link={content.architech_button_link} 
                text={content.sustainability_button_text} 
                style={content.sustainability_button_style} 
          />
        </div>
      </div>
    </div>
  )
}

export default AboutArchitects;