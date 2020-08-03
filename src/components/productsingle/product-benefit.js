import React from 'react';
import Img from 'gatsby-image';

import Button from '@src/components/global/button';

const ProductBenefit = ({ ...props }) =>  {
  const content = props.data;
  return (
    <div className="product__benefit">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="benefit__image">
              <Img fluid={content.product_benefit_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-7">
            <div className="benefit__text">
              <h2 dangerouslySetInnerHTML={{ __html: content.product_benefit_title }} />
              <div className="row">
                {content.product_benefit_columns.map((benefit, index) => (
                  <div className="col-sm-6" key={index}>
                  {(benefit.benefit_or_button === 'button') ?
                    <div className="btn__wrap">
                      <Button
                        link={benefit.button_link} 
                        text={benefit.button_text} 
                      />
                    </div> :
                    <div className="icon__wrapper">
                      <div className="benefit_icon" dangerouslySetInnerHTML={{ __html: benefit.icon_svg }} />
                      <div className="benefit_text">
                        <h3>{ benefit.benefit_title }</h3>
                        <p>{ benefit.benefit_description }</p>
                      </div>
                    </div>
                  }
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductBenefit;