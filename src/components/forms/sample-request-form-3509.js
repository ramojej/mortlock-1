import React, { Component } from "react";
import axios from 'axios';
import qs from 'qs';

import Helpers from '../helpers/helpers';
import Loader from '../helpers/loader';

class SampleRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        company: '',
        state: '',
        postcode: '',
        projectsize: '',
        sampleoptions: '',
        message: ''
      },
      errors: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        company: '',
        state: '',
        postcode: '',
        projectsize: '',
        sampleoptions: '',
        message: ''
      },
      passedValidation: false,
      submitActive: false,
      mainFormMsg: '',
      mainFormState: null,
      popupActive: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value, type } = event.target;
    this.setState({
      submitActive: false,
      mainFormMsg: '',
      mainFormState: ''
    });

    if(event.target.classList.contains('noEmpty')) {
      this.setState({
        fields: {
          ...this.state.fields,
          [name]: value
        },
        errors: {
          ...this.state.errors,
          [name]: Helpers.formValidation(type, value).err
        }
      })
    } else {
      this.setState({
        fields: {
          ...this.state.fields,
          [name]: value
        }
      })
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ submitActive: true });
    const formLink = 'https://site.mortlock.com.au/wp-json/contact-form-7/v1/contact-forms/3509/feedback';
    let isFormValid = false;
    let elements = document.querySelectorAll('.sample__form .noEmpty');

    for (let i = 0, element; element = elements[i++];) {
      if (element.value === "") {
        isFormValid = false;
        setTimeout(() => {
          this.setState({ 
            submitActive: false,
            mainFormMsg: 'Please fill in the required fields.',
            mainFormState: 'error',
            errors: {
              ...this.state.errors,
              [element.name]: Helpers.formValidation(element.type, element.value).err
            }
          });
        }, 800);
      } else {
        isFormValid =true;
      }
    }

    if(isFormValid) {
      axios.post(formLink, qs.stringify(this.state.fields), Helpers.config).then((res) => {
        if(res.data.status === 'mail_sent') {
          setTimeout(() => {
            this.setState({
              popupActive: true,
              submitActive: false,
              mainFormMsg: res.data.message,
              mainFormState: res.data.status,
              fields: {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                company: '',
                whoareyou: '',
                message: ''
              }
            })
          }, 800); 

          setTimeout(() => {
            this.setState({ mainFormMsg: '', mainFormState: '' });
          }, 4000);
        } else if(res.data.status === 'validation_failed') {
          setTimeout(() => {
            this.setState({
              submitActive: false,
              mainFormMsg: res.data.message,
              mainFormState: res.data.status
            })
          }, 800);
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  render() {
    const { submitActive, popupActive } = this.state;
    if(popupActive) {
      return (
        <div className="formsub__popup">
          <h3>Thank you!</h3>
          <p>Thank you! for downloading our product sample. Please click the link below to download the sample.</p>
          <a class="link" target="_blank" rel="noreferrer" href={this.props.data.request_sample_brochure.link}>Click here to download sample</a>
        </div>
      )
    } else {
      return (
        <form className={submitActive ? 'sample__form loading' : 'sample__form'} id="sample__form" type="POST" onSubmit={ this.handleSubmit } noValidate>
          <div className="row">
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="firstname">first name *</label>
                <div className="form_input">
                  <input aria-label="Firstname" type="text" name="firstname" id="firstname" placeholder="Enter your first name" className="noEmpty" value={this.state.fields.firstname || ''} onChange={ this.handleInputChange } />
                  {this.state.errors.firstname !== '' && <span className='error'>{this.state.errors.firstname}</span>}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="lastname">last name *</label>
                <div className="form_input">
                  <input aria-label="Lastname" className="noEmpty" type="text" name="lastname" id="lastname" placeholder="Enter your last name" value={this.state.fields.lastname || ''} onChange={ this.handleInputChange } />
                  {this.state.errors.lastname !== '' && <span className='error'>{this.state.errors.lastname}</span>}
                </div>
              </div>
            </div>
          </div>
          <div className="form_group">
            <label htmlFor="company">Company</label>
            <div className="form_input">
              <input aria-label="Company name" type="text" name="company" id="company" placeholder="Enter company name" value={this.state.fields.company || ''} onChange={ this.handleInputChange } />
              {this.state.errors.company !== '' && <span className='error'>{this.state.errors.company}</span>}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="email">Email *</label>
                <div className="form_input">
                  <input aria-label="Email" className="noEmpty" type="email" name="email" id="email" placeholder="Enter your email address" value={this.state.fields.email || ''} onChange={ this.handleInputChange } />
                  {this.state.errors.email !== '' && <span className='error'>{this.state.errors.email}</span>}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="phone">Phone *</label>
                <div className="form_input">
                  <input aria-label="Company name" className="noEmpty" type="text" name="phone" id="phone" placeholder="Enter your phone number" value={this.state.fields.phone || ''} onChange={ this.handleInputChange } />
                  {this.state.errors.phone !== '' && <span className='error'>{this.state.errors.phone}</span>}
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
            <label htmlFor="projectsize">Project Size M2 {(this.props.pageID === 339) && <span className="info">(Proplank not recommended for projects under 30m<sup>2</sup>)</span> }</label>
            <div className="form_input">
              <input aria-label="Project Size" type="text" name="projectsize" id="projectsize" placeholder="Enter details here" value={this.state.projectsize} onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="form_group">
          <span className="label"><span dangerouslySetInnerHTML={{ __html: this.props.data.request_sample_heading }}/> Sample options <span className="info">(Select from the option below)</span></span>
          <ul className="check__list custom">
            <li>
              <label className="custom_check" htmlFor="proplank1">
                <input aria-label="Proplank" type="radio" name="sample" id="proplank1" />
                <span className="custom-box"></span>
                <span className="custom-text"><span dangerouslySetInnerHTML={{ __html: this.props.data.request_sample_heading }}/> &nbsp;Sample kit</span>
              </label>
            </li>
            <li>
              <label className="custom_check" htmlFor="trendplank1">
                <input aria-label="Trendplank" type="radio" name="sample" id="trendplank1" />
                <span className="custom-box"></span>
                <span className="custom-text">Custom Sample</span>
              </label>
            </li>
          </ul>
        </div>
          <div className="form_group">
            <label htmlFor="message">Message</label>
            <div className="form_input">
              <textarea aria-label="Message" id="message" placeholder="Please leave a detailed message here..." name="message" value={this.state.message } onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="btn_wrap">
            <button className="button" type="submit"><span className="text">Submit</span><Loader /></button>
            {this.state.mainFormMsg && <span className={`form-msg ${this.state.mainFormState}`}>{ this.state.mainFormMsg }</span>}
          </div>
        </form>
      )
    }
  }
}

export default SampleRequest;