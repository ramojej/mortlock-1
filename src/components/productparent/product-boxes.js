import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const ProductBoxes = ({ ...props }) =>  {
  const content = props.data;

  return (
    <div className="product__wrapper">
      <div className="container">
        <div className="row center-xs">
          {content.map((product, index) => (
            <div className="col-sm-4" key={index}>
              <div className="product__box">
                <h2 dangerouslySetInnerHTML={{ __html: product.product_title }} />
                <div className="product__box-image">
                  <Link to={ product.button_link }>
                    {product.product_image ? <Img fluid={product.product_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" /> : null }
                    <div className="image__text">
                      <div dangerouslySetInnerHTML={{ __html: product.popup_text }} />
                    </div>
                  </Link>
                </div>
                <div className="product__desc">
                  {product.product_description ? <div dangerouslySetInnerHTML={{ __html: product.product_description }} /> : null }
                  <Link to={ product.button_link } className="button-learn">{ product.button_text } <span className="btnArrow"><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"/></svg></span></Link>
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