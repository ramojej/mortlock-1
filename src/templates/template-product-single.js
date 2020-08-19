import React, { Component } from "react";
import { graphql, Link } from "gatsby";

import Layout from '../components/layout';
import SEO from "../components/seo";
import Banner from '../components/global/banner';
import SubMenu from '../components/global-subnav';

import ProductOverview from "../components/productsingle/product-overview";
import ProductBenefit from "../components/productsingle/product-benefit";
import ProductApplication from "../components/productsingle/product-application";
import ProductFaq from "../components/productsingle/product-faq";
import ProductSpecies from "../components/productsingle/product-species";
import ProductInstallation from "../components/productsingle/product-installation";

import RequestSample from "../components/global/global-request-sample";
import PricingBlock from "../components/global/global-pricing-block";


class Page extends Component {
  render() {    
    const bannerContent = {
      banner_image: this.props.data.wordpressPage.acf.main_banner_image,
      banner_image_overlay: this.props.data.wordpressPage.acf.main_banner_image_overlay,
      banner_heading: this.props.data.wordpressPage.acf.main_banner_heading,
      banner_description: this.props.data.wordpressPage.acf.main_banner_sub_heading,
      banner_buttons: this.props.data.wordpressPage.acf.main_banner_buttons
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

    const timber_species = this.props.data.wordpressPage.acf.timber_species;

    const productInstallation = {
      installation_image: this.props.data.wordpressPage.acf.installation_image,
      installation_title: this.props.data.wordpressPage.acf.installation_title,
      installation_description: this.props.data.wordpressPage.acf.installation_description,
      installation_button_text: this.props.data.wordpressPage.acf.installation_button_text,
      installation_button_link: this.props.data.wordpressPage.acf.installation_button_link,
      installation_button_style: this.props.data.wordpressPage.acf.installation_button_style
    }

    const userLinks = this.props.data.wordpressPage.acf.useful_info;

    const productFAQ = {
      faq_title: this.props.data.wordpressPage.acf.faq_title,
      faqs: this.props.data.wordpressPage.acf.faqs
    }

    const productPricing = {
      pricing_title: this.props.data.wordpressPage.acf.pricing_title,
      pricing_description: this.props.data.wordpressPage.acf.pricing_description,
      pricing_image: this.props.data.wordpressPage.acf.pricing_image
    }

    const requestSample = {
      request_sample_image: this.props.data.wordpressPage.acf.request_sample_image,
      request_block_heading: this.props.data.wordpressPage.acf.request_block_heading,
      request_sample_description: this.props.data.wordpressPage.acf.request_sample_description
    }

    const submenus = ['product-overview', 'technical', 'pricing'];

    return (
      <Layout>
        <SEO 
          description={this.props.data.wordpressPage.yoast.metadesc ? this.props.data.wordpressPage.yoast.metadesc : null} 
          title={this.props.data.wordpressPage.yoast.title ? this.props.data.wordpressPage.yoast.title : null} 
        />
        <Banner data={bannerContent} />
        <SubMenu data={submenus} />
        <div className="product__singlewrap">
          <ProductOverview data={productOverview} />
          <ProductBenefit data={productBenefit} />
          <ProductApplication data={prouctApplication} />
        </div>
        <div className="product__description">
          <div className="container">
            <ProductSpecies data={timber_species} />
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
                          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56"><path class="cls-1" d="M309.01,3740.99H296.62v3.94h-8.913v-3.94h-12.39v3.94H266.4v-3.94h-12.39v52.06h10.652v3.94h12.39v-3.94h8.913v3.94h12.391v-3.94H309.01v-52.06Zm-53.259,50.38v-48.71h8.914v48.71h-8.914Zm19.566,3.94H266.4V3746.6h8.914v48.71Zm1.738-3.94v-48.71h8.913v48.71h-8.913Zm19.565,3.94h-8.913V3746.6h8.913v48.71Zm10.652-3.94h-8.913v-48.71h8.913v48.71Z" transform="translate(-254 -3741)"/></svg>
                        </div>
                        <span className="text">30mm x 20mm</span>
                      </li>
                      <li>
                        <div className="block-iconwrap">
                          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56"><path class="cls-1" d="M309.01,3740.99H296.62v3.94h-8.913v-3.94h-12.39v3.94H266.4v-3.94h-12.39v52.06h10.652v3.94h12.39v-3.94h8.913v3.94h12.391v-3.94H309.01v-52.06Zm-53.259,50.38v-48.71h8.914v48.71h-8.914Zm19.566,3.94H266.4V3746.6h8.914v48.71Zm1.738-3.94v-48.71h8.913v48.71h-8.913Zm19.565,3.94h-8.913V3746.6h8.913v48.71Zm10.652-3.94h-8.913v-48.71h8.913v48.71Z" transform="translate(-254 -3741)"/></svg>
                        </div>
                        <span className="text">30mm x 20mm</span>
                      </li>
                      <li>
                        <div className="block-iconwrap">
                          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56"><path class="cls-1" d="M309.01,3740.99H296.62v3.94h-8.913v-3.94h-12.39v3.94H266.4v-3.94h-12.39v52.06h10.652v3.94h12.39v-3.94h8.913v3.94h12.391v-3.94H309.01v-52.06Zm-53.259,50.38v-48.71h8.914v48.71h-8.914Zm19.566,3.94H266.4V3746.6h8.914v48.71Zm1.738-3.94v-48.71h8.913v48.71h-8.913Zm19.565,3.94h-8.913V3746.6h8.913v48.71Zm10.652-3.94h-8.913v-48.71h8.913v48.71Z" transform="translate(-254 -3741)"/></svg>
                        </div>
                        <span className="text">30mm x 20mm</span>
                      </li>
                      <li>
                        <div className="block-iconwrap">
                          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56"><path class="cls-1" d="M309.01,3740.99H296.62v3.94h-8.913v-3.94h-12.39v3.94H266.4v-3.94h-12.39v52.06h10.652v3.94h12.39v-3.94h8.913v3.94h12.391v-3.94H309.01v-52.06Zm-53.259,50.38v-48.71h8.914v48.71h-8.914Zm19.566,3.94H266.4V3746.6h8.914v48.71Zm1.738-3.94v-48.71h8.913v48.71h-8.913Zm19.565,3.94h-8.913V3746.6h8.913v48.71Zm10.652-3.94h-8.913v-48.71h8.913v48.71Z" transform="translate(-254 -3741)"/></svg>
                        </div>
                        <span className="text">30mm x 20mm</span>
                      </li>

                      <li>
                        <div className="block-iconwrap">
                          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56"><path class="cls-1" d="M309.01,3740.99H296.62v3.94h-8.913v-3.94h-12.39v3.94H266.4v-3.94h-12.39v52.06h10.652v3.94h12.39v-3.94h8.913v3.94h12.391v-3.94H309.01v-52.06Zm-53.259,50.38v-48.71h8.914v48.71h-8.914Zm19.566,3.94H266.4V3746.6h8.914v48.71Zm1.738-3.94v-48.71h8.913v48.71h-8.913Zm19.565,3.94h-8.913V3746.6h8.913v48.71Zm10.652-3.94h-8.913v-48.71h8.913v48.71Z" transform="translate(-254 -3741)"/></svg>
                        </div>
                        <span className="text">30mm x 20mm</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="shape__column">
                    <span className="title">block profile</span>
                    <ul className="block-icons">
                      <li>
                        <div className="block-iconwrap">
                          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56"><path class="cls-1" d="M309.01,3740.99H296.62v3.94h-8.913v-3.94h-12.39v3.94H266.4v-3.94h-12.39v52.06h10.652v3.94h12.39v-3.94h8.913v3.94h12.391v-3.94H309.01v-52.06Zm-53.259,50.38v-48.71h8.914v48.71h-8.914Zm19.566,3.94H266.4V3746.6h8.914v48.71Zm1.738-3.94v-48.71h8.913v48.71h-8.913Zm19.565,3.94h-8.913V3746.6h8.913v48.71Zm10.652-3.94h-8.913v-48.71h8.913v48.71Z" transform="translate(-254 -3741)"/></svg>
                        </div>
                        <span className="text">30mm x 20mm</span>
                      </li>
                      <li>
                        <div className="block-iconwrap">
                          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56"><path class="cls-1" d="M309.01,3740.99H296.62v3.94h-8.913v-3.94h-12.39v3.94H266.4v-3.94h-12.39v52.06h10.652v3.94h12.39v-3.94h8.913v3.94h12.391v-3.94H309.01v-52.06Zm-53.259,50.38v-48.71h8.914v48.71h-8.914Zm19.566,3.94H266.4V3746.6h8.914v48.71Zm1.738-3.94v-48.71h8.913v48.71h-8.913Zm19.565,3.94h-8.913V3746.6h8.913v48.71Zm10.652-3.94h-8.913v-48.71h8.913v48.71Z" transform="translate(-254 -3741)"/></svg>
                        </div>
                        <span className="text">30mm x 20mm</span>
                      </li>
                      <li>
                        <div className="block-iconwrap">
                          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56"><path class="cls-1" d="M309.01,3740.99H296.62v3.94h-8.913v-3.94h-12.39v3.94H266.4v-3.94h-12.39v52.06h10.652v3.94h12.39v-3.94h8.913v3.94h12.391v-3.94H309.01v-52.06Zm-53.259,50.38v-48.71h8.914v48.71h-8.914Zm19.566,3.94H266.4V3746.6h8.914v48.71Zm1.738-3.94v-48.71h8.913v48.71h-8.913Zm19.565,3.94h-8.913V3746.6h8.913v48.71Zm10.652-3.94h-8.913v-48.71h8.913v48.71Z" transform="translate(-254 -3741)"/></svg>
                        </div>
                        <span className="text">30mm x 20mm</span>
                      </li>
                      <li>
                        <div className="block-iconwrap">
                          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56"><path class="cls-1" d="M309.01,3740.99H296.62v3.94h-8.913v-3.94h-12.39v3.94H266.4v-3.94h-12.39v52.06h10.652v3.94h12.39v-3.94h8.913v3.94h12.391v-3.94H309.01v-52.06Zm-53.259,50.38v-48.71h8.914v48.71h-8.914Zm19.566,3.94H266.4V3746.6h8.914v48.71Zm1.738-3.94v-48.71h8.913v48.71h-8.913Zm19.565,3.94h-8.913V3746.6h8.913v48.71Zm10.652-3.94h-8.913v-48.71h8.913v48.71Z" transform="translate(-254 -3741)"/></svg>
                        </div>
                        <span className="text">30mm x 20mm</span>
                      </li>

                      <li>
                        <div className="block-iconwrap">
                          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56"><path class="cls-1" d="M309.01,3740.99H296.62v3.94h-8.913v-3.94h-12.39v3.94H266.4v-3.94h-12.39v52.06h10.652v3.94h12.39v-3.94h8.913v3.94h12.391v-3.94H309.01v-52.06Zm-53.259,50.38v-48.71h8.914v48.71h-8.914Zm19.566,3.94H266.4V3746.6h8.914v48.71Zm1.738-3.94v-48.71h8.913v48.71h-8.913Zm19.565,3.94h-8.913V3746.6h8.913v48.71Zm10.652-3.94h-8.913v-48.71h8.913v48.71Z" transform="translate(-254 -3741)"/></svg>
                        </div>
                        <span className="text">30mm x 20mm</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="shape__column">
                    <span className="title">block profile</span>
                    <ul className="block-icons">
                      <li>
                        <div className="block-iconwrap">
                          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56"><path class="cls-1" d="M309.01,3740.99H296.62v3.94h-8.913v-3.94h-12.39v3.94H266.4v-3.94h-12.39v52.06h10.652v3.94h12.39v-3.94h8.913v3.94h12.391v-3.94H309.01v-52.06Zm-53.259,50.38v-48.71h8.914v48.71h-8.914Zm19.566,3.94H266.4V3746.6h8.914v48.71Zm1.738-3.94v-48.71h8.913v48.71h-8.913Zm19.565,3.94h-8.913V3746.6h8.913v48.71Zm10.652-3.94h-8.913v-48.71h8.913v48.71Z" transform="translate(-254 -3741)"/></svg>
                        </div>
                        <span className="text">30mm x 20mm</span>
                      </li>
                      <li>
                        <div className="block-iconwrap">
                          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56"><path class="cls-1" d="M309.01,3740.99H296.62v3.94h-8.913v-3.94h-12.39v3.94H266.4v-3.94h-12.39v52.06h10.652v3.94h12.39v-3.94h8.913v3.94h12.391v-3.94H309.01v-52.06Zm-53.259,50.38v-48.71h8.914v48.71h-8.914Zm19.566,3.94H266.4V3746.6h8.914v48.71Zm1.738-3.94v-48.71h8.913v48.71h-8.913Zm19.565,3.94h-8.913V3746.6h8.913v48.71Zm10.652-3.94h-8.913v-48.71h8.913v48.71Z" transform="translate(-254 -3741)"/></svg>
                        </div>
                        <span className="text">30mm x 20mm</span>
                      </li>
                      <li>
                        <div className="block-iconwrap">
                          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56"><path class="cls-1" d="M309.01,3740.99H296.62v3.94h-8.913v-3.94h-12.39v3.94H266.4v-3.94h-12.39v52.06h10.652v3.94h12.39v-3.94h8.913v3.94h12.391v-3.94H309.01v-52.06Zm-53.259,50.38v-48.71h8.914v48.71h-8.914Zm19.566,3.94H266.4V3746.6h8.914v48.71Zm1.738-3.94v-48.71h8.913v48.71h-8.913Zm19.565,3.94h-8.913V3746.6h8.913v48.71Zm10.652-3.94h-8.913v-48.71h8.913v48.71Z" transform="translate(-254 -3741)"/></svg>
                        </div>
                        <span className="text">30mm x 20mm</span>
                      </li>
                      <li>
                        <div className="block-iconwrap">
                          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56"><path class="cls-1" d="M309.01,3740.99H296.62v3.94h-8.913v-3.94h-12.39v3.94H266.4v-3.94h-12.39v52.06h10.652v3.94h12.39v-3.94h8.913v3.94h12.391v-3.94H309.01v-52.06Zm-53.259,50.38v-48.71h8.914v48.71h-8.914Zm19.566,3.94H266.4V3746.6h8.914v48.71Zm1.738-3.94v-48.71h8.913v48.71h-8.913Zm19.565,3.94h-8.913V3746.6h8.913v48.71Zm10.652-3.94h-8.913v-48.71h8.913v48.71Z" transform="translate(-254 -3741)"/></svg>
                        </div>
                        <span className="text">30mm x 20mm</span>
                      </li>

                      <li>
                        <div className="block-iconwrap">
                          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56"><path class="cls-1" d="M309.01,3740.99H296.62v3.94h-8.913v-3.94h-12.39v3.94H266.4v-3.94h-12.39v52.06h10.652v3.94h12.39v-3.94h8.913v3.94h12.391v-3.94H309.01v-52.06Zm-53.259,50.38v-48.71h8.914v48.71h-8.914Zm19.566,3.94H266.4V3746.6h8.914v48.71Zm1.738-3.94v-48.71h8.913v48.71h-8.913Zm19.565,3.94h-8.913V3746.6h8.913v48.71Zm10.652-3.94h-8.913v-48.71h8.913v48.71Z" transform="translate(-254 -3741)"/></svg>
                        </div>
                        <span className="text">30mm x 20mm</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <ProductInstallation data={productInstallation} />
            <div className="useful__info">
              <div className="general-heading">
                <h2>Useful Info</h2>
              </div>
              <div className="info__slider row">
                {userLinks ? userLinks.map((link, index) => (
                  <div className="col-sm-3" key={index}>
                    <div className="article__box">
                      <div className="icon_box">
                        <div dangerouslySetInnerHTML={{ __html: link.useful_icon }} />
                      </div>
                      <h4>{link.userful_info_heading}</h4>
                      <p dangerouslySetInnerHTML={{ __html: link.useful_info_text }} />
                      <Link className="link" to={link.useful_info_link}>{link.useful_info_link_text}</Link>
                    </div>
                  </div>
                )) : null }
              </div>
            </div>
            <ProductFaq data={productFAQ} />
          </div>
        </div>
        <PricingBlock data={productPricing} />
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
        main_banner_sub_heading
        main_banner_heading
        main_banner_image_overlay
        main_banner_buttons {
          button_text
          button_style
          button_link
        }
        main_banner_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        product_title
        product_overview_aside_title
        product_aside_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        product_description
        product_benefit_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        product_benefit_title
        product_benefit_columns {
          benefit_or_button
          button_text
          button_link
          icon_svg
          benefit_title
          benefit_description
        }
        structural_svg
        interior_svg
        exterior_svg
        application_content
        application_gallery_image {
          gallery_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          image_title
          image_application_tag
        }
        timber_species {
          timber_small_thumbnail {
            localFile {
              childImageSharp {
                fluid(maxWidth: 250) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          timber_title
          timber_finishes_download_text
          timber_finishes_button_style
          timber_finishes {
            finishes_image_thumbnail {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            finishes_title
          }
        }
        shape_and_size_title
        batten_shapes {
          shape_and_size_title
          shape_icons {
            shape_svg
            shape_title
          }
        }
        installation_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        installation_title
        installation_description
        installation_button_text
        installation_button_link
        installation_button_style
        useful_info {
          useful_icon
          userful_info_heading
          useful_info_text
          useful_info_link_text
        }
        faq_title
        faqs {
          faq_title
          faq_content
        }
        pricing_title
        pricing_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 650) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        pricing_description
        request_block_heading
        request_sample_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        request_sample_description
        timber_species {
          timber_title
          timber_finishes_button_style
          timber_finishes_download_text
          timber_finishes {
            finishes_title
          }
        }
      }
    }
  }
`