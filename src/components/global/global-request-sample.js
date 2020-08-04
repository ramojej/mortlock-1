import React from 'react';
import Img from 'gatsby-image';

const RequestSample = ({ ...props }) =>  {
  const content = props.data;

  console.log(content);

  return (
    <div className="request__block">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="request__text">
              <h2 dangerouslySetInnerHTML={{ __html: content.request_block_heading }} />
              <div dangerouslySetInnerHTML={{ __html: content.request_sample_description }} />
              <div className="request__image">
                <Img fluid={content.request_sample_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
              </div>
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-7">
            form
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestSample;