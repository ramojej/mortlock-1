import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

class Page extends Component {
  render() {

    return (
      <Layout>
        Portfolio Parent page
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "template-portfolio-parent.php"}}) {
      edges {
        node {
          acf {
            banner_heading
          }
        }
      }
    }
  }
`