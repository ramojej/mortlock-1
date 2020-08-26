import React from 'react';
import Img from 'gatsby-image';

const ProductOverview = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;

  return (
    <div className="product__overview" id={id}>
    { content.product_overview_aside_title ? <div className="aside__text" dangerouslySetInnerHTML={{ __html: content.product_overview_aside_title }} /> : null }
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h2 className="main-heading" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5" dangerouslySetInnerHTML={{ __html: content.product_title }} />
            <div className="aside__image" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="10">
              <Img fluid={content.product_aside_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-7" dangerouslySetInnerHTML={{ __html: content.product_description }}  />
        </div>
      </div>
    </div>
  )
}

export default ProductOverview;