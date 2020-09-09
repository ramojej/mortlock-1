import React, { Component } from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

class Page extends Component {
  constructor(props) {
    super(props)

    //initiating the arrays
    let projectCategories = props.data.allWordpressWpProjectCategory.edges
    let products = []
    let productTypes = []
    let projectTypes = []
    projectCategories.forEach(category => {
      if (category.node.slug.includes("product-type"))
        productTypes.push(category.node)
      else if (category.node.slug.includes("timber"))
        projectTypes.push(category.node)
      else products.push(category.node)
    })

    this.state = {
      activeFilter: false,
      content: props,
      page: props.data.allWordpressPage,
      filterCategories: [], // contains categories ids that needs to be filtered
      products, //contains product categories objects
      productTypes,
      projectTypes,
      filteredProjects: [],
      filtering: false,
    }

    this.toggleVisibility = this.toggleVisibility.bind(this)
  }

  toggleVisibility() {
    this.setState({
      activeFilter: !this.state.activeFilter,
    })
  }

  handleCheck = e => {
    let newfilterCategories = this.state.filterCategories
    let id = e.target.id
    let filtering = true

    //---Update the category Array (filterCategories)
    if (e.target.checked) {
      //checking the box
      newfilterCategories.push(parseInt(id))
      filtering = true
    } else {
      //unchecking the box
      newfilterCategories = newfilterCategories.filter(
        categoryId => categoryId !== parseInt(id)
      )
      if (newfilterCategories.length === 0) filtering = false
    }

    //---Update the projects Array (filtered)
    let filterd = [] //reset
    let allProjects = this.state.content.pageContext.projects
    allProjects.forEach(project => {
      //filter the projects according to the filterCategories array
      if (
        project.node.project_category.some(id => {
          return newfilterCategories.indexOf(id) === -1 ? false : true
        })
      )
        if (filterd.indexOf(project.node) === -1) filterd.push(project.node) //add the project to filterd array //no duplicates are allowed
    })

    this.setState({
      filterCategories: newfilterCategories,
      filteredProjects: filterd,
      filtering,
    })
  }


  render() {
    const paginationStyle = {
      display: "none",
    }

    return (
      <Layout>
        <SEO 
          description={this.state.page.edges[0].node.yoast.metadesc} 
          title={this.state.page.edges[0].node.yoast.title} 
        />
        <div className="blog__wrapper">
          <div className="container">
            <div className="blog__heading">
              <h1>Projects</h1>
              <div className="article__metas">
                <span role="button" tabIndex={0} className="filter__button" onKeyDown={ this.toggleVisibility } onClick={ this.toggleVisibility }>{!this.state.activeFilter ? <span>Show Filters <i>+</i></span> : <span>Hide Filters <i>-</i></span> } </span>
              </div>
              <div className={ this.state.activeFilter ? 'head_filter__content filter--active' : 'head_filter__content' }>
                <div className="row aside">
                  <div className="col-sm-4">
                    <span className="title">Product</span>
                    <ul className="list">
                      {this.state.products.map(product => (
                        <li key={product.id}>
                          <label
                            className="custom-check"
                            htmlFor={product.wordpress_id}
                          >
                            <input
                              role="button"
                              type="checkbox"
                              aria-label={product.name}
                              id={product.wordpress_id}
                              name={product.id}
                              onChange={this.handleCheck}
                            />
                            <span className="custom-text">{product.name}</span>
                            <span className="custom-box"></span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-sm-4">
                    <span className="title">Application</span>
                    <ul className="list">
                      {this.state.productTypes.map(product => (
                        <li key={product.id}>
                          <label
                            className="custom-check"
                            htmlFor={product.wordpress_id}
                          >
                            <input
                              type="checkbox"
                              id={product.wordpress_id}
                              aria-label={product.name}
                              name={product.name}
                              onChange={this.handleCheck}
                            />
                            <span className="custom-text">{product.name}</span>
                            <span className="custom-box"></span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-sm-4">
                    <span className="title">Timber Species</span>
                    <ul className="list">
                      {this.state.projectTypes.map(product => (
                        <li key={product.name}>
                          <label
                            className="custom-check"
                            htmlFor={product.wordpress_id}
                          >
                            <input
                              type="checkbox"
                              id={product.wordpress_id}
                              aria-label={product.name}
                              name={product.name}
                              onChange={this.handleCheck}
                            />
                            <span className="custom-text">{product.name}</span>
                            <span className="custom-box"></span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="project__wrapper">
              <div className="project__content">
              <div className="row">
                  {/* do not apply filter if this.state.filtering is false */}
                  {!this.state.filtering
                    ? this.state.content.data.allWordpressWpProject.edges.map(
                        post => (
                          <div
                            className="col-sm-6"
                            key={post.node.wordpress_id}
                          >
                            <div className="project_article">
                              <div className="blog_image">
                                { post.node.featured_media && <div className="bg_image" style={{ backgroundImage: `url(${post.node.featured_media.link})` }}></div> }
                                <div className="image_overlay">
                                  <Link
                                    className="button primary"
                                    to={post.node.path}
                                  >
                                    View Project
                                  </Link>
                                </div>
                              </div>
                              <div className="project_desc">
                                <h3><Link to={post.node.path} dangerouslySetInnerHTML={{ __html: post.node.title }} />
                                </h3>
                                <span className="location" dangerouslySetInnerHTML={{ __html: post.node.acf.project_banner_description }} />
                              </div>
                            </div>
                          </div>
                        )
                      )
                    : //DO apply filter if this.state.filtering is true
                      this.state.filteredProjects.map(post => (
                        <div className="col-sm-6" key={post.id}>
                          <div className="project_article">
                            <div className="blog_image">
                              { post.featured_media && <div className="bg_image" style={{ backgroundImage: `url(${post.featured_media.link})` }}></div> }
                              <div className="image_overlay">
                                <Link className="button primary" to={post.path}>
                                  View Project
                                </Link>
                              </div>
                            </div>
                            <div className="project_desc">
                              <h3>
                                <Link to={post.path}>{post.title}</Link>
                              </h3>
                              {/* <span className="location">
                                  {post.node.acf.project_banner_description}
                                </span> */}
                            </div>
                          </div>
                        </div>
                      ))}
                </div>
              </div>
            </div>
            <div className="pagination" style={this.state.filtering ? paginationStyle : {}}>
              <span className="title">Pages</span>
              <ul className="pages">
                {Array.from({ length: this.state.content.pageContext.numberOfProjects }).map((page, index) =>  (
                  <li key={index} className={index + 1 === this.state.content.pageContext.currentPage ? 'active' : null }>
                    <Link to={index === 0 ? this.state.content.pageContext.actualPath : `${this.state.content.pageContext.actualPath}${index + 1}`}>{index + 1}</Link>
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
            alt_text
            link
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
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

    allWordpressPage(filter: {template: {eq: "template-portfolio-parent.php"}}) {
      edges {
        node {
          yoast {
            title
            metadesc
          }
        }
      }
    }

    allWordpressWpProjectCategory {
      edges {
        node {
          id
          name
          wordpress_id
          slug
        }
      }
    }
  }
`;