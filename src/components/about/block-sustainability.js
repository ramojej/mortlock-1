import React, { useState } from 'react';
import Img from 'gatsby-image';

const AboutArchitects = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;
  const [readMore, setReadMore] = useState(false);

  const readMoreLink = (e) => {
    setReadMore(true);
  }

  return (
    <div className="sustainability__block" id={id}>
      <div className="aside__text" dangerouslySetInnerHTML={{ __html: content.sustainability_aside_heading }} />
      <div className="container container__small">
        <h2 className="main_heading" dangerouslySetInnerHTML={{ __html: content.section_main_heading }} />
        <div className="sustainability__image">
          <Img fluid={content.sustainability_main_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
        </div>
        <div className="sustainability__contentbox">
          <div className="content" dangerouslySetInnerHTML={{ __html: content.sustainability_main_content }} />
          <div className={ readMore ? 'text-hidden visible' : 'text-hidden' } dangerouslySetInnerHTML={{ __html: content.sustainability_read_more_content }} />
          { !readMore ? <span role="button" tabIndex={0} className={(content.sustainability_button_style) ? 'button ' + content.sustainability_button_style : 'button'} onKeyDown={ () => readMoreLink() } onClick={ () => readMoreLink() }>{content.sustainability_button_text}</span> : null }
        </div>
      </div>
    </div>
  )
}

export default AboutArchitects;