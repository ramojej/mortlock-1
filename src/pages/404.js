import React from "react"
import { Link } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not found" />
    <div className="general__wrappper">
      <div className="container text-center">
        <h1>NOT FOUND !</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/" className="button">Back to home</Link>
      </div>
    </div>
    
    
    
  </Layout>
)

export default NotFoundPage
