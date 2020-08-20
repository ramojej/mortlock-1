import React from 'react';
import Img from 'gatsby-image';

import PricingForm from "../forms/pricing-form-3502";

const PricingBlock = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;

  return (
    <div className="pricing__block" id={ id ? id : null }>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="pricing__text">
              <h2 dangerouslySetInnerHTML={{ __html: content.pricing_title }} />
              <div dangerouslySetInnerHTML={{ __html: content.pricing_description }} />
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
              <PricingForm />
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-5">
            <div className="price__image">
              {content.pricing_image ? <Img fluid={content.pricing_image.localFile.childImageSharp.fluid} alt="Alternative Text" /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingBlock;