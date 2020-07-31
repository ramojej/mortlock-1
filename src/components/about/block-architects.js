import React from 'react';
import Img from 'gatsby-image';

import Button from '@src/components/global/button';

const AboutArchitects = ({ ...props }) =>  {
  const content = props.data;

  return (
    <div className="architect__block">
      <div className="aside__text" dangerouslySetInnerHTML={{ __html: content.architect_aside_heading }} />
      <div className="container">
        <div className="architect__image">
          <Img fluid={content.architect_main_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
        </div>
        <div className="architect__contentbox">
          <div dangerouslySetInnerHTML={{ __html: content.architect_main_content }} />
          <Button
                link={content.architech_button_link} 
                text={content.architect_button_text} 
                style={content.architect_button_style} 
          />
        </div>
      </div>
    </div>
  )
}

export default AboutArchitects;