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
        <div className="form_group">
          <label htmlFor="company">company name</label>
          <div className="form_input">
            <input aria-label="Company name" type="text" name="company" id="company" placeholder="Enter company name" />
          </div>
        </div>
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
        <div className="form_group">
          <label htmlFor="message">Message</label>
          <div className="form_input">
            <textarea aria-label="Message" id="message" placeholder="Please leave a detailed message here..." name="message" />
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