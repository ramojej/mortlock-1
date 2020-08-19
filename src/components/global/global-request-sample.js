import React from 'react';
import Img from 'gatsby-image';

const RequestSample = ({ ...props }) =>  {
  const content = props.data;

  return (
    <div className="request__block">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="request__text">
              {content.request_block_heading ? <h2 dangerouslySetInnerHTML={{ __html: content.request_block_heading }} /> : null }
              {content.request_sample_description ? <div className="request__content" dangerouslySetInnerHTML={{ __html: content.request_sample_description }} /> : null }
              { content.request_sample_image ? 
                <div className="request__image">
                  <Img fluid={content.request_sample_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
                </div>
                : null }
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-7">
            <form className="contact__form" action="#">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form_group">
                    <label htmlFor="firstname">first name</label>
                    <div className="form_input">
                      <input type="text" name="firstname" placeholder="Enter your first name" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form_group">
                    <label htmlFor="lastname">last name</label>
                    <div className="form_input">
                      <input type="text" name="lastname" placeholder="Enter your last name" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form_group">
                    <label htmlFor="email">Email</label>
                    <div className="form_input">
                      <input type="text" name="email" placeholder="Enter your email address" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form_group">
                    <label htmlFor="phone">Phone</label>
                    <div className="form_input">
                      <input type="text" name="phone" placeholder="Enter your phone number" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form_group">
                <label htmlFor="company">select the brochure(s) you need</label>
                <ul className="check__list">
                  <li>
                    <label className="custom_check">
                      <input type="checkbox" />
                      <span className="custom-box"></span>
                      <span className="custom-text">proplank</span>
                    </label>
                  </li>
                  <li>
                    <label className="custom_check">
                      <input type="checkbox" />
                      <span className="custom-box"></span>
                      <span className="custom-text">TRENDplank</span>
                    </label>
                  </li>
                  <li>
                    <label className="custom_check">
                      <input type="checkbox" />
                      <span className="custom-box"></span>
                      <span className="custom-text">SATINPLANK</span>
                    </label>
                  </li>
                  <li>
                    <label className="custom_check">
                      <input type="checkbox" />
                      <span className="custom-box"></span>
                      <span className="custom-text">MARINEplank</span>
                    </label>
                  </li>
                  <li>
                    <label className="custom_check">
                      <input type="checkbox" />
                      <span className="custom-box"></span>
                      <span className="custom-text">METROplank</span>
                    </label>
                  </li>
                  <li>
                    <label className="custom_check">
                      <input type="checkbox" />
                      <span className="custom-box"></span>
                      <span className="custom-text">CLASSICPLANK</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="btn_wrap">
                <button className="button" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestSample;