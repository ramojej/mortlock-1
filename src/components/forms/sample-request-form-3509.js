import React, { Component } from "react";

class SampleRequest extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    state: '',
    postcode: ''
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
  }


  render() {
    return (
      <form className="contact__form" onSubmit={this.handleSubmit}>
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
        <div className="form_group">
          <label htmlFor="company">Company</label>
          <div className="form_input">
            <input aria-label="Company" type="text" name="company" id="company" placeholder="Enter your company name" value={this.state.company} onChange={this.handleInputChange} />
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
                <input aria-label="Phone" type="text" name="phone" id="phone" placeholder="Enter your phone number" value={this.state.phone} onChange={this.handleInputChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="state">State</label>
              <div className="form_input">
                <input aria-label="State" type="text" name="state" id="state" placeholder="Enter your state" value={this.state.state} onChange={this.handleInputChange} />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="postcode">Postcode</label>
              <div className="form_input">
                <input aria-label="postcode" type="text" name="postcode" id="postcode" placeholder="Enter your postcode" value={this.state.postcode} onChange={this.handleInputChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="form_group">
          <label htmlFor="projectsize">Project Size M2 <span className="info">(Proplank not recommended for projects under 30m2)</span></label>
          <div className="form_input">
            <input aria-label="Project Size" type="text" name="projectsize" id="projectsize" placeholder="Enter details here" value={this.state.projectsize} onChange={this.handleInputChange} />
          </div>
        </div>
        <div className="form_group">
          <label htmlFor="message">Message</label>
          <div className="form_input">
            <textarea aria-label="Message" id="message" placeholder="Please leave a detailed message here..." name="message" value={this.state.message } onChange={this.handleInputChange} />
          </div>
        </div>
        <div className="btn_wrap">
          <button className="button" type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default SampleRequest;