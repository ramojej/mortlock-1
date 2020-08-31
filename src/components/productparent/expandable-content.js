import React, { useState } from 'react';

const ExpandableContent = ({ ...props }) =>  {
  const content = props.data;
  const [readMoreActive, setReadMoreActive ] = useState(false);

  const expandContent = () => {
    setReadMoreActive(!readMoreActive);
  }

  return (
    <div className="expand__content">
      <div className="container container__small" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5">
        <div dangerouslySetInnerHTML={{ __html: content.description_text_box }} />
        {readMoreActive ? <div className="addedBox" dangerouslySetInnerHTML={{ __html: content.description_additional_box }} /> : null }
        <div className="btn__wrap">
          <span className="button" role="button" tabIndex={0} onKeyDown={ () => expandContent() } onClick={ () => expandContent() }>{!readMoreActive ? 'Read more' : 'Read less' }</span>
        </div>
      </div>
    </div>
  )
}

export default ExpandableContent;