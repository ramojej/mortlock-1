import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from '../components/layout';

class Page extends Component {
  render() {
    const data = this.props
    console.log(data)
    return (
      <Layout>
        <div className="blog__wrapper">
          <div className="container">
            <div className="blog__heading">
              <h1>News</h1>
            </div>
            <div className="blog__content">
              <div className="row">
                {data.data.allWordpressPost.edges.map(post => (
                  <div className="col-sm-6" key={post.node.wordpress_id}>
                    <div className="blog_article">
                      <div className="blog_image">
                        { post.node.featured_media ? <Img fluid={post.node.featured_media.localFile.childImageSharp.fluid} alt="Alternative Text" /> : 'image' }
                      </div>
                      <div className="blog_meta">
                        { post.node.categories ? <span className="post_category">{post.node.categories.map((category, index) => ( <span key={index}>{category.name} </span> ))}</span> : null }
                        <span className="date">{post.node.date}</span>
                      </div>
                      <div className="blog_text">
                        <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                        <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }}  />
                        <Link to={post.node.slug}>Read more</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pagination">
              <span className="title">Pages</span>
              <ul className="pages">
                {Array.from({ length: data.pageContext.numberOfPages }).map((page, index) =>  (
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
    allWordpressPost(sort: {fields: [date], order:DESC}, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          date(formatString: "DD MMMM YYYY")
          title
          excerpt
          slug
          categories {
            name
          }
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 750) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;