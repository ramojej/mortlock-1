import React, { useState } from 'react';
import Img from 'gatsby-image';

import ProductFinishes from './product-finishes-popup';

const togglePopupOverlay = () => {
  document.body.classList.toggle('popup__active');
}

const ProductSpecies = ({ ...props }) =>  {
  const content = props.data;
  const [popupIndex, setPopupIndex] = useState();

  const setFinishIndex = (num) => {
    togglePopupOverlay();
    setPopupIndex(num);
  }

  console.log("Index", popupIndex);
  console.log(content);
  
  return (
    <div className="product-species">
      <div className="general-heading">
        <h2>timber species</h2>
        <span className="info">Select timber species below to see their corresponding finishes</span>
      </div>
      <div className="species-boxes">
        <div className="row">
          {content.species ? content.species.map((timber, index) => (
            <div className="col-xs-6 col-sm-3" data-key={`${index}`} key={index}>
              <div className="species-box">
                <div className="image">
                  { timber.timber_small_thumbnail ? <Img fluid={timber.timber_small_thumbnail.localFile.childImageSharp.fluid} alt={timber.timber_small_thumbnail.alt_text || ''} /> : null }
                  <span className="button whiteoutline" onClick={ () => setFinishIndex(index) }>View finishes</span>
                </div>
                <span className="title">{timber.timber_title}</span>
              </div>
            </div>
          )) : null }
        </div>
      </div>
      { popupIndex !== undefined ? <ProductFinishes data={content.species[popupIndex].timber_finishes} /> : null }
    </div>
  )
}

export default ProductSpecies;