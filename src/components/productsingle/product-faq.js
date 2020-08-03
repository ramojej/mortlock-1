import React from 'react';

const ProductFaq = ({ ...props }) =>  {
  return (
    <div className="faq__block">
      <div className="general-heading">
        <h2>FAQS</h2>
        <span className="info">Select timber species below to see their corresponding finishes</span>
      </div>
      <div className="faq__List">
        <div className="faq__item">
          <span className="title">What size decking joists should I use?</span>
          <div className="faq__slide">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
          </div>
        </div>
        <div className="faq__item">
          <span className="title">What size decking joists should I use?</span>
          <div className="faq__slide">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFaq;