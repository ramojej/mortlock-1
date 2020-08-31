import React from 'react';
import Img from 'gatsby-image';
import { Link } from "gatsby";

const ProductInstallation = ({ ...props }) =>  {
  const content = props.data;
  return (
    <div className="installation__block">
      <div className="row">
        <div className="col-sm-4">
          <div className="installation__text">
            <h2 dangerouslySetInnerHTML={{ __html: content.installation_title }} />
            <div className="installation_content" dangerouslySetInnerHTML={{ __html: content.installation_description }} />
            <a href={ content.installation_button_link.link } target="_blank" rel="noreferrer" className="button-learn white">{ content.installation_button_text } <span className="btnArrow"><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"/></svg></span></a>
          </div>
        </div>
        <div className="col-sm-offset-1 col-sm-7">
          <div className="installation__image" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5">
            <Img fluid={content.installation_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInstallation;