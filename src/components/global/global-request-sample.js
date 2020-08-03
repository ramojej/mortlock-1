import React from 'react';

const RequestSample = ({ ...props }) =>  {
  const content = props.data;
  return (
    <div className="request__block">
      <div className="container">
        <div className="col-sm-7">
          <div className="request__text">
            <h2>request sample</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
            <div className="request__image">
              img
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          form
        </div>
      </div>
    </div>
  )
}

export default RequestSample;