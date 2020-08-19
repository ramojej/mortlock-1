import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from 'gatsby-image';

import SEO from "../components/seo";
import Layout from "../components/layout";
import Banner from '../components/global/banner';
import PricingForm from "../components/forms/pricing-form-3502";

class Page extends Component {
  render() {

    const bannerContent = {
      banner_image: this.props.data.allWordpressPage.edges[0].node.acf.pricing_banner_image,
      banner_image_overlay: this.props.data.allWordpressPage.edges[0].node.acf.pricing_banner_image_overlay,
      banner_heading: this.props.data.allWordpressPage.edges[0].node.acf.pricing_banner_heading,
      banner_description: this.props.data.allWordpressPage.edges[0].node.acf.pricing_banner_description,
      banner_buttons: this.props.data.allWordpressPage.edges[0].node.acf.pricing_banner_buttons
    }

    const pricingImage = this.props.data.allWordpressPage.edges[0].node.acf.pricing_image
    return (
      <Layout>
        <SEO 
          description={this.props.data.allWordpressPage.edges[0].node.yoast.metadesc} 
          title={this.props.data.allWordpressPage.edges[0].node.yoast.title} 
        />
        <Banner data={bannerContent} />
        <div className="contact__wrapper">
          <div className="container">
            <div className="quote__text">
              <h2 dangerouslySetInnerHTML={{ __html: this.props.data.allWordpressPage.edges[0].node.acf.pricing_heading }} />
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="pricing_formwrap">
                  <div dangerouslySetInnerHTML={{ __html: this.props.data.allWordpressPage.edges[0].node.acf.pricing_page_description }} />
                  <PricingForm />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="pricing__image">
                  {pricingImage ? <Img fluid={pricingImage.localFile.childImageSharp.fluid} alt="Alternative Text" /> : null}
                </div>
              </div>
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
    allWordpressPage(filter: {template: {eq: "template-pricing.php"}}) {
      edges {
        node {
          yoast {
            title
            metadesc
          }
          acf {
            pricing_banner_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            pricing_banner_image_overlay
            pricing_banner_heading
            pricing_banner_description
            pricing_banner_buttons {
              pricing_button_text
              pricing_button_link
              pricing_button_style
            }
            pricing_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            pricing_heading
            pricing_page_description 
          }
        }
      }
    }
  }
`