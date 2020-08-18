import React, { Component } from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Banner from '../components/global/banner';
import Layout from '../components/layout';

import ProductBoxes from "../components/productparent/product-boxes";
import ExpandableContent from "../components/productparent/expandable-content";

class Page extends Component {
  render() {
    const bannerContent = {
      banner_image: this.props.data.wordpressPage.acf.banner_image,
      banner_image_overlay: this.props.data.wordpressPage.acf.banner_image_overlay,
      banner_heading: this.props.data.wordpressPage.acf.banner_heading,
      banner_description: this.props.data.wordpressPage.acf.banner_description,
      banner_buttons: this.props.data.wordpressPage.acf.banner_buttons
    }

    const boxesContent = this.props.data.wordpressPage.acf.product_list
    
    const expandableContent = {
      description_text_box: this.props.data.wordpressPage.acf.description_text_box,
      description_button_text: this.props.data.wordpressPage.acf.description_button_text,
      description_additional_box: this.props.data.wordpressPage.acf.description_additional_box
    }

    console.log(window.location.pathname);

    return (
      <Layout>
        <SEO 
          description={this.props.data.wordpressPage.yoast.metadesc ? this.props.data.wordpressPage.yoast.metadesc : null} 
          title={this.props.data.wordpressPage.yoast.title ? this.props.data.wordpressPage.yoast.title : null} 
        />
        <Banner data={bannerContent} type="homepag" />
        <ProductBoxes data={boxesContent} />
        <ExpandableContent data={expandableContent} />
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      slug
      yoast {
        title
        metadesc
      }
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
`