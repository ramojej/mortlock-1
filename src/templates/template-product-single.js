import React, { Component } from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Banner from '../components/global/banner';
import SubMenu from '../components/global-subnav';
import Layout from '../components/layout';

import ProductOverview from "../components/productsingle/product-overview";
import ProductBenefit from "../components/productsingle/product-benefit";
import ProductApplication from "../components/productsingle/product-application";
import ProductFaq from "../components/productsingle/product-faq";

import RequestSample from "../components/global/global-request-sample";
import PricingBlock from "../components/global/global-pricing-block";


class Page extends Component {
  render() {
    console.log(this.props)

    const bannerContent = {
      banner_image: this.props.data.wordpressPage.acf.banner_image,
      banner_image_overlay: this.props.data.wordpressPage.acf.banner_image_overlay,
      banner_heading: this.props.data.wordpressPage.acf.banner_heading,
      banner_description: this.props.data.wordpressPage.acf.banner_description,
      banner_buttons: this.props.data.wordpressPage.acf.banner_button_wrap
    }

    const productOverview = {
      product_title: this.props.data.wordpressPage.acf.product_title,
      product_overview_aside_title: this.props.data.wordpressPage.acf.product_overview_aside_title,
      product_aside_image: this.props.data.wordpressPage.acf.product_aside_image,
      product_description: this.props.data.wordpressPage.acf.product_description
    }

    const productBenefit = {
      product_benefit_image: this.props.data.wordpressPage.acf.product_benefit_image,
      product_benefit_title: this.props.data.wordpressPage.acf.product_benefit_title,
      product_benefit_columns: this.props.data.wordpressPage.acf.product_benefit_columns
    }

    const prouctApplication = {
      application_content: this.props.data.wordpressPage.acf.application_content,
      structural_svg: this.props.data.wordpressPage.acf.structural_svg,
      interior_svg: this.props.data.wordpressPage.acf.interior_svg,
      exterior_svg: this.props.data.wordpressPage.acf.exterior_svg,
      application_gallery_image: this.props.data.wordpressPage.acf.application_gallery_image
    }

    const requestSample = {
    }

    return (
      <Layout>
        <SEO 
          description={this.props.data.wordpressPage.yoast.metadesc ? this.props.data.wordpressPage.yoast.metadesc : null} 
          title={this.props.data.wordpressPage.yoast.title ? this.props.data.wordpressPage.yoast.title : null} 
        />
        <Banner data={bannerContent} />
        <SubMenu />
        <div className="product__singlewrap">
          <ProductOverview data={productOverview} />
          <ProductBenefit data={productBenefit} />
          <ProductApplication data={prouctApplication} />
        </div>
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
                    <a href="https://dilate.com.au" className="learn-more">View Installation Guide</a>
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
                    <a href="https://dilate.com.au" className="link">Download PDF</a>
                  </div>
                </div>
              </div>
            </div>
            <ProductFaq />
          </div>
        </div>
        <PricingBlock />
        <RequestSample data={requestSample} />
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
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
      }
    }
  }
`