import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const PricingBlock = ({ ...props }) =>  {
  const content = props.data;

  return (
    <div className="pricing__block">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="pricing__text">
              <h2 dangerouslySetInnerHTML={{ __html: content.pricing_title }} />
              <div dangerouslySetInnerHTML={{ __html: content.pricing_description }} />
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
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
                  <label htmlFor="company">company name</label>
                  <div className="form_input">
                    <input type="text" name="company" placeholder="Enter company name" />
                  </div>
                </div>
                <div className="btn_wrap">
                  <button className="button" type="submit">Submit</button>
                  <Link className="button blackoutline" to="/contact-us/">know exactly what you’re looking for? click here</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-5">
            <div className="price__image">
              {content.pricing_image ? <Img fluid={content.pricing_image.localFile.childImageSharp.fluid} alt="Alternative Text" /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingBlock;