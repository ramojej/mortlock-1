import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from '../components/layout';

class Post extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPost

    return (
      <Layout>
        <div className="single__wrapper">
          <h1>{StaticPage.title} I am all general Page</h1>
          <div dangerouslySetInnerHTML={{ __html: StaticPage.content }} />
        </div>
      </Layout>
    )
  }
}

export default Post

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`