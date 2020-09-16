import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby";

const LandingFooter = ({ data }) => (
  <StaticQuery
    query={graphql`
      query landingFooterQuery {
        allWordpressAcfOptions {
          edges {
            node {
              options {
                footer_logo_svg_code
              }
            }
          }
        }

      }
    `}

    render={data => (
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="row">
              <div className="col-sm-4">
                <div className="footer_logo">
                  <Link to="/" dangerouslySetInnerHTML={{ __html: data.allWordpressAcfOptions.edges[0].node.options.footer_logo_svg_code }} />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-6">
                    <p><span className="title">Perth Office - By appointment Only</span> <address>5 Martin Place Canning Vale, Western Australia</address></p>
                  </div>
                  <div className="col-sm-6">
                  <p><span className="title">Phone</span> <a href="tel:1800894400" className="phone">1800 894 400</a></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <p>© 2020 Mortlock Timber <span className="title"><Link to="/terms-and-conditions">Terms & Conditions</Link></span></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )}
  />
)

export default LandingFooter