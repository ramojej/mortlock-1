import React from 'react';
import Img from 'gatsby-image';

const ProductOverview = ({ ...props }) =>  {
  const content = props.data;
  return (
    <div className="product__overview">
    { content.product_overview_aside_title ? <div className="aside__text" dangerouslySetInnerHTML={{ __html: content.product_overview_aside_title }} /> : null }
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h2 dangerouslySetInnerHTML={{ __html: content.product_title }} />
            <Img fluid={content.product_aside_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
          </div>
          <div className="col-sm-offset-1 col-sm-7" dangerouslySetInnerHTML={{ __html: content.product_description }}  />
        </div>
      </div>
    </div>
  )
}

export default ProductOverview;