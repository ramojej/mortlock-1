import React, { Component } from "react";
import { graphql } from "gatsby";

import Banner from '../components/global/banner';
import Layout from '../components/layout';

import ProductBoxes from "../components/productparent/product-boxes";
import ExpandableContent from "../components/productparent/expandable-content";

class Page extends Component {
  render() {
    const bannerContent = {
      banner_image: this.props.data.allWordpressPage.edges[0].node.acf.banner_image,
      banner_image_overlay: this.props.data.allWordpressPage.edges[0].node.acf.banner_image_overlay,
      banner_heading: this.props.data.allWordpressPage.edges[0].node.acf.banner_heading,
      banner_description: this.props.data.allWordpressPage.edges[0].node.acf.banner_description,
      banner_buttons: this.props.data.allWordpressPage.edges[0].node.acf.banner_buttons
    }

    const boxesContent = this.props.data.allWordpressPage.edges[0].node.acf.product_list
    
    const expandableContent = {
      description_text_box: this.props.data.allWordpressPage.edges[0].node.acf.description_text_box,
      description_button_text: this.props.data.allWordpressPage.edges[0].node.acf.description_button_text,
      description_additional_box: this.props.data.allWordpressPage.edges[0].node.acf.description_additional_box
    }

    return (
      <Layout>
        <Banner data={bannerContent} type="homepag" />
        <ProductBoxes data={boxesContent} />
        <ExpandableContent data={expandableContent} />
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "template-product-parent.php"}}) {
      edges {
        node {
          acf {
            banner_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1170) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            banner_heading
            banner_description
            banner_image_overlay
            banner_buttons {
              button_link
              button_style
              button_text
            }
            product_list {
              button_link
              button_text
              popup_text
              product_description
              product_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 900) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              product_title
            }
            description_text_box
            description_button_text
            description_additional_box
          }
        }
      }
    }
  }
`