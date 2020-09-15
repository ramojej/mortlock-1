import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

import LayoutLanding from "../components/layout-landing";
import SEO from "../components/seo";
import Button from "../components/global/button";

import GlobalTestimonialSlider from "../components/global-testimonial-slider";

class Page extends Component {
  render() {
    const bannerContent = {
      banner_image: this.props.data.wordpressPage.acf.landing_page_banner_image,
      banner_image_overlay: this.props.data.wordpressPage.acf.landing_page_banner_image_overlay,
      banner_heading: this.props.data.wordpressPage.acf.landing_page_banner_heading,
      banner_description: this.props.data.wordpressPage.acf.landing_page_banner_subheading,
      banner_buttons: this.props.data.wordpressPage.acf.landing_page_banner_buttons
    }
    
    const latestTestomonial = {
      testimonialHeading: this.props.data.allWordpressAcfOptions.edges[0].node.options.client_testimonials_heading,
      allTestimonials: this.props.data.allWordpressAcfOptions.edges[0].node.options.client_testimonials,
    }
    const product_features = this.props.data.wordpressPage.acf.product_features;

    return (
      <LayoutLanding>
        <SEO 
          description={this.props.data.wordpressPage.yoast.metadesc ? this.props.data.wordpressPage.yoast.metadesc : null} 
          title={this.props.data.wordpressPage.yoast.title ? this.props.data.wordpressPage.yoast.title : 'Mortlock Timber'} 
        />
        <div className="inner__banner large">
          <div className="bg__image has-overlay">
            { bannerContent.banner_image ? <BackgroundImage fluid={bannerContent.banner_image.localFile.childImageSharp.fluid} /> : null }
          </div>
          <div className="container">
            <div className="inner__bannerbox">
              <div className="box" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5">
                <h1 className={ !bannerContent.banner_description ? "text-center" : null } dangerouslySetInnerHTML={{ __html: bannerContent.banner_heading }} />
                { bannerContent.banner_description ? <span className="inner__bannertext" dangerouslySetInnerHTML={{ __html: bannerContent.banner_description }} /> : null }
                { bannerContent.banner_buttons ?
                  <div className="inner__bannerbuttons">
                    {bannerContent.banner_buttons.map((button, index) => (
                      (index === 1) ? 
                      <Button type="external" link={button.landing_page_banner_button_link} text={button.landing_page_banner_button_text} style={button.landing_page_banner_button_style} key={index} /> : 
                      <Button link={button.landing_page_banner_button_link} text={button.landing_page_banner_button_text} style={button.landing_page_banner_button_style} key={index} /> 
                    ))}
                  </div> : null }
              </div>
            </div>
          </div>
        </div>
        <div className="generaltext walls add">
          <div className="aside__text" dangerouslySetInnerHTML={{ __html: this.props.data.wordpressPage.acf.introduction_aside_heading }} />
          <div className="container">
            <div className="row middle-md reverse">
              <div className="col-sm-6 col-xlg-7">
                <div className="textBox" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5">
                  <div dangerouslySetInnerHTML={{ __html: this.props.data.wordpressPage.acf.introduction_description }} />
                  <div className="btnWrap">
                    <Link to={ this.props.data.wordpressPage.acf.introduction_button_link } className="button-learn">{ this.props.data.wordpressPage.acf.introduction_button_text } <span className="btnArrow"><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"/></svg></span></Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xlg-5">
                <div className="image__wrap">
                  <Img fluid={this.props.data.wordpressPage.acf.introduction_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="use__block">
          <div className="container">
            <div className="row">
              { product_features.map((product, index) => (
                <div className="col-sm-3" key={index}>
                  <div className="icon__box">
                    <div className="ico_wrap" dangerouslySetInnerHTML={{ __html: product.product_icon_svg_code }} />
                    <h3 dangerouslySetInnerHTML={{ __html:product.feature_title }} />
                    <div dangerouslySetInnerHTML={{ __html:product.feature_description }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="subtainability__block">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h2 dangerouslySetInnerHTML={{ __html: this.props.data.wordpressPage.acf.product_description_heading }} />
                <div dangerouslySetInnerHTML={{ __html: this.props.data.wordpressPage.acf.product_text_description }} />
                <div className="button_wrap">
                  {this.props.data.wordpressPage.acf.product_description_buttons.map((button,index) => (
                    <Link to={ button.description_button_link } className="button-learn">{ button.description_button_text } <span className="btnArrow"><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"/></svg></span></Link>
                  ))}
                </div>
              </div>
              <div className="col-sm-offset-1 col-sm-5">
                <div className="sustainability_image">
                  <Img fluid={this.props.data.wordpressPage.acf.product_description_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="why__product">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <div className="sustainability_image">
                  <Img fluid={this.props.data.wordpressPage.acf.what_client_say_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" />
                </div>
              </div>
              <div className="col-sm-7">
                <h2>sustainability</h2>
                <p>New Jarrah is a sustainable, renewable resource, exclusively harvested from regrowth forests in WA.</p>
                <p>Sustainable forest management in WA is governed by a comprehensive legislative framework and management procedures. Sustainable forest management balances ecological, economic and socio-cultural values of the forest.</p>
                <p>WA adheres to strict guidelines and policies for timber harvesting, namely the Forest Management Plan and the WA Regional Forest Agreement. Both are legally binding documents prepared through scientific research and consultation, and are regularly formally reviewed to ensure compliance and that the standards within maintain their world class status.</p>
                <p>In WA the Forest Products Commission conducts commercial forest operations through sustainable practices and operates under the Forest Products Act 2000. The Forest Products Commission is certified to the Australian Forestry Standard (AS4708:2013) and the international standard for Environmental Management Systems (ISO 14001:2015).</p>
                <p>All native forests harvested in WA are regenerated or replanted each year.</p>
                <div className="button_wrap">
                  button
                  button
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="article__where">
          <div className="container">
            <h2>Where it can be used</h2>
            <div className="row">
              
            </div>
          </div>
        </div>
        Landing Page
        <GlobalTestimonialSlider contentData={latestTestomonial}  />
      </LayoutLanding>
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
        landing_page_banner_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        landing_page_banner_image_overlay
        landing_page_banner_heading
        landing_page_banner_subheading
        landing_page_banner_buttons {
          landing_page_banner_button_text
          landing_page_banner_button_link
          landing_page_banner_button_style
        }
        introduction_aside_heading
        introduction_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        introduction_description
        introduction_button_text
        introduction_button_link
        introduction_button_style
        product_features {
          product_icon_svg_code
          feature_title
          feature_description
        }
        product_description_heading
        product_text_description
        product_description_buttons {
          description_button_text
          description_button_link
          description_button_style
        }
        product_description_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        why_this_product_main_heading
        what_client_say_text
        what_client_say_link
        what_client_say_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        description_column_one
        description_column_two
        why_product_button_text
        why_product_button_link
        why_product_button_style
        where_can_it_be_used {
          using_image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          using_product_title
          using_product_description
        }
        where_to_use_button_text
        where_to_use_button_link
        where_to_use_button_style
        client_saying_text
        client_saying_link
        decking_options_aside_title
        decking_option_main_heading
        decking_option_description
        decking_options_text_description {
          decking_options_image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          description_option_description
          decking_option_button_text
          decking_option_button_link
        }
        product_pricing_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        product_pricing_heading
        product_pricing_description
        show_testimonial_block_in_landing_page
      }
    }

    allWordpressAcfOptions {
      edges {
        node {
          options {
            client_testimonials_heading
            client_testimonials {
              client_name
              client_quote
              client_titleposition
            }
            success_stories_heading
            success_stories {
              video_thumbnail {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              video_link
              success_client_quote
              success_client_position__title
              success_client_name
            }
          }
        }
      }
    }
  }
`