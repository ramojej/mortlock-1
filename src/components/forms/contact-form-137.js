import React, { useState } from "react";
import Helpers from '../helpers/helpers';


const ContactForm = ({ ...props }) =>  {
  const [state, setState] = useState({
    fields: {},
    errors: {},
    submitActive: false
  });

  // console.log(state);

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    setState({
      ...state,
      fields: {
        ...state.fields,
        [name]: value
      },
      errors: {
        ...state.errors,
        [name]: Helpers.formValidation(type, value).err
      }
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(state);
    
    if(!Helpers.emtypValidation('#contact__form')) {
      console.log('test fail');
    }
  }
  return (
    <form className="contact__form" id="contact__form" type="POST" onSubmit={ (e) => handleSubmit(e) }>
      <div className="row">
        <div className="col-sm-6">
          <div className="form_group">
            <label htmlFor="firstname">first name</label>
            <div className="form_input">
              <input aria-label="Firstname" type="text" name="firstname" id="firstname" placeholder="Enter your first name" className="noEmpty" value={state.fields.firstname || ''} onChange={ (e) => handleInputChange(e) } />
              {state.errors.firstname !== '' && <span className='error'>{state.errors.firstname}</span>}
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form_group">
            <label htmlFor="lastname">last name</label>
            <div className="form_input">
              <input aria-label="Lastname" className="noEmpty" type="text" name="lastname" id="lastname" placeholder="Enter your last name" value={state.fields.lastname || ''} onChange={ (e) => handleInputChange(e) } />
              {state.errors.lastname !== '' && <span className='error'>{state.errors.lastname}</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="form_group">
            <label htmlFor="email">Email</label>
            <div className="form_input">
              <input aria-label="Email" className="noEmpty" type="email" name="email" id="email" placeholder="Enter your email address" value={state.fields.email || ''} onChange={ (e) => handleInputChange(e) } />
              {state.errors.email !== '' && <span className='error'>{state.errors.email}</span>}
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form_group">
            <label htmlFor="phone">Phone</label>
            <div className="form_input">
              <input aria-label="Company name" type="text" name="phone" id="phone" placeholder="Enter your phone number" value={state.fields.phone || ''} onChange={ (e) => handleInputChange(e) } />
              {state.errors.phone !== '' && <span className='error'>{state.errors.phone}</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="form_group">
        <label htmlFor="company">company name</label>
        <div className="form_input">
          <input aria-label="Company name" type="text" name="company" id="company" placeholder="Enter company name" value={state.fields.company || ''} onChange={ (e) => handleInputChange(e) } />
          {state.errors.company !== '' && <span className='error'>{state.errors.company}</span>}
        </div>
      </div>
      <div className="form_group">
        <label htmlFor="whoareyou">are you a/an</label>
        <div className="form_input">
          <select name="whoareyou" id="whoareyou" value={state.fields.whoweare || ''} onChange={ (e) => handleInputChange(e) }>
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
          <textarea aria-label="Message" id="message" placeholder="Please leave a detailed message here..." name="message" value={state.fields.message || ''} onChange={ (e) => handleInputChange(e) } />
        </div>
      </div>
      <div className="btn_wrap">
        <button className="button" type="submit">Submit</button>
        {state.submit ? <span className="form-msg">Thank you for contacting us. We will get back to you soon</span> : null }
      </div>
    </form>
  )
}

export default ContactForm;