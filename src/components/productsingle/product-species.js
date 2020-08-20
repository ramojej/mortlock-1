import React from 'react';
import Img from 'gatsby-image';

const ProductSpecies = ({ ...props }) =>  {
  const content = props.data;
  return (
    <div className="product-species">
      <div className="general-heading">
        <h2>timber species</h2>
        <span className="info">Select timber species below to see their corresponding finishes</span>
      </div>
      <div className="species-boxes">
        <div className="row">
          {content ? content.map((timber, index) => (
            <div className="col-xs-6 col-sm-3" key={index}>
              <div className="species-box">
                <div className="image">
                  <Img fluid={timber.timber_small_thumbnail.localFile.childImageSharp.fluid} alt="Alternative Text" />
                  <span className="button whiteoutline">View finishes</span>
                </div>
                <span className="title">{timber.timber_title}</span>
              </div>
            </div>
          )) : null }
          {content ? content.map((timber, index) => (
            <div className="col-xs-6 col-sm-3" key={index}>
              <div className="species-box">
                <div className="image">
                  <Img fluid={timber.timber_small_thumbnail.localFile.childImageSharp.fluid} alt="Alternative Text" />
                  <span className="button whiteoutline">View finishes</span>
                </div>
                <span className="title">{timber.timber_title}</span>
              </div>
            </div>
          )) : null }
          {content ? content.map((timber, index) => (
            <div className="col-xs-6 col-sm-3" key={index}>
              <div className="species-box">
                <div className="image">
                  <Img fluid={timber.timber_small_thumbnail.localFile.childImageSharp.fluid} alt="Alternative Text" />
                  <span className="button whiteoutline">View finishes</span>
                </div>
                <span className="title">{timber.timber_title}</span>
              </div>
            </div>
          )) : null }
          {content ? content.map((timber, index) => (
            <div className="col-xs-6 col-sm-3" key={index}>
              <div className="species-box">
                <div className="image">
                  <Img fluid={timber.timber_small_thumbnail.localFile.childImageSharp.fluid} alt="Alternative Text" />
                  <span className="button whiteoutline">View finishes</span>
                </div>
                <span className="title">{timber.timber_title}</span>
              </div>
            </div>
          )) : null }
        </div>
      </div>
    </div>
  )
}

export default ProductSpecies;