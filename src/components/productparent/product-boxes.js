import React from 'react';
import Img from 'gatsby-image';

import Button from '@src/components/global/button';

const ProductBoxes = ({ ...props }) =>  {
  const content = props.data;

  return (
    <div className="product__wrapper">
      <div className="container">
        <div className="row">
          {content.map((product, index) => (
            <div className="col-sm-4" key={index}>
              <div className="product__box">
                <h2 dangerouslySetInnerHTML={{ __html: product.product_title }} />
                <div className="product__box-image">
                  {product.product_image ? <Img fluid={product.product_image.localFile.childImageSharp.fluid} alt="Alternative Text" /> : null }
                  <div className="image__text">
                    <div dangerouslySetInnerHTML={{ __html: product.popup_text }} />
                  </div>
                </div>
                <div className="product__desc">
                  <div dangerouslySetInnerHTML={{ __html: product.product_description }} />
                  <Button
                    link={product.button_link} 
                    text={product.button_text}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductBoxes;