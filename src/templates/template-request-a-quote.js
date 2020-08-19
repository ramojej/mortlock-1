import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from '../components/global/banner';
import RequestAQuote from "../components/forms/request-quote-form-3495";

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
              <RequestAQuote />
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