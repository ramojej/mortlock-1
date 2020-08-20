import React, { Component } from "react";
import { graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';

import SEO from "../components/seo";
import SubMenu from '../components/global-subnav';
import Layout from '../components/layout';
import Button from "../components/global/button";

import AboutHistory from "../components/about/block-history";
import AboutMission from "../components/about/block-value";
import AboutSustainability from "../components/about/block-sustainability";
import AboutArchitects from "../components/about/block-architects";

class Page extends Component {
  render() {

    const bannerContent = {
      banner_image: this.props.data.allWordpressPage.edges[0].node.acf.about_banner_image,
      banner_image_overlay: this.props.data.allWordpressPage.edges[0].node.acf.about_banner_image_overlay,
      banner_heading: this.props.data.allWordpressPage.edges[0].node.acf.about_banner_heading,
      banner_description: this.props.data.allWordpressPage.edges[0].node.acf.about_banner_sub_heading,
      banner_buttons: this.props.data.allWordpressPage.edges[0].node.acf.about_banner_buttons
    }

    const aboutHistory = {
      history_title: this.props.data.allWordpressPage.edges[0].node.acf.history_title,
      history_aside_text: this.props.data.allWordpressPage.edges[0].node.acf.history_aside_text,
      history_year: this.props.data.allWordpressPage.edges[0].node.acf.history_year,
      history_info: this.props.data.allWordpressPage.edges[0].node.acf.history_info,
      history_image: this.props.data.allWordpressPage.edges[0].node.acf.history_image,
      history_second_heading: this.props.data.allWordpressPage.edges[0].node.acf.history_second_heading,
      history_text_block: this.props.data.allWordpressPage.edges[0].node.acf.history_text_block
    }

    const aboutMission = {
      our_mission_text: this.props.data.allWordpressPage.edges[0].node.acf.our_mission_text,
      our_mission_image: this.props.data.allWordpressPage.edges[0].node.acf.our_mission_image,
      mission_aside_text: this.props.data.allWordpressPage.edges[0].node.acf.mission_aside_text,
      our_vision_content: this.props.data.allWordpressPage.edges[0].node.acf.our_vision_content,
      our_vision_image: this.props.data.allWordpressPage.edges[0].node.acf.our_vision_image,
      our_value_boxes: this.props.data.allWordpressPage.edges[0].node.acf.our_value_boxes,
      our_value_heading: this.props.data.allWordpressPage.edges[0].node.acf.our_value_heading
    }

    const aboutSustainability = {
      section_main_heading: this.props.data.allWordpressPage.edges[0].node.acf.section_main_heading,
      sustainability_aside_heading: this.props.data.allWordpressPage.edges[0].node.acf.sustainability_aside_heading,
      sustainability_main_content: this.props.data.allWordpressPage.edges[0].node.acf.sustainability_main_content,
      sustainability_read_more_content: this.props.data.allWordpressPage.edges[0].node.acf.sustainability_read_more_content,
      sustainability_button_text: this.props.data.allWordpressPage.edges[0].node.acf.sustainability_button_text,
      sustainability_button_link: this.props.data.allWordpressPage.edges[0].node.acf.sustainability_button_link,
      sustainability_button_style: this.props.data.allWordpressPage.edges[0].node.acf.sustainability_button_style,
      sustainability_main_image: this.props.data.allWordpressPage.edges[0].node.acf.sustainability_main_image
    }

    const aboutArchitect = {
      architect_aside_heading: this.props.data.allWordpressPage.edges[0].node.acf.architect_aside_heading,
      architect_main_content: this.props.data.allWordpressPage.edges[0].node.acf.architect_main_content,
      architect_button_text: this.props.data.allWordpressPage.edges[0].node.acf.architect_button_text,
      architech_button_link: this.props.data.allWordpressPage.edges[0].node.acf.architech_button_link,
      architect_button_style: this.props.data.allWordpressPage.edges[0].node.acf.architect_button_style,
      architect_main_image: this.props.data.allWordpressPage.edges[0].node.acf.architect_main_image
    }

    const submenus = ['our-history', 'mission', 'sustainability', 'architects'];

    return (
      <Layout>
        <SEO 
          description={this.props.data.allWordpressPage.edges[0].node.yoast.metadesc} 
          title={this.props.data.allWordpressPage.edges[0].node.yoast.title} 
        />
        <div className='inner__banner'>
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
                      <Button type="external" link={button.about_banner_button_link} text={button.about_banner_button_text} style={button.about_banner_button_style} key={index} /> : 
                      <Button link={button.about_banner_button_link} text={button.about_banner_button_text} style={button.about_banner_button_style} key={index} /> 
                    ))}
                  </div> : null }
              </div>
            </div>
          </div>
        </div>
        <SubMenu data={submenus} />
        <AboutHistory id={submenus[0]} data={aboutHistory} />
        <AboutMission id={submenus[1]} data={aboutMission} />
        <AboutSustainability id={submenus[2]} data={aboutSustainability} />
        <AboutArchitects id={submenus[3]} data={aboutArchitect} />
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "template-about.php"}}) {
      edges {
        node {
          yoast {
            title
            metadesc
          }
          acf {
            about_banner_heading
            about_banner_buttons {
              about_banner_button_text
              about_banner_button_style
              about_banner_button_link
            }
            about_banner_image_overlay
            about_banner_sub_heading
            about_banner_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1170) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            history_title
            history_aside_text
            history_year
            history_info
            history_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1170) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            history_second_heading
            history_text_block {
              history_text_box
              history_image_alignment
              history_sub_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 700) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
            sustainability_main_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1170) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            section_main_heading
            sustainability_aside_heading
            sustainability_main_content
            sustainability_read_more_content
            sustainability_button_text
            sustainability_button_link
            sustainability_button_style
            architect_main_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1170) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            architect_aside_heading
            architect_main_content
            architect_button_text
            architech_button_link
            architect_button_style
            our_mission_text
            our_mission_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1500) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }       
            mission_aside_text
            our_vision_content
            our_vision_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 930) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            our_value_heading
            our_value_boxes {
              icon_svg_code
              article_title
              article_content
            }
          }
        }
      }
    }
  }
`