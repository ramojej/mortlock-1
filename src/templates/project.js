import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";

import Layout from '../components/layout';
import Banner from '../components/global/banner';

class Project extends Component {
  render() {
    const pageData = this.props.data.wordpressWpProject;

    const bannerContent = {
      banner_image: pageData.acf.project_banner_image,
      banner_image_overlay: pageData.acf.project_banner_image_overlay,
      banner_heading: pageData.acf.project_banner_heading,
      banner_description: pageData.acf.project_banner_description,
      banner_buttons: pageData.acf.project_banner_buttons,
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
                { (pageData.acf.about_heading || pageData.acf.about_heading === undefined ) ? <h2 className="project_heading" dangerouslySetInnerHTML={{ __html: pageData.acf.about_heading }} /> : null }
              </div>
              <div className="col-sm-8">
                { pageData.acf.about_description ? <div className="project_content" dangerouslySetInnerHTML={{ __html: pageData.acf.about_description }} /> : null }
              </div>
            </div>
            {/* <div className="project_infos">
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
            </div> */}
            <div className="video__wrapper">
              { pageData.acf.project_video_image ? <Img fluid={pageData.acf.project_video_image.localFile.childImageSharp.fluid} alt="Alternative Text" /> : null }
            </div>
            <div className="spec__wrapper">
              <div className="row">
                <div className="col-sm-4">
                  <div className="spec__image">
                    { pageData.acf.specification_image ? <Img fluid={pageData.acf.specification_image.localFile.childImageSharp.fluid} alt="Alternative Text" /> : null }
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
                {
                  pageData.acf.gallery_images ? 
                  pageData.acf.gallery_images.map((image, index) => (
                      <div className="col-sm-4">
                        <div className="image">
                          <Img fluid={image.gallery_image.localFile.childImageSharp.fluid} alt="Alternative Text" />
                        </div>
                      </div>
                  )) : null 
                }
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
        project_banner_heading
        project_banner_image_overlay
        project_banner_description
        project_banner_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        project_banner_buttons {
          button_link
          button_style
          button_text
        }
        about_heading
        about_description
        gallery_images {
          gallery_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        project_info {
          info_title
          info_description
        }
        project_video_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        specification_heading
        specification_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`