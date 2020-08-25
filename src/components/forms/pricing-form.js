import React, { Component } from "react";

class ProductPricingForm extends Component {
  render() {
    return (
      <form className="pricing__form" action="#">
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="firstname1">first name</label>
              <div className="form_input">
                <input aria-label="First name" type="text" name="firstname" id="firstname1" placeholder="Enter your first name" />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="lastname1">last name</label>
              <div className="form_input">
                <input aria-label="Lastname" type="text" name="lastname" id="lastname1" placeholder="Enter your last name" />
              </div>
            </div>
          </div>
        </div>
        <div className="form_group">
          <label htmlFor="company1">Company</label>
          <div className="form_input">
            <input aria-label="Company" type="text" name="company1" id="company1" placeholder="Enter your company name" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="email1">Email</label>
              <div className="form_input">
                <input aria-label="Email" type="text" name="email" id="email1" placeholder="Enter your email address" />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="phone1">Phone</label>
              <div className="form_input">
                <input aria-label="Phone" type="text" name="phone" id="phone1" placeholder="Enter your phone number" />
              </div>
            </div>
          </div>
        </div>
        <div className="btn_wrap">
          <button className="button" type="submit">Submit</button>
          <button className="button blackoutline">know exactly what you’re looking for? click here</button>
        </div>
      </form>
    )
  }
}

export default ProductPricingForm;