import React from 'react';
import Img from 'gatsby-image';

import ProductPricingForm from "../forms/product-pricing-form-4360";

const PricingBlock = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;

  return (
    <div className="pricing__block" id={ id ? id : null }>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="pricing__text" >
              <h2 dangerouslySetInnerHTML={{ __html: content.pricing_title }} />
              <p dangerouslySetInnerHTML={{ __html: content.pricing_description }} />
              <ProductPricingForm data={content} />
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-5">
            <div className="price__image" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5">
              {content.pricing_image ? <Img fluid={content.pricing_image.localFile.childImageSharp.fluid} alt="Alternative Text" /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingBlock;