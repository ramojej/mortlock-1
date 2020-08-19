import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from '../components/global/banner';

class Page extends Component {
  render() {
    const bannerContent = {
      banner_image: this.props.data.allWordpressPage.edges[0].node.acf.request_banner_image,
      banner_image_overlay: this.props.data.allWordpressPage.edges[0].node.acf.request_banner_image_overlay,
      banner_heading: this.props.data.allWordpressPage.edges[0].node.acf.request_banner_heading,
      banner_description: this.props.data.allWordpressPage.edges[0].node.acf.request_banner_description,
      banner_buttons: this.props.data.allWordpressPage.edges[0].node.acf.request_banner_buttons
    }

    return (
      <Layout>
        <Banner data={bannerContent} />
        <SEO 
          description={this.props.data.allWordpressPage.edges[0].node.yoast.metadesc} 
          title={this.props.data.allWordpressPage.edges[0].node.yoast.title} 
        />
        <div className="contact__wrapper">
          <div className="container container__small">
            <div className="quote__text" dangerouslySetInnerHTML={{ __html: this.props.data.allWordpressPage.edges[0].node.acf.request_a_quote_content }} />
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
          yoast {
            title
            metadesc
          }
          acf {
            request_banner_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            request_banner_description
            request_banner_heading
            request_banner_image_overlay
            request_a_quote_content
          }
        }
      }
    }
  }
`