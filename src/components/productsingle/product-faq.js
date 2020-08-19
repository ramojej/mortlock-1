import React from 'react';

const ProductFaq = ({ ...props }) =>  {
  const content = props.data;
  return (
    <div className="faq__block">
      <div className="general-heading">
        <h2>{content.faq_title}</h2>
      </div>
      <div className="faq__list">
        {content.faqs ? content.faqs.map((faq,index) => (
          <div className="faq__item" key={index}>
            <span className="icon_wrap"><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"/></svg></span>
            <span className="title" dangerouslySetInnerHTML={{ __html: faq.faq_title }} />
            <div className="faq__slide" dangerouslySetInnerHTML={{ __html: faq.faq_content }} />
          </div>
        )) : null }
      </div>
    </div>
  )
}

export default ProductFaq;