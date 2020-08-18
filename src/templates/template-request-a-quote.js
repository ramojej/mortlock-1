import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Banner from '../components/global/banner';

class Page extends Component {
  render() {
    const bannerContent = {
      banner_image: this.props.data.allWordpressPage.edges[0].node.acf.banner_image,
      banner_image_overlay: this.props.data.allWordpressPage.edges[0].node.acf.banner_image_overlay,
      banner_heading: this.props.data.allWordpressPage.edges[0].node.acf.banner_heading,
      banner_description: this.props.data.allWordpressPage.edges[0].node.acf.banner_description,
      banner_buttons: this.props.data.allWordpressPage.edges[0].node.acf.banner_buttons
    }

    return (
      <Layout>
        <Banner data={bannerContent} />
        <div className="contact__wrapper">
          <div className="container container__small">
            <div className="quote__text">
              <h2>fill out the form below to request a quote</h2>
              <p>Our consultants are able to assist with budgeting and quotations for projects large or small. To make large scale projects and tenders easier, we are able measure from PDF drawings which are returned with a detailed BOQ and quotation for cross referencing. We also offer face to face proposal presentation where required. Please provide your details below including a brief description or project reference and one of our consultants will be in touch.</p>
            </div>
            <div className="quote__formwrap">
              <form className="contact__form" action="#">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form_group">
                      <label htmlFor="firstname">first name</label>
                      <div className="form_input">
                        <input type="text" name="firstname" placeholder="Enter your first name" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form_group">
                      <label htmlFor="lastname">last name</label>
                      <div className="form_input">
                        <input type="text" name="lastname" placeholder="Enter your last name" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form_group">
                      <label htmlFor="email">Email</label>
                      <div className="form_input">
                        <input type="text" name="email" placeholder="Enter your email address" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form_group">
                      <label htmlFor="phone">Phone</label>
                      <div className="form_input">
                        <input type="text" name="phone" placeholder="Enter your phone number" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form_group">
                  <label htmlFor="company">company name</label>
                  <div className="form_input">
                    <input type="text" name="company" placeholder="Enter company name" />
                  </div>
                </div>
                <div className="form_group">
                  <label htmlFor="whoareyou">are you a/an</label>
                  <div className="form_input">
                    <select name="whoareyou">
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
                    <textarea name="message" placeholder="Please leave a detailed message here..." name="message"></textarea>
                  </div>
                </div>
                <div className="btn_wrap">
                  <button className="button" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "template-request-a-quote.php"}}) {
      edges {
        node {
          acf {
            main_banner_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1170) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            main_banner_heading
            main_banner_description
            main_banner_image_overlay
          }
        }
      }
    }
  }
`