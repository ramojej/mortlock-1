import React, { Component } from "react";
import { graphql, Link } from "gatsby";

import BackgroundImage from 'gatsby-background-image';

import Layout from "../components/layout";
import SEO from "../components/seo";

class Page extends Component {
  render() {
    const data = this.props

    return (
      <Layout>
        <SEO 
          description={this.props.data.allWordpressWpProject.edges[0].node.yoast.metadesc} 
          title={this.props.data.allWordpressWpProject.edges[0].node.yoast.title} 
        />
        <div className="blog__wrapper">
          <div className="container">
            <div className="blog__heading">
              <h1>Portfolio</h1>
              <div className="article__metas">
                <span className="filter__button">Show Filters <i>+</i></span>
              </div>
            </div>
            <div className="project__wrapper">
              <div className="filter__wrapper filter--active">
                <span className="filter__button">Hide Filters <i>-</i></span>
                <div className="aside">
                  <span className="title">Product</span>
                  <ul className="list">
                    <li>
                      <label className="custom-check" htmlFor="timber">
                        <input role="button" type="checkbox" aria-label="Timber" id="timber" name="timber"/>
                        <span className="custom-text">Timber Decking</span>
                        <span className="custom-box"></span>
                      </label>
                    </li>
                    <li>
                      <label className="custom-check" htmlFor="timber1">
                        <input type="checkbox" id="timber1" aria-label="Timber" name="timber1"/>
                        <span className="custom-text">Timber Decking</span>
                        <span className="custom-box"></span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="aside">
                  <span className="title">Project Type</span>
                  <ul className="list">
                    <li>
                      <label className="custom-check" htmlFor="residential">
                        <input type="checkbox" id="residential" aria-label="Timber" name="residential" />
                        <span className="custom-text">Residential</span>
                        <span className="custom-box"></span>
                      </label>
                    </li>
                    <li>
                      <label className="custom-check" htmlFor="residential1">
                        <input type="checkbox" id="residential1" aria-label="Timber" name="residential1" />
                        <span className="custom-text">Residential</span>
                        <span className="custom-box"></span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project__content filter--active">
                <div className="row">
                  {data.data.allWordpressWpProject.edges.map(post => (
                    <div className="col-sm-6" key={post.node.wordpress_id}>
                      <div className="project_article">
                        <div className="blog_image">
                          { post.node.featured_media ? <BackgroundImage fluid={post.node.featured_media.localFile.childImageSharp.fluid} alt="Alternative Text" /> : 'image' }
                          <div className="image_overlay">
                            <Link className="button primary" to={post.node.path}>View Project</Link>
                          </div>
                        </div>
                        <div className="project_desc">
                        <h3><Link to={post.node.path}>{post.node.title}</Link></h3>
                        <span className="location">{post.node.acf.project_banner_description}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pagination">
              <span className="title">Pages</span>
              <ul className="pages">
                {Array.from({ length: data.pageContext.numberOfProjects }).map((page, index) =>  (
                  <li key={index} className={index + 1 === data.pageContext.currentPage ? 'active' : null }>
                    <Link to={index === 0 ? data.pageContext.actualPath : `${data.pageContext.actualPath}${index + 1}`}>{index + 1}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allWordpressWpProject(sort: {fields: [date], order:DESC}, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          title
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          slug
          path
          project_category
          wordpress_id
          acf {
            project_banner_description
          }
          yoast {
            title
            metadesc
          }
        }
      }
    }
  }
`;