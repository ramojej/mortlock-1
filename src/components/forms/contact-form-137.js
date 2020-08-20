import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    whoweare: '',
    message: '',
    submit: false
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })

    console.log(value);
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ submit: true });
  }

  render() {
    return (
      <form className="contact__form" type="POST" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="firstname">first name</label>
              <div className="form_input">
                <input aria-label="Firstname" type="text" name="firstname" id="firstname" placeholder="Enter your first name" value={this.state.firstname} onChange={this.handleInputChange} />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="lastname">last name</label>
              <div className="form_input">
                <input aria-label="Lastname" type="text" name="lastname" id="lastname" placeholder="Enter your last name" value={this.state.lastname} onChange={this.handleInputChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="email">Email</label>
              <div className="form_input">
                <input aria-label="Email" type="text" name="email" id="email" placeholder="Enter your email address" value={this.state.email} onChange={this.handleInputChange} />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="phone">Phone</label>
              <div className="form_input">
                <input aria-label="Company name" type="text" name="phone" id="phone" placeholder="Enter your phone number" value={this.state.phone} onChange={this.handleInputChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="form_group">
          <label htmlFor="company">company name</label>
          <div className="form_input">
            <input aria-label="Company name" type="text" name="company" id="company" placeholder="Enter company name" value={this.state.company} onChange={this.handleInputChange} />
          </div>
        </div>
        <div className="form_group">
          <label htmlFor="whoareyou">are you a/an</label>
          <div className="form_input">
            <select name="whoareyou" id="whoareyou" value={this.state.whoweare} onChange={this.handleInputChange}>
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
            <textarea aria-label="Message" id="message" placeholder="Please leave a detailed message here..." name="message" value={this.state.message} onChange={this.handleInputChange} />
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