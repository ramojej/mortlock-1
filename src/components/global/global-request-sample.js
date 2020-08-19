import React from 'react';
import Img from 'gatsby-image';

import SampleRequest from '../forms/sample-request-form-3509';

const RequestSample = ({ ...props }) =>  {
  const content = props.data;

  return (
    <div className="request__block">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="request__text">
              {content.request_block_heading ? <h2 dangerouslySetInnerHTML={{ __html: content.request_block_heading }} /> : null }
              {content.request_sample_description ? <div className="request__content" dangerouslySetInnerHTML={{ __html: content.request_sample_description }} /> : null }
              { content.request_sample_image ? 
                <div className="request__image">
                  <Img fluid={content.request_sample_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
                </div>
                : null }
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-7">
            <SampleRequest />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestSample;