import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

import Button from "../components/global/button";
import SEO from "../components/seo";
import Layout from "../components/layout";
import PricingForm from "../components/forms/pricing-form-3502";

class Page extends Component {
  render() {

    const bannerContent = {
      banner_image: this.props.data.allWordpressPage.edges[0].node.acf.pricing_banner_image,
      banner_image_overlay: this.props.data.allWordpressPage.edges[0].node.acf.pricing_banner_image_overlay,
      banner_heading: this.props.data.allWordpressPage.edges[0].node.acf.pricing_banner_heading,
      banner_description: this.props.data.allWordpressPage.edges[0].node.acf.pricing_banner_description,
      banner_buttons: this.props.data.allWordpressPage.edges[0].node.acf.pricing_banner_buttons,
      banner_type: 'medium'
    }

    const pricingImage = this.props.data.allWordpressPage.edges[0].node.acf.pricing_image
    return (
      <Layout>
        <SEO 
          description={this.props.data.allWordpressPage.edges[0].node.yoast.metadesc} 
          title={this.props.data.allWordpressPage.edges[0].node.yoast.title} 
        />
        <div className={bannerContent.banner_type ? `inner__banner ${bannerContent.banner_type}` : 'inner__banner'}>
          <div className="bg__image has-overlay">
            { bannerContent.banner_image ? <BackgroundImage fluid={bannerContent.banner_image.localFile.childImageSharp.fluid} /> : null }
          </div>
          <div className="container">
            <div className="inner__bannerbox">
              <div className="box">
                <h1 className={ !bannerContent.banner_description ? "text-center" : null } dangerouslySetInnerHTML={{ __html: bannerContent.banner_heading }} />
                { bannerContent.banner_description ? <span className="inner__bannertext" dangerouslySetInnerHTML={{ __html: bannerContent.banner_description }} /> : null }
                { bannerContent.banner_buttons ?
                  <div className="inner__bannerbuttons">
                    {bannerContent.banner_buttons.map((button, index) => (
                      (index === 1) ? 
                      <Button type="external" link={button.pricing_button_link} text={button.pricing_button_text} style={button.pricing_button_style} key={index} /> : 
                      <Button link={button.pricing_button_link} text={button.pricing_button_text} style={button.pricing_button_style} key={index} /> 
                    ))}
                  </div> : null }
              </div>
            </div>
          </div>
        </div>
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
                  fluid(maxWidth: 1920) {
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