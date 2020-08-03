import React from 'react';
import Button from '@src/components/global/button';

const ExpandableContent = ({ ...props }) =>  {
  const content = props.data;
  return (
    <div className="expand__content">
      <div className="container container__small">
        <div dangerouslySetInnerHTML={{ __html: content.description_text_box }} />
        <div className="addedBox" dangerouslySetInnerHTML={{ __html: content.description_additional_box }} />
        <div className="btn__wrap">
          <Button
            text={content.description_button_text}
            style="learn-more"
          />
        </div>
      </div>
    </div>
  )
}

export default ExpandableContent;