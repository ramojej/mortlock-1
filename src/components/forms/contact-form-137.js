import React, { Component } from "react";

import Helpers from '../helpers/helpers';

class ContactForm extends Component {
  state = {
    fields: {},
    errors: {},
    submit: false
  }

  handleInputChange = (field, event) => {
    let fields = this.state.fields;
    let errors = this.state.errors;
    // fields[field] = Helpers.formValidation(event.target.value);

    // if(fields[field]) {
    //   this.setState({fields});
    // }else {
    //   this.errors[field].setState({ fields[field].err })
    // }
    

    console.log(this.state)
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    
    if(1 === 1){
        this.setState({ submit: true });
        alert("Form submitted");
    }else{
        alert("Form has errors.")
    }
  }

  render() {
    return (
      <form className="contact__form" type="POST" onSubmit={this.handleSubmit.bind(this)}>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="firstname">first name</label>
              <div className="form_input">
                <input aria-label="Firstname" type="text" name="firstname" id="firstname" placeholder="Enter your first name" value={this.state.fields["firstname"] || ''} onChange={this.handleInputChange.bind(this, "firstname")} />
                <span style={{color: "red"}}>{this.state.errors["firstname"]}</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="lastname">last name</label>
              <div className="form_input">
                <input aria-label="Lastname" type="text" name="lastname" id="lastname" placeholder="Enter your last name" value={this.state.fields["lastname"] || ''} onChange={this.handleInputChange.bind(this, "lastname")} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="email">Email</label>
              <div className="form_input">
                <input aria-label="Email" type="text" name="email" id="email" placeholder="Enter your email address" value={this.state.fields["email"] || ''} onChange={this.handleInputChange.bind(this, "email")} />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="phone">Phone</label>
              <div className="form_input">
                <input aria-label="Company name" type="text" name="phone" id="phone" placeholder="Enter your phone number" value={this.state.fields["phone"] || ''} onChange={this.handleInputChange.bind(this, "phone")} />
              </div>
            </div>
          </div>
        </div>
        <div className="form_group">
          <label htmlFor="company">company name</label>
          <div className="form_input">
            <input aria-label="Company name" type="text" name="company" id="company" placeholder="Enter company name" value={this.state.fields["company"] || ''} onChange={this.handleInputChange.bind(this, "company")} />
          </div>
        </div>
        <div className="form_group">
          <label htmlFor="whoareyou">are you a/an</label>
          <div className="form_input">
            <select name="whoareyou" id="whoareyou" value={this.state.fields["whoweare"] || ''} onChange={this.handleInputChange.bind(this, "whoweare")}>
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
            <textarea aria-label="Message" id="message" placeholder="Please leave a detailed message here..." name="message" value={this.state.fields["message"] || ''} onChange={this.handleInputChange.bind(this, "message")} />
          </div>
        </div>
        <div className="btn_wrap">
          <button className="button" type="submit">Submit</button>
          {this.state.submit ? <span className="form-msg">Thank you for contacting us. We will get back to you soon</span> : null }
        </div>
      </form>
    )
  }
}

export default ContactForm;