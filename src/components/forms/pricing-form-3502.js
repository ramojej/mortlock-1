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
        productinterest: [
          {id: 1, name: "Timber Ceilings", value: "timberceilings", isChecked: false},
          {id: 2, name: "Timber Walls", value: "timberwalls", isChecked: false},
          {id: 3, name: "Timber Decking", value: "timberdecking", isChecked: false},
          {id: 4, name: "Shou Sugi Ban", value: "shousugiban", isChecked: false}
        ],
        products: []
      },
      errors: {
        firstname: '',
        lastname: '',
        email: '',
        phone: ''

      },
      passedValidation: false,
      submitActive: false,
      mainFormMsg: '',
      mainFormState: null
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputCheck = this.handleInputCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputCheck(event) {
    let interests = this.state.fields.productinterest

    interests.forEach(interest => {
      if (interest.value === event.target.value)
      interest.isChecked =  event.target.checked
    })
    
    this.setState({
      fields: {
        ...this.state.fields,
        productinterest: interests
      }
    })
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

  handleSubmit = (event) => {
    event.preventDefault();
    let checkedBoxes = [];
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
      this.state.fields.productinterest.map(interest => {
        if(interest.isChecked) {
          checkedBoxes.push(interest.value);
        }
      });

      const formData = {
        firstname: this.state.fields.firstname,
        lastname: this.state.fields.lastname,
        email: this.state.fields.email,
        phone: this.state.fields.phone,
        products: checkedBoxes
      }

      axios.post(formLink, qs.stringify(formData), Helpers.config).then((res) => {
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
                productinterest: [
                  {id: 1, name: "Timber Ceilings", value: "timberceilings", isChecked: false},
                  {id: 2, name: "Timber Walls", value: "timberwalls", isChecked: false},
                  {id: 3, name: "Timber Decking", value: "timberdecking", isChecked: false},
                  {id: 4, name: "Shou Sugi Ban", value: "shousugiban", isChecked: false}
                ],
                products: []
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
          <span className="label">Select product of Interest</span>
          <ul className="check__list">
            {
              this.state.fields.productinterest.map((interest, index) => (
                <li key={index}>
                  <label className="custom_check" htmlFor={interest.value}>
                    <input aria-label={interest.name} name="productinterest" checked={interest.isChecked} value={interest.value} type="checkbox" id={interest.value} onChange={this.handleInputCheck} />
                    <span className="custom-box"></span>
                    <span className="custom-text">{interest.name}</span>
                  </label>
                </li>
              ))
            }
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