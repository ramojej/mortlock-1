import React from 'react';
import Img from 'gatsby-image';

import Button from '@src/components/global/button';

const AboutArchitects = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;

  return (
    <div className="architect__block" id={id}>
      <div className="aside__text" dangerouslySetInnerHTML={{ __html: content.architect_aside_heading }} />
      <div className="container">
        <div className="architect__image" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5">
          <Img fluid={content.architect_main_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" />
        </div>
        <div className="architect__contentbox" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5">
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