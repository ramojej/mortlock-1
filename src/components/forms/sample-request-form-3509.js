import React, { Component } from "react";

class SampleRequest extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
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
        <div className="form_group">
          <label htmlFor="company">select the brochure(s) you need</label>
          <ul className="check__list">
            <li>
              <label className="custom_check" htmlFor="proplank">
                <input aria-label="Proplank" type="checkbox" name="brochure" id="proplank" />
                <span className="custom-box"></span>
                <span className="custom-text">proplank</span>
              </label>
            </li>
            <li>
              <label className="custom_check" htmlFor="trendplank">
                <input aria-label="Trendplank" type="checkbox" name="brochure" id="trendplank" />
                <span className="custom-box"></span>
                <span className="custom-text">TRENDplank</span>
              </label>
            </li>
            <li>
              <label className="custom_check" htmlFor="satinplank">
                <input aria-label="Satinplank" type="checkbox" name="brochure" id="satinplank" />
                <span className="custom-box"></span>
                <span className="custom-text">SATINPLANK</span>
              </label>
            </li>
            <li>
              <label className="custom_check" htmlFor="marineplank">
                <input aria-label="Marineplank" type="checkbox" name="brochure" id="marineplank" />
                <span className="custom-box"></span>
                <span className="custom-text">MARINEplank</span>
              </label>
            </li>
            <li>
              <label className="custom_check" htmlFor="metroplank">
                <input aria-label="Metroplank" type="checkbox" name="brochure" id="metroplank" />
                <span className="custom-box"></span>
                <span className="custom-text">METROplank</span>
              </label>
            </li>
            <li>
              <label className="custom_check" htmlFor="classicplank">
                <input aria-label="Classicplank" type="checkbox" name="brochure" id="classicplank" />
                <span className="custom-box"></span>
                <span className="custom-text">CLASSICPLANK</span>
              </label>
            </li>
          </ul>
        </div>
        <div className="btn_wrap">
          <button className="button" type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default SampleRequest;