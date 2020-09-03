import React, { Component } from "react";
import axios from 'axios';
import qs from 'qs';

import Helpers from '../helpers/helpers';
import Loader from '../helpers/loader';

class ProductPricingPopupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        company: '',
        timberspecies: '',
        timberfinishes: '',
        battensize: '',
        battenspacing: '',
        backing: '',
        projectsize: ''
      },
      errors: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        company: '',
        timberspecies: '',
        timberfinishes: '',
        battensize: '',
        battenspacing: '',
        backing: '',
        projectsize: ''
      },
      passedValidation: false,
      submitActive: false,
      mainFormMsg: '',
      mainFormState: null,
      popupActive: false,
      selectedSpecies: null
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.pricingPopup = this.pricingPopup.bind(this);
  }

  handleInputChange(event) {
    const { name, value, type } = event.target;
    this.setState({
      submitActive: false,
      mainFormMsg: '',
      mainFormState: ''
    });

    if(name === 'timberspecies') {
      this.setState({
        selectedSpecies: value
      })
    }

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
    const formLink = 'https://site.mortlock.com.au/wp-json/contact-form-7/v1/contact-forms/4367/feedback';
    let isFormValid = false;
    let elements = document.querySelectorAll('.pricing__popupform .noEmpty');

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
                timberspecies: '',
                timberfinishes: '',
                battensize: '',
                battenspacing: '',
                backing: '',
                projectsize: ''
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

  pricingPopup = (e) => {
    e.preventDefault();
    this.setState({
      popupFormActive: !this.state.popupFormActive
    });
  }

  render() {
    const { submitActive, popupActive, popupFormActive } = this.state;

    if(popupActive) {
      return (
        <div className="formsub__popup">
          <h3>Thank you!</h3>
          <p>Please click the link below to download the guide.</p>
        </div>
      )
    } else {
      return (
        <form className={submitActive ? 'pricing__popupform loading' : 'pricing__popupform'} id="pricing__popupform" type="POST" onSubmit={ this.handleSubmit } noValidate>
          <div className="row">
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="firstname1">first name *</label>
                <div className="form_input">
                  <input aria-label="Firstname" className="noEmpty" type="text" name="firstname" id="firstname1" placeholder="Enter your first name" className="noEmpty" value={this.state.fields.firstname || ''} onChange={ this.handleInputChange } />
                  {this.state.errors.firstname !== '' && <span className='error'>{this.state.errors.firstname}</span>}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="lastname1">last name *</label>
                <div className="form_input">
                  <input aria-label="Lastname" className="noEmpty" type="text" name="lastname" id="lastname1" placeholder="Enter your last name" value={this.state.fields.lastname || ''} onChange={ this.handleInputChange } />
                  {this.state.errors.lastname !== '' && <span className='error'>{this.state.errors.lastname}</span>}
                </div>
              </div>
            </div>
          </div>
          <div className="form_group">
            <label htmlFor="company1">Company *</label>
            <div className="form_input">
              <input aria-label="Company name" type="text" name="company" id="company1" placeholder="Enter company name" value={this.state.fields.company || ''} onChange={ this.handleInputChange } />
              {this.state.errors.company !== '' && <span className='error'>{this.state.errors.company}</span>}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="email1">Email *</label>
                <div className="form_input">
                  <input aria-label="Email" className="noEmpty" type="email" name="email" id="email1" placeholder="Enter your email address" value={this.state.fields.email || ''} onChange={ this.handleInputChange } />
                  {this.state.errors.email !== '' && <span className='error'>{this.state.errors.email}</span>}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="phone1">Phone *</label>
                <div className="form_input">
                  <input aria-label="Company name" className="noEmpty" type="text" name="phone" id="phone1" placeholder="Enter your phone number" value={this.state.fields.phone || ''} onChange={ this.handleInputChange } />
                  {this.state.errors.phone !== '' && <span className='error'>{this.state.errors.phone}</span>}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="timberspecies">Timber species *</label>
                <div className="form_input">
                  <select name="timberspecies" id="timberspecies" value={this.state.fields.timberspecies || ''} onChange={ this.handleInputChange }>
                    {this.props.finishes.species.map((product, index) => (
                      <option value={product.timber_title} key={index}>{product.timber_title}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="timberfinishes">Finish *</label>
                <div className="form_input">
                    <select name="timberfinishes" id="timberfinishes" value={this.state.fields.timberfinishes || ''} onChange={ this.handleInputChange }>
                      <option>- Select -</option>
                      {this.props.finishes.species.map((product, index) => {
                        if(this.state.selectedSpecies === product.timber_title) {
                          return (
                            <>
                              {product.timber_finishes.map((finish, key) => {
                                return (
                                  <option value={finish.finishes_title} key={key}>{finish.finishes_title}</option>
                                )
                              })}
                            </>
                          )
                        }
                      })}
                    </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="battensize">Timber Batten Size *</label>
                <div className="form_input">
                  <select name="battensize" id="battensize" value={this.state.fields.battensize || ''} onChange={ this.handleInputChange }>
                    {this.props.battensize.batten_shapes.map((size, index) => {
                      return (
                        <optgroup label={size.shape_and_size_title} key={index}>
                          {size.shape_icons.map((text, key) => (
                            <option value={text.shape_title} key={key}>{text.shape_title}</option>
                          ))}
                        </optgroup>
                      )
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="battenspacing">Spacing between battens *</label>
                <div className="form_input">
                  <select name="battenspacing" id="battenspacing" value={this.state.fields.battenspacing || ''} onChange={ this.handleInputChange }>
                    <option value="default">- Select -</option>
                    <option value="Architect/Specifier">5mm</option>
                    <option value="Builder">10mm</option>
                    <option value="Contractor/Carpenter">15mm</option>
                    <option value="Individual/Owner Builder">20mm</option>
                    <option value="Individual/Owner Builder">30mm</option>
                    <option value="Individual/Owner Builder">Custom</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="backing">Acoustic Backing *</label>
                <ul className="check__list custom">
                  <li>
                    <label className="custom_check" htmlFor="yes">
                      <input aria-label="yes" type="radio" name="backing" value="yes" id="yes" onChange={ this.handleInputChange } />
                      <span className="custom-box"></span>
                      <span className="custom-text">YES</span>
                    </label>
                  </li>
                  <li>
                    <label className="custom_check" htmlFor="no">
                      <input aria-label="no" type="radio" name="backing" value="no" id="no" onChange={ this.handleInputChange } />
                      <span className="custom-box"></span>
                      <span className="custom-text">NO</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="projectsize">Project Size M2 *</label>
                <div className="form_input">
                  <input aria-label="Project Size" type="text" name="projectsize" id="projectsize" placeholder="Enter details" value={this.state.fields.projectsize || ''} onChange={ this.handleInputChange } />
                  <label><span className="info">(Proplank not recommended for projects under 30m<sup>2</sup>)</span></label>
                </div>
              </div>
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

export default ProductPricingPopupForm;