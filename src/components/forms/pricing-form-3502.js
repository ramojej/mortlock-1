import React, { Component } from "react";

class PricingForm extends Component {
  render() {
    return (
      <form className="contact__form" action="#">
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
        <div className="form_group">
          <span className="label">select the brochure(s) you need</span>
          <ul className="check__list">
            <li>
              <label className="custom_check" htmlFor="proplank1">
                <input aria-label="Proplank" type="checkbox" id="proplank1" />
                <span className="custom-box"></span>
                <span className="custom-text">proplank</span>
              </label>
            </li>
            <li>
              <label className="custom_check" htmlFor="trendplank1">
                <input aria-label="Trendplank" type="checkbox" id="trendplank1" />
                <span className="custom-box"></span>
                <span className="custom-text">TRENDplank</span>
              </label>
            </li>
            <li>
              <label className="custom_check" htmlFor="satinplank1">
                <input aria-label="Satinplank" type="checkbox" id="satinplank1" />
                <span className="custom-box"></span>
                <span className="custom-text">SATINPLANK</span>
              </label>
            </li>
            <li>
              <label className="custom_check" htmlFor="marineplank1">
                <input aria-label="Marineplank" type="checkbox" id="marineplank1" />
                <span className="custom-box"></span>
                <span className="custom-text">MARINEplank</span>
              </label>
            </li>
            <li>
              <label className="custom_check" htmlFor="metroplank1">
                <input aria-label="Metroplank" type="checkbox" id="metroplank1" />
                <span className="custom-box"></span>
                <span className="custom-text">METROplank</span>
              </label>
            </li>
            <li>
              <label className="custom_check" htmlFor="classicplank1">
                <input aria-label="Classicplank" type="checkbox" id="classicplank1" />
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
    )
  }
}

export default PricingForm;