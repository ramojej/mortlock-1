import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const Header = ({ data }) => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allWordpressMenusMenusItems(filter: {slug: {in: ["header-top", "main-navigation"]}}) {
          edges {
            node {
              count
              items {
                title
                url
                wordpress_id
                slug
                classes
                child_items {
                  title
                  slug
                  classes
                  wordpress_id
                }
              }
            }
          }
        }

        allWordpressAcfOptions {
          edges {
            node {
              options {
                main_header_logo {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
                header_phone_number
                header_button_text
                header_button_link
              }
            }
          }
        }

      }
    `}

    render={data => (
      <header className="header">
        <nav className="header__top">
          <div className="container container__big">
            <ul className="headertop__nav">
              {data.allWordpressMenusMenusItems.edges[0].node.items.map((menu) => (
              <li key={menu.wordpress_id}><Link to={"/" + menu.slug}>{menu.title}</Link></li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="header__bottom">
          <div className="container container__big">
            <div className="header__bottomwrap">
              <div className="header__logo">
                <Link to="/">
                  <Img fluid={data.allWordpressAcfOptions.edges[0].node.options.main_header_logo.localFile.childImageSharp.fluid} alt="Alternative Text" />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="main__nav">
                  {data.allWordpressMenusMenusItems.edges[1].node.items.map((menu) => (
                    <li key={menu.wordpress_id} className={(menu.classes !== '') ? menu.classes : null}>
                      <Link to={"/" + menu.slug}>{menu.title} {(() => {if(menu.child_items != null) return ( <svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m49.938 55.984-37.711-36.293-12.227 12.742 49.938 47.875 50.062-47.875-12.227-12.742z" /></svg> )})()}</Link>
                      {(() => {
                        if(menu.child_items != null) return (
                          <>
                          {(() => {
                            if(menu.classes.includes('megamenu')) return(
                              <div className="dropdown">
                                <div className="container">
                                  <div className="row">
                                    {menu.child_items.map((submenu) => (
                                        <div className="col-sm-4" key={submenu.wordpress_id}>
                                          <div className="menubox">
                                            <span className="menuTitle">{submenu.title}</span>
                                            <p>Durable Timber Decking Profile</p>
                                            <div className="imagebox">
                                              <Img fluid={data.allWordpressAcfOptions.edges[0].node.options.main_header_logo.localFile.childImageSharp.fluid} alt="Alternative Text" />
                                            </div>
                                            <div className="more">
                                              <Link to={"/" + submenu.slug}>Learn more</Link>
                                            </div>
                                          </div>
                                        </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )
                            return (
                              <div className="dropdown">
                                <ul>
                                  {menu.child_items.map((submenu) => (
                                    <li key={submenu.wordpress_id} className={(menu.classes !== '') ? menu.classes : null}><Link to={"/" + submenu.slug}>{submenu.title}</Link></li>
                                  ))}
                                </ul>
                              </div>
                            )
                          })()}
                          </>
                        )
                      })()}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="header__meta">
              <div className="header__phone">
                <a href={`tel:${data.allWordpressAcfOptions.edges[0].node.options.header_phone_number}`}><svg className="icon" viewBox="0 0 100 100"><path d="m37.496 38.379 3.3438-5.0078c1.0312-1.5508 1.0547-3.5703 0.054687-5.1406l-10.008-15.73-11.914 3.9688c-4.8359 1.6133-7.5859 6.8008-6.043 11.66 2.6914 8.4609 8.875 21.926 22.949 35.992 14.066 14.07 27.527 20.254 35.992 22.949 4.8594 1.5469 10.047-1.207 11.66-6.0469l3.9648-11.906-15.723-10.008c-1.5742-1.0039-3.5938-0.98438-5.1445 0.050781l-5.0078 3.3398c-1.5312 1.0195-3.5039 1.0781-5.0664 0.10547-2.5469-1.582-6.6211-4.4062-10.688-8.4766-4.0703-4.0664-6.8945-8.1367-8.4727-10.684-0.97266-1.5625-0.91797-3.5352 0.10156-5.0664"/></svg> {data.allWordpressAcfOptions.edges[0].node.options.header_phone_number}</a>
              </div>
              <div className="header__button">
                <Link to={data.allWordpressAcfOptions.edges[0].node.options.header_button_link} className="button">{data.allWordpressAcfOptions.edges[0].node.options.header_button_text}</Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      </header>
    )}
  />
)

export default Header