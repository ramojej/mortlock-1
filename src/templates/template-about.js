import React, { Component } from "react";
import { graphql } from "gatsby";

import Banner from '../components/global/banner';
import SubMenu from '../components/global-subnav';
import Layout from '../components/layout';

import AboutHistory from "../components/about/block-history";
import AboutMission from "../components/about/block-value";
import AboutSustainability from "../components/about/block-sustainability";
import AboutArchitects from "../components/about/block-architects";

class Page extends Component {
  render() {
    const bannerContent = {
      banner_image: this.props.data.allWordpressPage.edges[0].node.acf.banner_image,
      banner_image_overlay: this.props.data.allWordpressPage.edges[0].node.acf.banner_image_overlay,
      banner_heading: this.props.data.allWordpressPage.edges[0].node.acf.banner_heading,
      banner_description: this.props.data.allWordpressPage.edges[0].node.acf.banner_description,
      banner_buttons: this.props.data.allWordpressPage.edges[0].node.acf.banner_buttons
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

    return (
      <Layout>
        <Banner data={bannerContent} type="homepag" />
        <SubMenu />
        <AboutHistory data={aboutHistory} />
        <AboutMission data={aboutMission} />
        <AboutSustainability data={aboutSustainability} />
        <AboutArchitects data={aboutArchitect} />
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query {
    allWordpressPage(filter: {path: {eq: "/about/"}}) {
      edges {
        node {
          acf {
            banner_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            banner_image_overlay
            banner_description
            banner_heading
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