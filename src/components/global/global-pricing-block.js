import React from 'react';

const PricingBlock = ({ ...props }) =>  {
  return (
    <div className="pricing__block">
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <div className="pricing__text">
              <h2>proplank pricing</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
              form
            </div>
          </div>
          <div className="col-sm-5">
            <div className="price__image">
              img
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingBlock;