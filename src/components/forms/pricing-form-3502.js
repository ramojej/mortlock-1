import React, { Component } from "react";
import axios from 'axios';
import qs from 'qs';

import Helpers from '../helpers/helpers';
import Loader from '../helpers/loader';

class PricingForm extends Component {
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
        message: ''
      },
      errors: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        company: '',
        whoareyou: '',
        message: ''
      },
      passedValidation: false,
      submitActive: false,
      mainFormMsg: '',
      mainFormState: null
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
    const formLink = 'https://mortlock.dilatedigital.com.au/wp-json/contact-form-7/v1/contact-forms/3502/feedback';
    let isFormValid = false;
    let elements = document.querySelectorAll('.contact__form .noEmpty');

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
    const { submitActive } = this.state;
    return (
      <form className={submitActive ? 'contact__form loading' : 'contact__form'} id="pricing-guide-form" type="POST" onSubmit={ this.handleSubmit } noValidate>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="firstname1">first name</label>
              <div className="form_input">
                <input aria-label="Firstname" type="text" name="firstname" id="firstname" placeholder="Enter your first name" className="noEmpty" value={this.state.fields.firstname || ''} onChange={ this.handleInputChange } />
                {this.state.errors.firstname !== '' && <span className='error'>{this.state.errors.firstname}</span>}
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="lastname1">last name</label>
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
              <label htmlFor="email1">Email</label>
              <div className="form_input">
                <input aria-label="Email" className="noEmpty" type="email" name="email" id="email" placeholder="Enter your email address" value={this.state.fields.email || ''} onChange={ this.handleInputChange } />
                {this.state.errors.email !== '' && <span className='error'>{this.state.errors.email}</span>}
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="phone1">Phone</label>
              <div className="form_input">
                <input aria-label="Company name" className="noEmpty" type="text" name="phone" id="phone" placeholder="Enter your phone number" value={this.state.fields.phone || ''} onChange={ this.handleInputChange } />
                {this.state.errors.phone !== '' && <span className='error'>{this.state.errors.phone}</span>}
              </div>
            </div>
          </div>
        </div>
        
        <div className="form_group">
          <span className="label">select the brochure(s) you need</span>
          <ul className="check__list">
            <li>
              <label className="custom_check" htmlFor="timberdecking">
                <input aria-label="Proplank" type="checkbox" id="timberdecking" />
                <span className="custom-box"></span>
                <span className="custom-text">Timber Decking</span>
              </label>
            </li>
            <li>
              <label className="custom_check" htmlFor="timbercladding">
                <input aria-label="Trendplank" type="checkbox" id="timbercladding" />
                <span className="custom-box"></span>
                <span className="custom-text">Timber Cladding</span>
              </label>
            </li>
            <li>
              <label className="custom_check" htmlFor="shousugiban">
                <input aria-label="Satinplank" type="checkbox" id="shousugiban" />
                <span className="custom-box"></span>
                <span className="custom-text">Shou Sugi Ban</span>
              </label>
            </li>
            <li>
              <label className="custom_check" htmlFor="timberscreening">
                <input aria-label="Marineplank" type="checkbox" id="timberscreening" />
                <span className="custom-box"></span>
                <span className="custom-text">Timber Screening</span>
              </label>
            </li>
            <li>
              <label className="custom_check" htmlFor="timberceilings">
                <input aria-label="Metroplank" type="checkbox" id="timberceilings" />
                <span className="custom-box"></span>
                <span className="custom-text">Timber Ceilings</span>
              </label>
            </li>
          </ul>
        </div>
        <div className="btn_wrap">
          <button className="button" type="submit"><span className="text">Submit</span><Loader /></button>
          {this.state.mainFormMsg && <span className={`form-msg ${this.state.mainFormState}`}>{ this.state.mainFormMsg }</span>}
        </div>
      </form>
    )
  }
}

export default PricingForm;