import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";

import Layout from '../components/layout';
import Banner from '../components/global/banner';

class Project extends Component {
  render() {
    const pageData = this.props.data.wordpressWpProject



    console.log(pageData);

    const bannerContent = {
      banner_image: pageData.featured_media,
      banner_image_overlay: pageData.acf.banner_image_overlay,
      banner_heading: pageData.acf.project_title,
      banner_description: pageData.acf.project_location,
      banner_buttons: pageData.acf.banner_buttons,
      banner_type: 'project'
    }
    return (
      <Layout>
        <SEO 
          description={pageData.yoast.metadesc} 
          title={pageData.yoast.title} 
        />
        <Banner data={bannerContent} />
        <div className="project__detail">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <h2 className="project_heading" dangerouslySetInnerHTML={{ __html: pageData.acf.about_heading }} />
              </div>
              <div className="col-sm-8">
                <div className="project_content" dangerouslySetInnerHTML={{ __html: pageData.acf.about_description }} />
              </div>
            </div>
            <div className="project_infos">
              <div className="row">
                {pageData.acf.project_info.map((info, index) => (
                  (index < 1) ? 
                    <div className="col-sm-4" key={index}><span className="project__info"><span className="title">{info.info_title}</span><span className="info">{info.info_description}</span></span></div> : null
                ))}
                <div className="col-sm-8">
                  <div className="row">
                    {pageData.acf.project_info.map((info, index) => (
                      (index >= 1) ? 
                        <div className="col-sm-4" key={index}><span className="project__info"><span className="title">{info.info_title}</span><span className="info">{info.info_description}</span></span></div> : null
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="video__wrapper">
              <Img fluid={pageData.acf.project_video_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
            </div>
            <div className="spec__wrapper">
              <div className="row">
                <div className="col-sm-4">
                  <div className="spec__image">
                    <Img fluid={pageData.acf.specification_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="spec__column">
                    <h2>{pageData.acf.specification_heading}</h2>
                    <div className="spec__box" dangerouslySetInnerHTML={{ __html: pageData.content }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery__wrapper">
              <div className="row">
                <div className="col-sm-4">
                  <div className="gallery_image">
                    image
                  </div>
                  <div className="gallery_image">
                    image
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="gallery_image">
                    image
                  </div>
                  <div className="gallery_image">
                    image
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="gallery_image">
                    image
                  </div>
                  <div className="gallery_image">
                    image
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Project

export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpProject(id: { eq: $id }) {
      yoast {
        title
        metadesc
      }
      title
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
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
        about_heading
        about_description
        specification_heading
        specification_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        project_info {
          info_description
          info_title
        }
        project_video_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        gallery_images {
          gallery_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`