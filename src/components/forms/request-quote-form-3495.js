import React, { Component } from "react";

class RequestAQuote extends Component {
  render() {
    return (
      <form className="contact__form" action="#">
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="firstname">first name</label>
              <div className="form_input">
                <input aria-label="Firstname" type="text" name="firstname" id="firstname" placeholder="Enter your first name" />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="lastname">last name</label>
              <div className="form_input">
                <input aria-label="Lastname" type="text" name="lastname" id="lastname" placeholder="Enter your last name" />
              </div>
            </div>
          </div>
        </div>
        <div className="form_group">
          <label htmlFor="company">Company</label>
          <div className="form_input">
            <input aria-label="company" type="text" name="company" id="company" placeholder="Enter your company name" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="address">address</label>
              <div className="form_input">
                <input aria-label="address" type="text" name="address" id="address" placeholder="Enter your address" />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="suburb">suburb</label>
              <div className="form_input">
                <input aria-label="suburb" type="text" name="suburb" id="suburb" placeholder="Enter your suburb" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="state">state</label>
              <div className="form_input">
                <input aria-label="state" type="text" name="state" id="state" placeholder="Enter your state" />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="postcode">postcode</label>
              <div className="form_input">
                <input aria-label="postcode" type="text" name="postcode" id="postcode" placeholder="Enter your postcode" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="email">Email</label>
              <div className="form_input">
                <input aria-label="Email" type="text" name="email" id="email" placeholder="Enter your email address" />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="phone">Phone</label>
              <div className="form_input">
                <input aria-label="Phone" type="text" name="phone" id="phone" placeholder="Enter your phone number" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="whoareyou">are you a/an</label>
              <div className="form_input">
                <select name="whoareyou" id="whoareyou">
                  <option>Architect/Specifier</option>
                  <option>Builder</option>
                  <option>Contractor/Carpenter</option>
                  <option>Individual/Owner Builder</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="quantity">Approx. Quantity of material in m2 or lm?</label>
              <div className="form_input">
                <input aria-label="quantity" type="text" name="quantity" id="quantity" placeholder="Enter details here" />
              </div>
            </div>
          </div>
        </div>
        <div className="form_group">
          <label htmlFor="message">Comments/Enquiry</label>
          <div className="form_input">
            <textarea aria-label="Message" id="message" placeholder="Please describe your requirments here..." name="message" />
          </div>
        </div>
        <div className="btn_wrap">
          <button className="button" type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default RequestAQuote;