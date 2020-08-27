import React, { Component } from "react";
import axios from 'axios';

import Helpers from '../helpers/helpers';
import Loader from '../helpers/loader';


class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        company: '',
        whoareyou: '',
        message: '',
      },
      errors: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        company: '',
        whoareyou: '',
        message: '',
      },
      passedValidation: false,
      submitActive: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value, type } = event.target;

    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value
      },
      // errors: {
      //   ...this.state.errors,
      //   [name]: Helpers.formValidation(type, value).err
      // }
    })

    console.log(this.state);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ submitActive: true });

    if(this.state.passedValidation) {
      axios.post('', Helpers.config).then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    }
    console.log(this.state);
  }
  render() {
    const { submitActive } = this.state;
    console.log(this.state);
    return (
      <form className={submitActive ? 'contact__form loading' : 'contact__form'} id="contact__form" type="POST" onSubmit={ this.handleSubmit }>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="firstname">first name</label>
              <div className="form_input">
                <input aria-label="Firstname" type="text" name="firstname" id="firstname" placeholder="Enter your first name" className="noEmpty" value={this.state.fields.firstname || ''} onChange={ this.handleInputChange } />
                {this.state.errors.firstname !== '' && <span className='error'>{this.state.errors.firstname}</span>}
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="lastname">last name</label>
              <div className="form_input">
                <input aria-label="Lastname" className="noEmpty" type="text" name="lastname" id="lastname" placeholder="Enter your last name" value={this.state.fields.lastname || ''} onChange={ this.handleInputChange } />
                {this.state.errors.lastname !== '' && <span className='error'>{this.state.errors.lastname}</span>}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="email">Email</label>
              <div className="form_input">
                <input aria-label="Email" className="noEmpty" type="email" name="email" id="email" placeholder="Enter your email address" value={this.state.fields.email || ''} onChange={ this.handleInputChange } />
                {this.state.errors.email !== '' && <span className='error'>{this.state.errors.email}</span>}
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="phone">Phone</label>
              <div className="form_input">
                <input aria-label="Company name" type="text" name="phone" id="phone" placeholder="Enter your phone number" value={this.state.fields.phone || ''} onChange={ this.handleInputChange } />
                {this.state.errors.phone !== '' && <span className='error'>{this.state.errors.phone}</span>}
              </div>
            </div>
          </div>
        </div>
        <div className="form_group">
          <label htmlFor="company">company name</label>
          <div className="form_input">
            <input aria-label="Company name" type="text" name="company" id="company" placeholder="Enter company name" value={this.state.fields.company || ''} onChange={ this.handleInputChange } />
            {this.state.errors.company !== '' && <span className='error'>{this.state.errors.company}</span>}
          </div>
        </div>
        <div className="form_group">
          <label htmlFor="whoareyou">are you a/an</label>
          <div className="form_input">
            <select name="whoareyou" id="whoareyou" value={this.state.fields.whoweare || ''} onChange={ this.handleInputChange }>
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
            <textarea aria-label="Message" id="message" placeholder="Please leave a detailed message here..." name="message" value={this.state.fields.message || ''} onChange={ this.handleInputChange } />
          </div>
        </div>
        <div className="btn_wrap">
          <button className="button" type="submit"><span className="text">Submit</span><Loader /></button>
          {this.state.submit ? <span className="form-msg">Thank you for contacting us. We will get back to you soon</span> : null }
        </div>
      </form>
    )
  }
}

export default ContactForm;