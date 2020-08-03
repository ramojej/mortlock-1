import React, { Component } from "react";
import { graphql } from "gatsby";

import Banner from '../components/global/banner';
import SubMenu from '../components/global-subnav';
import Layout from '../components/layout';

import ProductOverview from "../components/productsingle/product-overview";

import ProductFaq from "../components/productsingle/product-faq";

import RequestSample from "../components/global/global-request-sample";
import PricingBlock from "../components/global/global-pricing-block";


class Page extends Component {
  render() {

    const bannerContent = {
      banner_image: this.props.data.allWordpressPage.edges[0].node.acf.banner_image,
      banner_image_overlay: this.props.data.allWordpressPage.edges[0].node.acf.banner_image_overlay,
      banner_heading: this.props.data.allWordpressPage.edges[0].node.acf.banner_heading,
      banner_description: this.props.data.allWordpressPage.edges[0].node.acf.banner_description,
      banner_buttons: this.props.data.allWordpressPage.edges[0].node.acf.banner_buttons
    }

    const productOverview = {
      
    }

    return (
      <Layout>
        <Banner data={bannerContent} type="homepag" />
        <SubMenu />
        <ProductOverview />
        
        <div className="product__description">
          <div className="container">
            <div className="product-species">
              <div className="general-heading">
                <h2>timber species</h2>
                <span className="info">Select timber species below to see their corresponding finishes</span>
              </div>
              <div className="species-boxes">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="species-box">
                      <div className="image">
                        img
                        <span className="button">View finishes</span>
                      </div>
                      <span className="title">american oak</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shapes__boxes">
              <div className="general-heading">
                <h2>batten shapes & sizes</h2>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="shape__column">
                    <span className="title">block profile</span>
                    <ul className="block-icons">
                      <li>
                        <div className="block-iconwrap">
                          svg
                          <span className="text">30mm x 20mm</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="installation__block">
              <div className="row">
                <div className="col-sm-6">
                  <div className="installation__text">
                    <h2>Installation</h2>
                    <p>Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. </p>
                    <a href="#" className="learn-more">View Installation Guide</a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="installation__image">
                    img
                  </div>
                </div>
              </div>
            </div>
            <div className="useful__info">
              <h2>Useful Info</h2>
              <div className="info__slider">
                <div className="slide">
                  <div className="info__box">
                    <div className="icon">
                      svg
                    </div>
                    <h4>warranty</h4>
                    <p>High degree of natural durability and strength</p>
                    <a href="#" className="link">Download PDF</a>
                  </div>
                </div>
              </div>
            </div>
            <ProductFaq />
          </div>
        </div>
        <PricingBlock />
        <RequestSample />
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "template-product-single.php"}}) {
      edges {
        node {
          acf {
            banner_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1800) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            banner_image_overlay
            banner_heading
            banner_description
            banner_buttons {
              button_link
              button_style
              button_text
            }
          }
        }
      }
    }
  }
`